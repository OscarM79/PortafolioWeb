const form = document.getElementById ('form');
const enviarCorreo = document.getElementById('correo');


form.addEventListener('submit',function(event){
    event.preventDefault(false);
    const datosForm = new FormData(this)
    enviarCorreo.setAttribute('href',`mailto:1998.omartinez@gmail.com?subject=${datosForm.get('name')} - ${datosForm.get('subject')} - ${datosForm.get('email')}&body=${datosForm.get('message')}`)
    enviarCorreo.click()
})