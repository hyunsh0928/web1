// 비밀번호 보이기/가리기 기능을 하는 함수입니다.
function togglePasswordVisibility() {
  var passwordInput = document.getElementById('passwordInput');
  var toggleImage = document.getElementById('toggleImage');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleImage.src = 'close.png'; // 보이기일 때 이미지 변경
  } else {
    passwordInput.type = 'password';
    toggleImage.src = 'open.png'; // 가리기일 때 이미지 변경
  }
}

document.querySelector('img').addEventListener('click', function() {
  window.location.href = 'article.html'; // 여기에 주소 입력
});

function forgotPassword() {
  alert("어쩌라구요 ㅋ");
  window.location.href = "index.html"; // 여기에 비밀번호 재설정 페이지의 URL을 넣어주세요
}

function login() {
  alert("안되지롱 ㅋ");
  window.location.href = "index.html"; // 여기에 비밀번호 재설정 페이지의 URL을 넣어주세요
}