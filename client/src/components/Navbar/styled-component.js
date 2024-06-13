import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  height: 10vh;
  padding: 5px 5px 5px 5px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 5px 20px 5px 20px;
  }
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (min-width: 768px) {
    width: 50px;
  }
`

export const LogoName = styled.p`
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#232323')};
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    margin-right: 10px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const NavItems = styled.li`
  text-decoration: none;
`

export const NavImg = styled.p`
    font-size: 25px;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
    margin-right: 20px;
    color: ${props =>((props.selected && props.isDarkTheme===false) ? "#1BCDC8": null)};
    color: ${props =>((props.selected && props.isDarkTheme) ? "#1BCDC8": null)};
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const ThemeImg = styled.p`
    font-size: 20px;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
    margin-right: 20px;
`

export const NavName = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#232323')};
  font-weight: 500;
  display: none;
  margin-right: 50px;
  color: ${props =>((props.selected && props.isDarkTheme===false) ? "#1BCDC8": null)};
    color: ${props =>((props.selected && props.isDarkTheme) ? "#1BCDC8": null)};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`