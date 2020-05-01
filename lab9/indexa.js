(function($){
  $(document).ready(function() {
    $( "#login" ).submit(function( event ) {
      event.preventDefault();
      const form = $(this);
      const email = form.find('#email');
      const password = form.find('#password');
      const url = form.find('#url');

      console.log('Email: '+email.val());
      console.log('Password: '+password.val());
      console.log('Url: '+url.val());
    });
  })
})(jQuery);