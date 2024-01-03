document.querySelector('img').addEventListener('click', function() {
  window.location.href = 'article.html'; // 여기에 주소 입력
});

function checkName() {
    var name = document.getElementById("name").value;
    var checkmark = document.getElementById("nameCheck");
    checkmark.innerHTML = name ? '✔️' : '';
  }

function checkUsername() {
var username = document.getElementById("username").value;
var checkmark = document.getElementById("usernameCheck");
var usernameLengthError = document.getElementById("usernameLengthError");

if (username.length >= 6) {
  checkmark.innerHTML = '✔️';
  usernameLengthError.style.display = 'none';
} else {
  checkmark.innerHTML = '';
  usernameLengthError.style.display = 'block';
}
}

function checkEmail() {
var email = document.getElementById("email").value;
var checkmark = document.getElementById("emailCheck");
var mismatchError = document.getElementById("emailMismatch");

if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email === '') {
  checkmark.innerHTML = email ? '✔️' : '';
  mismatchError.style.display = 'none';
} else {
  checkmark.innerHTML = '';
  mismatchError.style.display = 'block';
}
}

function checkPassword() {
var password = document.getElementById("password").value;
var checkmark = document.getElementById("passwordCheck");
var passwordLengthError = document.getElementById("passwordLengthError");
var confirmPassword = document.getElementById("confirmPassword").value;
var passwordMismatch = document.getElementById("passwordMismatch");

if (password.length >= 8) {
  checkmark.innerHTML = '✔️';
  passwordLengthError.style.display = 'none';
} else {
  checkmark.innerHTML = '';
  passwordLengthError.style.display = 'block';
  passwordMismatch.style.display = 'none';
  document.getElementById("confirmPasswordCheck").innerHTML = '';
}
}




function checkConfirmPassword() {
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var checkmark = document.getElementById("confirmPasswordCheck");
var mismatchError = document.getElementById("passwordMismatch");
var confirmPasswordMismatch = document.getElementById("confirmPasswordMismatch");

if ((password === confirmPassword && password !== '') || confirmPassword === '') {
  checkmark.innerHTML = confirmPassword ? '✔️' : '';
  mismatchError.style.display = 'none';
  confirmPasswordMismatch.style.display = 'none';
  document.getElementById("passwordLengthError").style.display = 'none';
} else {
  checkmark.innerHTML = '';
  mismatchError.style.display = 'block';
  confirmPasswordMismatch.style.display = 'block';
  document.getElementById("passwordLengthError").style.display = 'none';
}
}

  function validateInputs() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("errorMessage");
    var mismatchError = document.getElementById("passwordMismatch");

    if (name && username && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password && confirmPassword === password) {
      alert("가입이 완료되었습니다.");
      window.location.href = "article.html"; // 로그인 페이지로 이동
    } else {
      errorMessage.style.display = 'block';
      setTimeout(function() {
        errorMessage.style.display = 'none';
      }, 2000); // 2초 뒤에 errorMessage 숨김
    }
  }

  // 입력값이 변경될 때마다 확인하여 error-message를 자동으로 제거
  var inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.style.display = 'none';

      var id = this.getAttribute('id');
      var mismatchError = document.getElementById(id + "Mismatch");
      if (mismatchError) {
        mismatchError.style.display = 'none';
      }
    });
  });