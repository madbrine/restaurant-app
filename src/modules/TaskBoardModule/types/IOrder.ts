export interface IOrder {
    id: number;
    cost: number;
    payment: 'cash' | 'pay-me' | 'credit-card' | 'wallet' | 'blue-service';
    take: 'in-place' | 'take-in-car' | 'delivery';
    items: {
        name: string;
        amount: number;
        additive?: string[]
    }[];
    time: string;
    comments?: string[];
}