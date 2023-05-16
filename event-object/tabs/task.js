let tabs = document.querySelectorAll('.tab');
let tabsContent = document.querySelectorAll('.tab__content');


for (let i = 0; i < tabs.length; i++) {

    tabs[i].addEventListener('click' , function () {

        for (let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove('tab_active');
            tabsContent[k].classList.remove('tab__content_active');
        }

        tabs[i].classList.add('tab_active');
        tabsContent[i].classList.add('tab__content_active');


    })



} 