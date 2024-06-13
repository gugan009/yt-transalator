import Navbar from "../Navbar"
import {Link} from 'react-router-dom'
import homeimage from '../../images/homeimage.png'
import { Heading, HomeContainer, HomeImg, HomePara, TransalateButton, HomeBigImg } from "./styledComponent"
import Theme from "../../context/theme"

const Home = () =>(
    <Theme.Consumer>
        {value=>{
            const {isDarkTheme} = value 
            return(
                <div>
                    <Navbar />
                    <HomeContainer isDarkTheme={isDarkTheme}>
                        <HomeImg src={homeimage} />
                        <div>
                            <Heading isDarkTheme={isDarkTheme}>Video Translator</Heading>
                            <HomePara isDarkTheme={isDarkTheme}>Automatically translate your videos into tamil language using our website</HomePara>
                            <TransalateButton as={Link} to='/translate' isDarkTheme={isDarkTheme}>Translate YT Videos</TransalateButton>
                        </div>
                        <HomeBigImg src={homeimage} />
                    </HomeContainer>
                </div>
            )
        }}
    </Theme.Consumer>
    
)

export default Home