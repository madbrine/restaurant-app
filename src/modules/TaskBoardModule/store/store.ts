import { create } from 'zustand';
import { IOrder } from '../types/IOrder';

interface IModuleStore {
    newOrders: IOrder[];
    waitingOrders: IOrder[];
    readyOrders: IOrder[];
    deliveryOrders: IOrder[];
    finishedOrders: IOrder[];

    toWaiting: (id: number) => void;
    toReady: (id: number) => void;
    toDelivery: (id: number) => void;
    toFinished: (id: number) => void;
    removeOrderById: (id: number) => void;

}

const useModuleStore = create<IModuleStore>((set) => ({
    newOrders: [
        {
            id: 378221,
            cost: 300560,
            payment: 'pay-me',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
        {
            id: 923211,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
        {
            id: 323433,
            cost: 300560,
            payment: 'credit-card',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
        {
            id: 321542,
            cost: 300560,
            payment: 'cash',
            take: 'delivery',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
        {
            id: 378902,
            cost: 300560,
            payment: 'blue-service',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        }
    ],
    waitingOrders: [
        {
            id: 123544,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
        {
            id: 323299,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
    ],
    readyOrders: [
        {
            id: 762341,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
    ],
    deliveryOrders: [
        {
            id: 123299,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
        {
            id: 233299,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
    ],
    finishedOrders: [
        {
            id: 323299,
            cost: 300560,
            payment: 'wallet',
            take: 'in-place',
            items: [
                {
                    name: 'Пепси',
                    amount: 3,
                },
                {
                    name: 'Гамбургер',
                    amount: 1,
                    additive: ['С сыром', 'Без лука']
                },
                {
                    name: 'Лаваш мясной Standart острый',
                    amount: 2
                },
            ],
            time: '15:22',
        },
    ],


    toWaiting: (id) => {
        set((state) => {
            const orderToMove = state.newOrders.find((order) => order.id === id);
            if (orderToMove) {
                const newNewOrders = state.newOrders.filter((order) => order.id !== id);
                return {
                    newOrders: newNewOrders,
                    waitingOrders: [...state.waitingOrders, orderToMove],
                };
            }
            return state;
        });
    },

    toReady: (id) => {
        set((state) => {
            const orderToMove = state.waitingOrders.find((order) => order.id === id);
            if (orderToMove) {
                const newWaitingOrders = state.waitingOrders.filter((order) => order.id !== id);
                return {
                    waitingOrders: newWaitingOrders,
                    readyOrders: [...state.readyOrders, orderToMove],
                };
            }
            return state;
        });
    },

    toDelivery: (id) => {
        set((state) => {
            const orderToMove = state.readyOrders.find((order) => order.id === id);
            if (orderToMove) {
                const newReadyOrders = state.readyOrders.filter((order) => order.id !== id);
                return {
                    readyOrders: newReadyOrders,
                    deliveryOrders: [...state.deliveryOrders, orderToMove],
                };
            }
            return state;
        });
    },

    toFinished: (id) => {
        set((state) => {
            const orderToMove = state.deliveryOrders.find((order) => order.id === id);
            if (orderToMove) {
                const newDeliveryOrders = state.deliveryOrders.filter((order) => order.id !== id);
                return {
                    deliveryOrders: newDeliveryOrders,
                    finishedOrders: [...state.finishedOrders, orderToMove],
                };
            }
            return state;
        });
    },
    removeOrderById: (id: number) => {
        set((state) => {
            // Создайте новые массивы без объекта с соответствующим id
            const newNewOrders = state.newOrders.filter((order) => order.id !== id);
            const newWaitingOrders = state.waitingOrders.filter((order) => order.id !== id);
            const newReadyOrders = state.readyOrders.filter((order) => order.id !== id);
            const newDeliveryOrders = state.deliveryOrders.filter((order) => order.id !== id);
            const newFinishedOrders = state.finishedOrders.filter((order) => order.id !== id);

            // Возвращаем новое состояние со смерженными массивами
            return {
                newOrders: newNewOrders,
                waitingOrders: newWaitingOrders,
                readyOrders: newReadyOrders,
                deliveryOrders: newDeliveryOrders,
                finishedOrders: newFinishedOrders,
            };
        });
    },
}));


export default useModuleStore;