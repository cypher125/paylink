import axios from 'axios';

export interface PaymentConfig {
    currency: string;
    minimum_transfer: number;
    maximum_transfer: number;
    transaction_fee_percentage: number;
    transfer_fee: number;
    allowed_payment_methods: string[];
    save_card_by_default: boolean;
    require_otp_for_saved_cards: boolean;
    bank_transfer_expiry_minutes: number;
    supported_banks: [string, string][];
    paystack_public_key: string;
}

class ConfigService {
    private static instance: ConfigService;
    private config: PaymentConfig | null = null;

    private constructor() {}

    public static getInstance(): ConfigService {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }
        return ConfigService.instance;
    }

    public async loadConfig(): Promise<PaymentConfig> {
        if (this.config) {
            return this.config;
        }

        try {
            const response = await axios.get<PaymentConfig>('/api/payments/config/');
            this.config = response.data;
            return this.config;
        } catch (error) {
            console.error('Failed to load payment configuration:', error);
            throw error;
        }
    }

    public getConfig(): PaymentConfig | null {
        return this.config;
    }

    public getCurrency(): string {
        return this.config?.currency || 'NGN';
    }

    public formatAmount(amount: number): string {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: this.getCurrency(),
        }).format(amount);
    }

    public calculateTransactionFee(amount: number): number {
        if (!this.config) return 0;
        return (amount * this.config.transaction_fee_percentage) / 100;
    }

    public calculateTransferFee(): number {
        return this.config?.transfer_fee || 0;
    }

    public calculateTotalAmount(amount: number, includeTransferFee: boolean = false): number {
        const transactionFee = this.calculateTransactionFee(amount);
        const transferFee = includeTransferFee ? this.calculateTransferFee() : 0;
        return amount + transactionFee + transferFee;
    }

    public isValidTransferAmount(amount: number): boolean {
        if (!this.config) return false;
        return amount >= this.config.minimum_transfer && amount <= this.config.maximum_transfer;
    }

    public getSupportedBanks(): [string, string][] {
        return this.config?.supported_banks || [];
    }

    public getPaystackPublicKey(): string {
        return this.config?.paystack_public_key || '';
    }

    public isPaymentMethodAllowed(method: string): boolean {
        return this.config?.allowed_payment_methods.includes(method) || false;
    }
}

export const configService = ConfigService.getInstance();
export default configService; 