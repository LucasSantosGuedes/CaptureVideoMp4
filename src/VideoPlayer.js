import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-hls';

class VideoPlayer extends Component {
  componentDidMount() {
    // Configurações do player de vídeo
    const options = {
      autoplay: false,
      controls: true,
      sources: [
        {
          src: 'seu_video.mp4', // Substitua pela URL do seu vídeo
          type: 'video/mp4',
        },
      ],
    };

    // Criação do player de vídeo
    this.player = videojs(this.videoNode, options);

    // Adicione um ouvinte para atualizar o tempo assistido
    this.player.on('timeupdate', this.handleTimeUpdate);
  }

  componentWillUnmount() {
    // Destrua o player de vídeo quando o componente for desmontado
    if (this.player) {
      this.player.dispose();
    }
  }

  handleTimeUpdate = () => {
    // Obtém o tempo assistido atual do vídeo
    const currentTime = this.player.currentTime();

    // Você pode fazer o que quiser com o tempo assistido aqui
    console.log(`Tempo Assistido: ${currentTime} segundos`);
  };

  render() {
    return (
      <div>
        <video
          ref={(node) => (this.videoNode = node)}
          className="video-js vjs-default-skin"
        />
      </div>
    );
  }
}

export default VideoPlayer;
