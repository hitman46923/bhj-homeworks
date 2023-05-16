const dropdowns = document.querySelectorAll('.dropdown');

  
    dropdowns.forEach(function(dropdown) {
 
      const value = dropdown.querySelector('.dropdown__value');
      const list = dropdown.querySelector('.dropdown__list');
      const links = dropdown.querySelectorAll('.dropdown__link');

     
      value.addEventListener('click', function() {
      
        list.classList.toggle('dropdown__list_active');
      });

    
      links.forEach(function(link) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
    
          value.textContent = link.textContent;

    
          list.classList.remove('dropdown__list_active');
        });
      });
    });