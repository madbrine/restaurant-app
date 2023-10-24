import IconUI from '../../../../ui/IconUI';
import { IRoute } from '../../types/IRoute';
import MenuItem from '../MenuItem';
import s from './styles.module.css';

interface IProps {
    routes: IRoute[]
}
function MenuBar({ routes }: IProps) {
    return (
        <div className={s['container']}>
            <div>
                {routes.map((route: IRoute, key: number) => (
                    !route.bottom &&
                    <div key={key}>
                        <MenuItem icon={route.icon} />
                    </div>
                ))}
            </div>
            <div>
                {routes.map((route: IRoute, key: number) => (
                    route.bottom &&
                    <div key={key}>
                        <MenuItem icon={route.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuBar;