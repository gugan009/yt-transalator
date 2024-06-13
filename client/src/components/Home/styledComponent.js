import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`

export const HomeImg = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    display: none;
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

export const HomePara = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 2.0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const TransalateButton = styled.button`
  border-radius: 10px;
  border: 2px solid ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  width: 170px;
  height: 35px;
  padding: 10px;
  margin-top: 10px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: bold;
  text-decoration: none;
`

export const HomeBigImg = styled.img`
  display: none;
  width: 30%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`