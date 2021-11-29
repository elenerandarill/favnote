import styled from "styled-components";
import {NavLink} from "react-router-dom"
import ButtonIcon from "../atoms/ButtonIcon/ButtonIcon";
import pencilIcon from "../../assets/icons/pen.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import bulbIcon from "../../assets/icons/bulb.svg";
import logoutIcon from "../../assets/icons/logout.svg"
import logo from "../../assets/icons/logo.svg"

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({theme, activeColor}) => (
      activeColor ? theme[activeColor] : theme.note
  )};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Sidebar = ({pageType}) => {
    return (
        <StyledWrapper activeColor={pageType}>
            <StyledLogoLink/>
            <StyledLinksList>
                <li>
                    <ButtonIcon exact as={NavLink} to="/" icon={pencilIcon} activeClassName="active"/>
                </li>
                <li>
                    <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClassName="active"/>
                </li>
                <li>
                    <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClassName="active"/>
                </li>
            </StyledLinksList>
                <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon}/>
        </StyledWrapper>
    );
};


export default Sidebar;