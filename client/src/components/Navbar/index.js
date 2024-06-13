import {Link, withRouter} from 'react-router-dom'

import {FaMoon, FaLanguage} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import { IoInformationCircle } from "react-icons/io5"

import darkThemeLogo from '../../images/darkThemeLogo.png'
import lightThemeLogo from '../../images/lightThemeLogo.png'
import { NavContainer, Logo, LogoName, LogoContainer, NavList, NavItems, NavImg, NavName, ThemeImg } from './styled-component'

import Theme from '../../context/theme'

const Navbar = props =>(
    <Theme.Consumer>
        {value=>{
            const {isDarkTheme, changeTheme} = value 
            const {location} = props
            const {pathname} = location
            
            return (
                <NavContainer isDarkTheme={isDarkTheme}>
                    <LogoContainer as={Link} to='/'>
                        <Logo src={isDarkTheme ? darkThemeLogo:lightThemeLogo} />
                        <LogoName isDarkTheme={isDarkTheme}>TubeLingo</LogoName>
                    </LogoContainer>
                    <NavList>
                        <NavItems as={Link} to="/">
                            <NavImg selected={pathname==='/'} as={AiFillHome} isDarkTheme={isDarkTheme}/>
                            <NavName selected={pathname==='/'} isDarkTheme={isDarkTheme}>Home</NavName>
                        </NavItems>
                        <NavItems as={Link} to="/translate">
                            <NavImg selected={pathname==='/translate'} as={FaLanguage} isDarkTheme={isDarkTheme}/>
                            <NavName selected={pathname==='/translate'} isDarkTheme={isDarkTheme}>Translate</NavName>
                        </NavItems>
                        <NavItems as={Link} to="/about">
                            <NavImg selected={pathname==='/about'} as={IoInformationCircle} isDarkTheme={isDarkTheme}/>
                            <NavName selected={pathname==='/about'} isDarkTheme={isDarkTheme}>About</NavName>
                        </NavItems>
                        <NavItems onClick={changeTheme}>
                            <ThemeImg as={isDarkTheme? FiSun:FaMoon} isDarkTheme={isDarkTheme}/>
                        </NavItems>
                    </NavList>



                </NavContainer>
            )
        }}
    </Theme.Consumer>
)

export default withRouter(Navbar)