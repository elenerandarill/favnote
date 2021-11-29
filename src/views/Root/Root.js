import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import { theme } from "../../theme/MainTheme";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import ButtonIcon from "../../components/atoms/ButtonIcon/ButtonIcon";
import bulbIcon from '../../assets/icons/bulb.svg'
import Card from "../../components/molecules/Card/Card";

const Root = () => {
    return(
        <div>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <>
                    <h1>Hello</h1>
                    <Button>Close / Save</Button>
                    <Button secondary>remove</Button>
                    <ButtonIcon icon={bulbIcon}/>
                    <Input/>
                    <Input search/>
                    <Card/>
                    <Card cardType="twitter"/>
                    <Card cardType="article"/>
                </>
            </ThemeProvider>
        </div>
    )
}

export default Root;
