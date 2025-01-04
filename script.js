const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon= document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
};

let listA = document.querySelectorAll('a');
let active = 'main';
let zIndex = 1;


document.getElementById(active).classList.add('active');
document.getElementById(active).style.zIndex = zIndex;


listA.forEach(a => {
    a.addEventListener('click', function (event) {
        let valueTab = a.dataset.tab;
        let activeOld = document.querySelector('.tab.active');

        if (activeOld) {
            activeOld.classList.remove('active');
            activeOld.style.visibility = 'hidden'; 
        }

        if (valueTab && valueTab !== active) {
            let tabActive = document.getElementById(valueTab);
            zIndex++;
            tabActive.style.zIndex = zIndex;
            tabActive.style.visibility = 'visible'; 
            active = valueTab;

            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            tabActive.classList.add('active');
        }
    });
});   
