import IconUI from '../../ui/IconUI';
import TextUI from '../../ui/TextUI';
import OrdersColumn from './components/OrdersColumn';
import s from './styles.module.css';

function TaskBoardModule() {
    return (
        <div className={s['container']}>
            <div className={s['header']}>
                <div className={s['search-input']}>
                    <IconUI name={'search'} size={24} />
                    <input placeholder='Поиск по'></input>
                </div>
                <div className={s['header-items']}>
                    <div className={s['header-item']}>
                        <IconUI name={'shopping-list'} size={20} />
                        <TextUI type="regular" text="Всего: 115" />
                        <IconUI name={'down-arrow'} size={24} />
                    </div>
                    <div className={s['header-item']}>
                        <IconUI name={'watch-outlined'} size={20} />
                        <TextUI type="regular" text="45:68" />
                    </div>
                </div>
            </div>
            <div className={s['dashboard']}>
                <OrdersColumn type={'new'} />
                <OrdersColumn type={'waiting'} />
                <OrdersColumn type={'ready'} />
                <OrdersColumn type={'delivery'} />
            </div>
        </div>
    );
}

export default TaskBoardModule;