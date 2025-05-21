// Ejemplo de funcionalidad: Mostrar una alerta al enviar el formulario
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por contactarnos. Nos comunicaremos contigo pronto.');
});
