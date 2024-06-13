import { useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import Theme from '../../context/theme'
import { ErrorMsg, Para, TButton, TransalateContainer, UrlInput } from './styledComponent'
import {ThreeDots} from 'react-loader-spinner'
import './index.css'

const Translate = () => {
    const [inputUrl, setUrl] = useState('')
    const [videoSrc, setVideoSrc] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    const onEnterUrl = (event) => setUrl(event.target.value)
     
    const onClickTranslate = async () => {
        setLoading(true)
        setError(false)
        try {
          setVideoSrc(null)
          const response = await axios.post('http://localhost:5000/process_video', { url: inputUrl }, {
            responseType: 'blob', // Ensure response is handled as a blob
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const videoBlob = new Blob([response.data], { type: 'video/mp4' });
          const videoUrl = URL.createObjectURL(videoBlob);
          setVideoSrc(videoUrl);
          setUrl('')
        } catch (error) {
            setVideoSrc(null)
          console.error('Error processing video:', error);
          setError(true)
        }
        setLoading(false)
      }
    

    return (
        <Theme.Consumer>
            {value => {
                const {isDarkTheme} = value 
                return (
                    <div>
                        <Navbar />
                        <TransalateContainer isDarkTheme={isDarkTheme}>
                            <UrlInput onBlur={onEnterUrl} isDarkTheme={isDarkTheme} type='text' placeholder='Paste Your Youtube URL' />
                            <TButton onClick={onClickTranslate}>Translate</TButton>
                            {loading && <ThreeDots />}
                            {videoSrc && (
                                <div>
                                    <Para isDarkTheme={isDarkTheme}>Translated Video:</Para>
                                    <video className='video'  src={videoSrc} controls />
                                </div>
                            )}
                            {isError && <ErrorMsg isDarkTheme={isDarkTheme}>Error while Processing Video.</ErrorMsg>}
                        </TransalateContainer>
                    </div>
                )
            }}
        </Theme.Consumer>
    )
}
export default Translate