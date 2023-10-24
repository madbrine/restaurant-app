import s from './styles.module.css';

interface IProps {
    type: 'positive' | 'positive-fill' | 'cancel';
    text: string;
    noIcon?: boolean;
    func?: () => void;
}

function ButtonUI({
    type,
    text,
    noIcon,
    func
}: IProps) {

    const Event = () => {
        if (func) func()
    }

    return (
        <button className={s[type]} onClick={Event}>
            {type === "cancel" && !noIcon ?
                <svg className={s[type + '-svg']} xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <g clip-path="url(#clip0_702_1212)">
                        <path d="M15.7501 4.75843C15.4251 4.43343 14.9001 4.43343 14.5751 4.75843L10.5001 8.8251L6.4251 4.7501C6.1001 4.4251 5.5751 4.4251 5.2501 4.7501C4.9251 5.0751 4.9251 5.6001 5.2501 5.9251L9.3251 10.0001L5.2501 14.0751C4.9251 14.4001 4.9251 14.9251 5.2501 15.2501C5.5751 15.5751 6.1001 15.5751 6.4251 15.2501L10.5001 11.1751L14.5751 15.2501C14.9001 15.5751 15.4251 15.5751 15.7501 15.2501C16.0751 14.9251 16.0751 14.4001 15.7501 14.0751L11.6751 10.0001L15.7501 5.9251C16.0668 5.60843 16.0668 5.0751 15.7501 4.75843V4.75843Z" fill="#F76659" />
                    </g>
                </svg>
                : !noIcon &&
                <svg className={s[type + '-svg']} xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <g clipPath="url(#clip0_702_556)">
                        <path d="M8.00006 13.5001L5.08339 10.5834C4.75839 10.2584 4.24172 10.2584 3.91672 10.5834C3.59172 10.9084 3.59172 11.4251 3.91672 11.7501L7.40839 15.2418C7.73339 15.5668 8.25839 15.5668 8.58339 15.2418L17.4167 6.41676C17.7417 6.09176 17.7417 5.5751 17.4167 5.2501C17.0917 4.9251 16.5751 4.9251 16.2501 5.2501L8.00006 13.5001Z" />
                    </g>
                </svg>
            }
            {text}
        </button>
    );
}

export default ButtonUI;