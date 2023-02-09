//Envio de mensaje por EmailJs
const btn = document.getElementById('enviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_9238515';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});