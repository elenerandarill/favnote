import styled, {css} from "styled-components";
import PropTypes from 'prop-types';
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import LinkIcon from "../../../assets/icons/link.svg";
import {useState} from "react";
import {Redirect} from "react-router-dom";


const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({activeColor, theme}) => activeColor ? theme[activeColor] : 'white'};
  ${({flex}) =>
          flex && css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
  :first-of-type {
    z-index: 200;
  }
`


const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({theme}) => theme.bold};
  font-size: ${({theme}) => theme.fontSize.xs};
`

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({theme}) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
`

const StyledLinkButton = styled.a`
  display: block;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-size: contain;
  background: white url(${LinkIcon}) no-repeat;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 20px;
`

const Card = ({id, cardType, title, created, twitterName, articleUrl, content}) => {
    const [redirect, setRedirect] = useState(false)

    const handleCardClick = () => setRedirect(!redirect)

    if(redirect) {
        return <Redirect to={`${cardType}/${id}`}/>
    }
    return (
        <StyledWrapper onClick={handleCardClick}>
            <InnerWrapper activeColor={cardType}>
                <StyledHeading>{title}</StyledHeading>
                <DateInfo>{created}</DateInfo>
                {/*{cardType === 'twitter' && <StyledAvatar src="https://unavatar.now.sh/twitter/hello_roman"/>}*/}
                {cardType === 'twitters' && <StyledAvatar src={twitterName}/>}
                {cardType === 'articles' && <StyledLinkButton href={articleUrl}/>}
            </InnerWrapper>
            <InnerWrapper flex>
                <Paragraph>{content}</Paragraph>
                <Button secondary>Remove</Button>
            </InnerWrapper>
        </StyledWrapper>
    )
}

Card.propTypes = {
    cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
}

Card.defaultProps = {
    cardType: 'note',
    twitterName: null,
    articleUrl: null,
}

export default Card;