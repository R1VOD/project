let time = 60 * 60 * 60;
let timerInterval;

function updateTimer() {
    let timerElement = document.getElementById('timer');
    if (timerElement) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        timerElement.innerText = 
            `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

        if (time > 0) {
            time--;
        } else {
            clearInterval(timerInterval);
            timerElement.innerText = "00 : 00 : 00";
        }
    } else {
        console.error("Элемент с ID 'timer' не найден");
    }
}

updateTimer();
timerInterval = setInterval(updateTimer, 1000);

const burger = document.getElementById('burger');
const nav = document.getElementById('main-nav');

// Функция для открытия/закрытия меню
function toggleMenu() {
  nav.classList.toggle('active');
  burger.classList.toggle('toggle');
}

// Обработчик клика на бургер
burger.addEventListener('click', toggleMenu);

// Закрытие меню при клике вне его области
document.addEventListener('click', function(event) {
  const isClickInside = nav.contains(event.target) || burger.contains(event.target);

  if (!isClickInside && nav.classList.contains('active')) {
    toggleMenu();
  }
});

// Открытие модального окна при клике на "Sign Up"
document.querySelector('.signup-button').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signup-modal').style.display = 'block';
});

// Закрытие модального окна при клике на крестик
document.getElementById('close-modal').addEventListener('click', function () {
  document.getElementById('signup-modal').style.display = 'none';
});

// Закрытие модального окна при клике вне содержимого
window.addEventListener('click', function (event) {
  const modal = document.getElementById('signup-modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});

// Обработка формы регистрации
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

  // Здесь можно отправить данные на сервер или выполнить другую логику
  alert("Registration successful!");
  document.getElementById('signup-modal').style.display = 'none';
});