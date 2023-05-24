let openChat = document.querySelector('.chat-widget');
let messages = document.querySelector( '.chat-widget__messages' );
let chatWidgetInput = document.getElementById('chat-widget__input');

openChat.addEventListener('click', () => {
  openChat.classList.add('chat-widget_active');
});

let responses = [
    'Извините, но мы являемся монополистом и не обязаны предоставлять качественный сервис.',
    'К сожалению, у нас нет других вариантов для вас.',
    'Мы не заинтересованы в вашем мнении.',
    'Вам не понравилось? Ничего не могу с этим поделать.',
    'Мы делаем, что хотим. Приходите к нам или идите в другое место.'
];

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
      messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
        </div>
      `;
      chatWidgetInput.value = '';

      messages.innerHTML += `
        <div class="message">
        <div class="message__time">${new Date().toLocaleTimeString()}</div>
        <div class="message__text">${responses[Math.floor(Math.random() * responses.length)]}</div>
        </div>
      `;
    }
  });