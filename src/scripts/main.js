document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.video-section__video');
  const errorMsg = document.createElement('p');
  errorMsg.className = 'error';
  document.querySelector('.video-section').appendChild(errorMsg);

  function startCamera() {
      const constraints = {
          video: {
              facingMode: "user" // Configuração para usar a câmera frontal
          }
      };

      navigator.mediaDevices.getUserMedia(constraints)
          .then(stream => {
              video.srcObject = stream;
              video.play();
          })
          .catch(e => {
              console.log(e);
              errorMsg.textContent = `Erro ao acessar a câmera: ${e.message}`;
          });
  }

  if (location.protocol === 'https:' || location.hostname === 'localhost') {
      startCamera();
  } else {
      errorMsg.textContent = 'Acesso à câmera requer HTTPS';
  }
});
