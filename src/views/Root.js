import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
import Notes from "./Notes";
import Twitters from "./Twitters";
import Articles from "./Articles";

const Root = () => {
    return (
        <BrowserRouter>
            <MainTemplate>

                <Switch>
                    <Route exact path="/" component={Notes}/>
                    <Route path="/twitters" component={Twitters}/>
                    <Route path="/articles" component={Articles}/>
                </Switch>
                {/*<Button>Close / Save</Button>*/}
                {/*<Button secondary>remove</Button>*/}
                {/*<ButtonIcon icon={bulbIcon}/>*/}
                {/*<Input/>*/}
                {/*<Input search/>*/}
                {/*<Card/>*/}
                {/*<Card cardType="twitter"/>*/}
                {/*<Card cardType="article"/>*/}
            </MainTemplate>
        </BrowserRouter>
    )
}

export default Root;
