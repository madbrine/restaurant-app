interface IProps {
    name: string;
    size?: number;
    color?: 'primary' | 'background'
}

function IconUI({ name, size, color }: IProps) {
    return (
            <img
                src={'/icons/' + name + '-icon.svg'}
                alt={`${name} -icon`}
                width={size ? size : 16}
                height={size ? size : 16}
            />
    );
}

export default IconUI;