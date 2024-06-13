from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import assemblyai as aai
from translate import Translator
from moviepy.editor import VideoFileClip, AudioFileClip
import os
from pytube import YouTube
from elevenlabs.client import ElevenLabs
from elevenlabs import save

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes




@app.route('/process_video', methods=['POST'])
def process_video():    
    if(os.path.exists("video1.mp4")):
        os.remove('video1.mp4')  
    try:
        data = request.json
        url = data.get('url')
        print(url)
        
        if not url:
            return jsonify({'error': 'URL is required'}), 400

        # Download the video from YouTube
        try:
            yt = YouTube(url)
            video = yt.streams.get_highest_resolution()
            video_file = video.download()
            os.rename(video_file, "video1.mp4")
        except Exception as e:
            app.logger.error("Error downloading video: {}".format(e))
            return jsonify({'error': "Error downloading video: {}".format(e)}), 500

        # Load the video file
        video_path = 'video1.mp4'
        clip = VideoFileClip(video_path)
        video_audio = clip.audio
        ori_audio_file = 'ori_audio.wav'
        video_audio.write_audiofile(ori_audio_file)

        # Transcribe the audio using AssemblyAI
        try:
            aai.settings.api_key = "0ccb738ffb3c479c83744f04e13bf920"
            transcriber = aai.Transcriber()
            transcript = transcriber.transcribe("video1.mp4")
        except Exception as e:
            app.logger.error("Error transcribing video: {}".format(e))
            return jsonify({'error': "Error transcribing video: {}".format(e)}), 500
        
        
        if not transcript.text:
            return jsonify({'error': 'Transcription failed'}), 500

        # Translate the text
        def translate_text(text, from_lang='en', to_lang='ta'):
            translator = Translator(from_lang=from_lang, to_lang=to_lang)
            translated_text = ''
            chunks = [text[i:i+500] for i in range(0, len(text), 500)]
            for chunk in chunks:
                translation = translator.translate(chunk)
                translated_text += translation + ' '
            return translated_text

        try:
            translated_text = translate_text(transcript.text)
        except Exception as e:
            app.logger.error("Error translating text: {}".format(e))
            return jsonify({'error': "Error translating text: {}".format(e)}), 500
           

        # Convert translated text to audio using ElevenLabs
        try:
            client = ElevenLabs(api_key="sk_a43a70bd58a737b1b3ba5c9d8297d24cf24975357226a0c1")
            audio = client.generate(text=translated_text, voice='Charlie', model='eleven_multilingual_v2')
            save(audio, 'translated_audio.mp3')
        except Exception as e:
            app.logger.error("Error generating audio: {}".format(e))
            return jsonify({'error': "Error generating audio: {}".format(e)}), 500
            

        # Replace the original audio with the translated audio
        clip = clip.without_audio() 
        translated_audio_clip = AudioFileClip('translated_audio.mp3')
        new_clip = clip.set_audio(translated_audio_clip)

        final_output_path = 'translated_video.mp4'
        new_clip.write_videofile(final_output_path, codec='libx264', audio_codec='aac')

        # Clean up temporary files
        os.remove('ori_audio.wav')
        os.remove('translated_audio.mp3')
        os.remove('video1.mp4')

        return send_file(final_output_path, mimetype='video/mp4', as_attachment=True, download_name='translated_video.mp4')

    except Exception as e:
        app.logger.error("Unexpected error: {}".format(e))
        return jsonify({'error': "Unexpected error: {}".format(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
