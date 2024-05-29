// Acessando a câmera e exibindo o vídeo
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("Erro ao acessar a câmera: " + err);
    });

// Capturando a imagem quando o botão é clicado
document.getElementById('snap').addEventListener('click', function() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var photo = document.getElementById('photo');
    var context = canvas.getContext('2d');

    // Desenhando a imagem no canvas
    context.drawImage(video, 0, 0, 640, 480);
    
    // Obtendo a URL da imagem
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
});
