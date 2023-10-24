import { useStore } from "zustand";
import IconUI from "../../../../ui/IconUI";
import useModuleStore from "../../store/store";
import s from './styles.module.css'

interface IProps {
    icon: string;
}



function MenuItem({ icon }: IProps) {
    const current = useModuleStore((state) => state.current)
    return (
        <>
            <div className={s[current === icon ? 'container-active' : 'container']}>
                <IconUI name={icon} size={20} />
            </div>
        </>
    );
}

export default MenuItem;