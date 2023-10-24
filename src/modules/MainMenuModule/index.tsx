interface IRoute {
    module: JSX.Element,
    icon: JSX.Element,
}

interface IProps {
    routes: IRoute[]
}

function MainMenuModule({
    routes
}: IProps) {
    return (  
        <div>
            {routes.map((route: IRoute, key: number) => (
                <div key={key}>
                    {route.module}
                    {route.icon}
                </div>
            ))}
        </div>
    );
}

export default MainMenuModule;