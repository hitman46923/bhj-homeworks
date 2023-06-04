function getPollData() {
    fetch('https://students.netoservices.ru/nestjs-backend/poll')
      .then(response => response.json())
      .then(data => displayPoll(data))
      .catch(error => console.log(error));
  }

  // Функция для отображения опроса
  function displayPoll(pollData) {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    // Отображение заголовка опроса
    pollTitle.textContent = pollData.data.title;

    // Отображение ответов в виде кнопок
    pollData.data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answer;
      button.addEventListener('click', handleAnswerClick);
      pollAnswers.appendChild(button);
    });
  }

  // Обработчик нажатия на кнопку с ответом
  function handleAnswerClick() {
    alert('Спасибо, ваш голос засчитан!');
  }

  // Загрузка случайного опроса при загрузке страницы
  getPollData();