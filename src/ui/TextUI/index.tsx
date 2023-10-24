import s from './styles.module.css';

interface IProps {
    text: string;
    type: 'regular' | 'big-bold' | 'info' | 'desc' | 'header' | 'placeholder' | 'comment'
}

function TextUI({
    text,
    type
}: IProps) {
    return (  
        <div className={s[type]}>
            {text}
        </div>
    );
}

export default TextUI;