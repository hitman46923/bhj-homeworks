

const isModalClosed = document.cookie.includes('modalClosed=true');


if (!isModalClosed) {
  const modal = document.getElementById('subscribe-modal');


  modal.classList.add('modal_active');


  const closeBtn = modal.querySelector('.modal__close');


  closeBtn.addEventListener('click', function() {

    modal.classList.remove('modal_active');


    document.cookie = 'modalClosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  });
}