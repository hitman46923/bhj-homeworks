let fontLinks = document.querySelectorAll('.font-size');
let bookElement = document.getElementById('book');


fontLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    fontLinks.forEach((fontLink) => {
      fontLink.classList.remove('font-size_active');
    });

    link.classList.add('font-size_active');


    let fontSize = link.getAttribute('data-size');


    bookElement.classList.remove('book_fs-small', 'book_fs-big');


    if (fontSize === 'small') {
      bookElement.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      bookElement.classList.add('book_fs-big');
    }
  });
});


/* Повышенный уровень */

let textColors = document.querySelectorAll('.color');



textColors.forEach(function(textColor) {
  textColor.addEventListener('click', function(event) {
    event.preventDefault();

    textColors.forEach(function(textColor) {
      textColor.classList.remove('color_active');
    });

    textColor.classList.add('color_active');

    let color = textColor.getAttribute('data-text-color');

     bookElement.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
    bookElement.classList.add('book_color-' + color);
  });
});


textColors.forEach(function(textColor) {
    textColor.addEventListener('click', function(event) {
      event.preventDefault();
  
      textColors.forEach(function(textColor) {
        textColor.classList.remove('color_active');
      });
  
      textColor.classList.add('color_active');
  
      let color = textColor.getAttribute('data-bg-color');
  
       bookElement.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
      bookElement.classList.add('book_bg-' + color);
    });
  });
  
  
  
  
