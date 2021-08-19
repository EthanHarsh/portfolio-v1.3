$('#contact-button').click(() => {
  //console.log('contactbutton clieck')
  $.post("/email/v1/send", $('#contact-form').serialize(), () => {
      console.log('sent');
  })
  $('#contact-form').addClass('d-none');
  $('#contact-button').addClass('d-none');
  $('#status').removeClass('d-none');
})
