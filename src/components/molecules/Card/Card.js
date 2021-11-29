import styled from "styled-components";
import PropTypes from 'prop-types';
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import LinkIcon from "../../../assets/icons/link.svg";


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
  :first-of-type {
    z-index: 200;
  }
`
//  ${({flex}) =>
//       flex && css`
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//       `}

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
  border: 5px solid ${({theme}) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 40px;
`

const StyledLinkButton = styled.a`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-size: contain;
  background: white url(${LinkIcon}) no-repeat;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`

const Card = ({cardType}) => {
    return (
        <StyledWrapper>
            <InnerWrapper activeColor={cardType}>
                <StyledHeading>Hello Elener</StyledHeading>
                <DateInfo>3 days</DateInfo>
                {cardType === 'twitter' && <StyledAvatar src="https://unavatar.now.sh/twitter/hello_roman"/>}
                {cardType === 'article' && <StyledLinkButton href="#"/>}
            </InnerWrapper>
            <InnerWrapper>
                <Paragraph>
                    Jeśli ten komputer jest chroniony przez zaporę sieciową lub serwer proxy.
                </Paragraph>
                <Button secondary>Remove</Button>
            </InnerWrapper>
        </StyledWrapper>
    )
}

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
}

Card.defaultProps = {
    cardType: 'note',
}

export default Card;