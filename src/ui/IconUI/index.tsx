interface IProps {
    name: string;
    size?: number;
}

function IconUI({name, size}: IProps) {
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