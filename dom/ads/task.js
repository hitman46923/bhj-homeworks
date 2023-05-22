const rotators = document.querySelectorAll('.rotator');


rotators.forEach(rotator => {
  const cases = rotator.getElementsByClassName('rotator__case');
  let activeCaseIndex = 0;

  setInterval(() => {
    cases[activeCaseIndex].classList.remove('rotator__case_active');
    activeCaseIndex = (activeCaseIndex + 1) % cases.length;
    cases[activeCaseIndex].classList.add('rotator__case_active');
  }, 1000);
});