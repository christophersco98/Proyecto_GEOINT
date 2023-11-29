
/* se realiza un lightbox para mis videos y visualizarlos en una pantalla mas grande*/
document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () => {
      document.querySelector('.popup-video').style.display = 'block';
      document.querySelector('.popup-video video').src = vid.getAttribute('src');
    };
  });

  
  document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
  };
/* lo siguiente realiza la funcion de silenciar el video cuando se le cerrar*/

  document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
    document.querySelector('.popup-video video').pause();
    document.querySelector('.popup-video video').muted = true;
  };
  