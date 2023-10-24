import MenuBar from "./components/MenuBar";
import MenuItem from "./components/MenuItem";
import { IRoute } from "./types/IRoute";
import s from './styles.module.css';
import useModuleStore from "./store/store";

interface IProps {
    routes: IRoute[]
}

function MainMenuModule({
    routes
}: IProps) {

    const current = useModuleStore((state) => state.current)

    return (
        <div className={s['container']}>
            <div className={s['menu']}>
                <div className={s['item']}>
                    <MenuItem icon={"logo"} />
                </div>
                <MenuBar routes={routes} />
                <div className={s['item']}>
                    <img src="/avatar.png" alt="avatar-photo" />
                </div>
            </div>
            {routes.map((route: IRoute, key: number) =>
                    current === route.icon && route.module
            )}
        </div>
    );
}

export default MainMenuModule;