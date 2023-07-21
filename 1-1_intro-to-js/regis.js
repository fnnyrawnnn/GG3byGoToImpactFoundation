document.addEventListener('DOMContentLoaded', function() {
     var RegisForm = document.getElementById('regis-form');
     RegisForm.addEventListener('submit', function(e) {
          e.preventDefault();

          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;

          (email === '' || password === '') ? alert('Field username dan password masih kosong') : (!validasiemail) ? alert('email tidak valid') : (password.length <= 6) ? alert('Password kurang dari 6 karakter') : alert('register berhasil');
          
          function validasiemail(email){
               return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          }
     });
});