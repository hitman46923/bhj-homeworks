const checkboxes = document.querySelectorAll('.interest__check');


function handleCheckboxClick(event) {
  const checkbox = event.target;

 
  const isParentCheckbox = checkbox.parentElement.nextElementSibling && checkbox.parentElement.nextElementSibling.classList.contains('interests');
  const isChildCheckbox = checkbox.closest('.interest').querySelector('.interests');


  if (isParentCheckbox) {
    const childCheckboxes = checkbox.parentElement.nextElementSibling.querySelectorAll('.interest__check');
    childCheckboxes.forEach(childCheckbox => {
      childCheckbox.checked = checkbox.checked;
    });
  }

 
  if (isChildCheckbox) {
    const parentCheckbox = checkbox.closest('.interest').querySelector('.interest__check');
    const siblingCheckboxes = checkbox.closest('.interests').querySelectorAll('.interest__check');

    const uncheckedSiblings = Array.from(siblingCheckboxes).filter(siblingCheckbox => !siblingCheckbox.checked);

 
  }
}


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheckboxClick);
});