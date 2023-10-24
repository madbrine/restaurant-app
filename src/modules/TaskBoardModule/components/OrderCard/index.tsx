import ButtonUI from '../../../../ui/ButtonUI';
import IconUI from '../../../../ui/IconUI';
import TextUI from '../../../../ui/TextUI';
import useModuleStore from '../../store/store';
import { IOrder } from '../../types/IOrder';
import s from './styles.module.css';

interface IProps {
    order: IOrder;
    key: number;
    type: 'new' | 'waiting' | 'ready' | 'delivery' | 'finished';
}
function OrderCard({
    order,
    key,
    type
}: IProps) {

    const moduleStore = useModuleStore();
    

    return (
        <div className={s['container']} key={key}>
            <div className={s['header']}>
                <div className={s['header-section']}>
                    <TextUI text={order.id.toString()} type={'big-bold'} />
                    <IconUI name={'alert-circle'} />
                </div>
                <div className={s['header-section']}>
                    <TextUI text={order.cost.toString()} type={'info'} />
                    <IconUI name={order.payment} />
                    <IconUI name={order.take} />
                </div>
            </div>
            <div className={s['order-items']}>
                {order.items.map((item, key: number) => (
                    <div key={key} className={s['order-subitem']}>
                        <TextUI text={`${item.amount} x ${item.name}`} type={'regular'} />

                        {item.additive && item.additive.map((addit, key: number) =>
                            <TextUI text={addit} type={'desc'} key={key}/>
                        )}
                    </div>
                ))}
                <div className={s['time']}>
                    <IconUI name={'watch'} />
                    <TextUI text={order.time} type={'info'} />
                </div>
            </div>
            <div className={s['buttons']}>
                {type === 'new' &&
                    <>
                        <ButtonUI type={'cancel'} text={'Отменить'} func={() => moduleStore.removeOrderById(order.id)}/>
                        <ButtonUI type={'positive-fill'} text={'Принять'} func={() => moduleStore.toWaiting(order.id)}/>
                    </>
                }
                {type === 'waiting' &&
                    <>
                        <ButtonUI type={'positive'} text={'Готово'} func={() => moduleStore.toReady(order.id)}/>
                    </>
                }
                {type === 'ready' &&
                    <>
                        <ButtonUI type={'positive'} text={'Завершить'} noIcon func={() => {moduleStore.toDelivery(order.id)}}/>
                    </>
                }
            </div>
        </div>
    );
}

export default OrderCard;