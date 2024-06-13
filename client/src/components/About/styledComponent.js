import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 90vh;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const AboutImg = styled.img`
width: 300px;
@media screen and (min-width: 768px) {
  display: none;
}
`

export const AboutImgg = styled.img`
  width: 300px;
  @media screen and (min-width: 768px){
    width: 400px;
    margin-right: 10px;
  }
`

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`


export const Para = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const AboutImgBig = styled.img`
  display: none;
  width: 30%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`