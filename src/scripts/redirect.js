function redirecionar() {
  window.location.href = "https://www.google.com"
}

window.onload = function() {
  setTimeout(redirecionar, 4000)
}