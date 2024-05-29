const video = document.querySelector('video')
const myBtn = document.getElementById('btn')

myBtn.addEventListener('click', () => {

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia ) {
        alert('Your browser do not suport this feature')
    }

    navigator.mediaDevices.getUserMedia({video: true})
    .then(function (stream) {
        video.srcObject = stream
        video.play()
    })
})