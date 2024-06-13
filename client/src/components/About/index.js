import Navbar from "../Navbar"
import Theme from "../../context/theme"
import { AboutContainer, ContentContainer, AboutImg, Heading, AboutImgBig, AboutImgg, Para } from "./styledComponent"
import aboutimage from '../../images/aboutimage.png'
import aboutimage1 from '../../images/aboutimage1.png'
const About = () => (
    <Theme.Consumer>
        {value=>{
            const {isDarkTheme} = value
            return(
                <div>
                    <Navbar/>
                    <AboutContainer isDarkTheme={isDarkTheme}>
                        <ContentContainer>
                            <AboutImg src={aboutimage} />
                            <div>
                                <Heading isDarkTheme={isDarkTheme}>Accurate and contextually relevant translations</Heading>
                                <Para isDarkTheme={isDarkTheme}>
                                    Tube Lingo features a 98.5% accuracy in translations. Convert your videos to
                                    text and translate them instantly. Minimize misinterpretations and create localized 
                                    content that resonates with your audience.
                                </Para>
                            </div>
                            <AboutImgBig src={aboutimage} />
                        </ContentContainer> 
                        <ContentContainer>
                            <AboutImgg src={aboutimage1} />
                            <div>
                                <Heading isDarkTheme={isDarkTheme}>Translate your own video</Heading>
                                <Para isDarkTheme={isDarkTheme}>
                                    Translating your videos also helps people consume your 
                                    content who may not be able to listen at the time. 
                                    Many people watch videos with no sound and only subtitles.
                                    You’d be surprised at the amount of people that watch YouTube 
                                    videos with captions on. It’s  important to translate your 
                                    video for these viewers who simply enjoy videos with subtitles.
                                </Para>
                            </div>
                            
                        </ContentContainer> 
                    </AboutContainer>
                </div>
            )
        }}
    </Theme.Consumer>
    
)

export default About