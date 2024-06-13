import styled from 'styled-components'

export const TransalateContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#191919' : '#f9f9f9')};
  min-height: 90vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const UrlInput = styled.input`
  outline: none;
  border: 1px solid ${props => (props.isDarkTheme ? ' #ffffff' : '#615E5E')};
  width: 300px;
  border-radius: 5px;
  height: 35px;
  font-size: 15px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const TButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background-color: #0070f3;
  color: white;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
  :hover{
      background: rgba(0,118,255,0.9);
      box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
  }
  margin-top: 20px;

`

export const ErrorMsg = styled.p`
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
  line-height: 2.0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`