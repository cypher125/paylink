import { useState, useEffect } from 'react';
import configService, { PaymentConfig } from '../services/config';

export const usePaymentConfig = () => {
    const [config, setConfig] = useState<PaymentConfig | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadConfig = async () => {
            try {
                const config = await configService.loadConfig();
                setConfig(config);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to load config'));
            } finally {
                setLoading(false);
            }
        };

        loadConfig();
    }, []);

    const formatAmount = (amount: number): string => {
        return configService.formatAmount(amount);
    };

    const calculateFees = (amount: number, includeTransferFee: boolean = false) => {
        const transactionFee = configService.calculateTransactionFee(amount);
        const transferFee = includeTransferFee ? configService.calculateTransferFee() : 0;
        const totalAmount = amount + transactionFee + transferFee;

        return {
            amount,
            transactionFee,
            transferFee,
            totalAmount,
            formattedAmount: formatAmount(amount),
            formattedTransactionFee: formatAmount(transactionFee),
            formattedTransferFee: formatAmount(transferFee),
            formattedTotalAmount: formatAmount(totalAmount),
        };
    };

    const validateTransferAmount = (amount: number): {
        isValid: boolean;
        error?: string;
    } => {
        if (!config) return { isValid: false, error: 'Configuration not loaded' };

        if (amount < config.minimum_transfer) {
            return {
                isValid: false,
                error: `Amount must be at least ${formatAmount(config.minimum_transfer)}`,
            };
        }

        if (amount > config.maximum_transfer) {
            return {
                isValid: false,
                error: `Amount cannot exceed ${formatAmount(config.maximum_transfer)}`,
            };
        }

        return { isValid: true };
    };

    return {
        config,
        loading,
        error,
        formatAmount,
        calculateFees,
        validateTransferAmount,
        isPaymentMethodAllowed: (method: string) => configService.isPaymentMethodAllowed(method),
        getSupportedBanks: () => configService.getSupportedBanks(),
        getPaystackPublicKey: () => configService.getPaystackPublicKey(),
    };
}; 