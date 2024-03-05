// Tootips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$('#cambio-color1').on('dblclick', function () {
    $('#cambio-color1').toggleClass('text-danger')
});

$('#cambio-color2').on('dblclick', function () {
    $('#cambio-color2').toggleClass('text-danger')
});

// Esconder titulo
function esconder_titulo () {
  $('.card-text').toggle('d-none')
}
$('.card-title').on('click', esconder_titulo)


// Alerta enviado con exito
// function alerto () {
//   alert('Email enviado con éxito')
// }
// $('#enviarCorreo').on('click', alerto)


// Alerta enviado con exito compacta
$('#enviarCorreo').on('click', function () {
  alert('Email enviado con éxito')})
