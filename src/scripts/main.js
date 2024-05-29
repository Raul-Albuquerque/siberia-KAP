const video = document.querySelector('video');
        const errorMsg = document.getElementById('errorMsg');

        function startCamera() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                    video.play();
                })
                .catch(e => {
                    console.log(e);
                    errorMsg.textContent = `Erro ao acessar a câmera: ${e.message}`;
                });
        }

        // Verifique se a página está sendo servida sobre HTTPS
        if (location.protocol === 'https:' || location.hostname === 'localhost') {
            startCamera();
        } else {
            errorMsg.textContent = 'Acesso à câmera requer HTTPS';
        }