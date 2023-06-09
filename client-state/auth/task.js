const form = document.getElementById('signin__form');
const inputFields = Array.from(document.querySelectorAll('.control'));
const userId = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const button = document.querySelector('.btn');

let savedId;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        inputFields.forEach((field) => (field.value = ''));
        localStorage.setItem('id', JSON.stringify(data.user_id));
        savedId = data.user_id;
        userId.textContent = savedId;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
      } else {
        alert('Неверный логин/пароль');
      }
    } else {
      throw new Error('Ошибка при отправке запроса');
    }
  } catch (error) {
    console.error(error);
  }
});

window.addEventListener('load', () => {
  savedId = localStorage.getItem('id');
  if (savedId) {
    userId.textContent = savedId;
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
  }
});