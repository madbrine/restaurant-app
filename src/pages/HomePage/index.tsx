import MainMenuModule from "../../modules/MainMenuModule";
import TaskBoardModule from "../../modules/TaskBoardModule";
import ButtonUI from "../../ui/ButtonUI";
import IconUI from "../../ui/IconUI";

function HomePage() {

    const routes = [
        {
            module: <TaskBoardModule/>, 
            icon: 'analytics'
        },
        {
            module: <ButtonUI type="positive" text={"Enter"}/>, 
            icon: 'settings',
            bottom: true
        },
    ]

    return (
        <div style={{height: '100vh'}}>
            <MainMenuModule routes={routes} />
        </div>
    );
}

export default HomePage;