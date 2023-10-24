import { useState } from 'react';
import TextUI from '../../../../ui/TextUI';
import useModuleStore from '../../store/store';
import { IOrder } from '../../types/IOrder';
import OrderCard from '../OrderCard';
import s from './styles.module.css';

interface IProps {
    type: 'new' | 'waiting' | 'ready' | 'delivery' | 'finished'
}

function OrdersColumn({
    type
}: IProps) {

    const store = useModuleStore(); // Получаем состояние из хранилища

    let orders: IOrder[] = [];

    if (type === 'new') {
        orders = store.newOrders;
    } else if (type === 'waiting') {
        orders = store.waitingOrders;
    } else if (type === 'ready') {
        orders = store.readyOrders;
    } else if (type === 'delivery') {
        // Замените на соответствующее свойство, если у вас есть 'deliveryOrders'
        orders = store.deliveryOrders;
    } else if (type === 'finished') {
        orders = store.finishedOrders;
    }

    return (
        <div className={s['container']}>
            <div className={s[type + '-header']}>
                {
                    type === 'new' &&
                    <TextUI type="header" text={`Новый (${orders.length})`} />
                }
                {
                    type === 'waiting' &&
                    <TextUI type="header" text={`Загатовка (${orders.length})`} />
                }
                {
                    type === 'ready' &&
                    <TextUI type="header" text={`Готов (${orders.length})`} />
                }
                {
                    type === 'delivery' &&
                    <TextUI type="header" text={`Курьер в пути (${orders.length})`} />
                }
            </div>
            <div className={s['orders-list']}>
                {orders.map((order: IOrder, key: number) => (
                    <OrderCard order={order} key={key} type={type} />
                ))}
            </div>
        </div>
    );
}

export default OrdersColumn;