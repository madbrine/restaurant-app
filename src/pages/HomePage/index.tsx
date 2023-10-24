import MainMenuModule from "../../modules/MainMenuModule";
import ButtonUI from "../../ui/ButtonUI";
import IconUI from "../../ui/IconUI";

function HomePage() {

    const routes = [
        {
            module: <ButtonUI type="positive-fill" text={"Enter"}/>, 
            icon: <IconUI name={"watch"}/>
        }
    ]

    return (
        <div>
            <MainMenuModule routes={routes} />
        </div>
    );
}

export default HomePage;