
export interface Data {
    description: string;
    amount: number;
    author: string;
    type: 'payment' | 'expense'
    date: string;
    id?: number;
}

export interface PaymentData extends Data {
    recipient: string;
}

export interface ExpenseData extends Data {
    recipients: string[];
}

export type PaymentExpenseData = PaymentData | ExpenseData;

export interface CardCreationData{

    description: string;
    amount: number;
    type: 'payment' | 'expense';
    recipient: string;
}
