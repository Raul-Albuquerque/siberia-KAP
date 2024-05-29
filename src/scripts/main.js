const video = document.querySelector('video');
const myBtn = document.getElementById('btn');

myBtn.addEventListener('click', () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Seu navegador não suporta esta funcionalidade');
    } else {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
                myBtn.textContent = 'Tirar Foto';
                myBtn.onclick = function() {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imgDataUrl = canvas.toDataURL('image/png');
                    // Aqui você pode enviar a imgDataUrl para onde quiser, exibir em uma <img>, etc.
                    alert('Foto tirada! Você pode salvar ou enviar a foto.');
                    stream.getTracks().forEach(track => track.stop()); // Parar a câmera após tirar a foto
                };
            })
            .catch(function(error) {
                console.error('Erro ao acessar a câmera: ', error);
                alert('Erro ao acessar a câmera. Por favor, verifique as permissões e tente novamente.');
            });
    }
});
