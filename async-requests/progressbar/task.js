const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', form.action, true);

  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percent = (event.loaded / event.total) * 100;
      progress.value = percent;
    }
  };

  xhr.onload = function() {
    if (xhr.status === 200) {
  
      console.log('Файл успешно загружен!');
    } else {
   
      console.log('Произошла ошибка загрузки файла.');
    }
  };

  xhr.onerror = function() {
 
    console.log('Произошла ошибка загрузки файла.');
  };

  xhr.send(formData);
});
    
