const $ = require('jquery');
function backHome(){
  document.location="/portal";
}
$('#btn-thanks').on('click', (event)=>{
  console.log('aqui');
  event.preventDefault();
  backHome();
});
$(document).foundation();
$('#exampleModal1').on('opened', function () { 
  $(window).trigger('resize');
});
(function(){
  emailjs.init("user_sa0pTGfc3hpt7Sp6Iv7nw");
})();
$("#email_form").on('formvalid.zf.abide', function(e) {
  e.preventDefault();
  emailjs.sendForm('yahoo', 'contacto_devsoluciones', '#email_form')
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     Swal.fire({
      title:'Mensaje enviado!',
      message:'Haga clic en el boton OK para continuar',
      timer: 3000,
      type:'success'
     });
     document.getElementById("from_name").value="";
     document.getElementById("email").value="";
     document.getElementById("phone").value="";
     document.getElementById("message_html").value="";
     document.location="gracias.html";
  }, function(error) {
     console.log('FAILED...', error);
     Swal.fire({
      title:'Mensaje no enviado!',
      message:'Haga clic en el boton OK para continuar',
      type:'error',
      timer: 3000
     });
  });
});

$(document)
  // field element is invalid
  .on("invalid.zf.abide", function(ev,elem) {
    document.getElementById(ev.target.id+'Error').classList.add('is-visible');
  })
  .on("valid.zf.abide", function(ev,elem) {
    const idName = ev.target.id;
    if(document.getElementById(idName).checkValidity() && document.getElementById(idName+'Error'))
      document.getElementById(idName+'Error').classList.remove('is-visible');
  })
