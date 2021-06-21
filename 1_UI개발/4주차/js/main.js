window.addEventListener('load', onResize);
window.addEventListener('resize', onResize);

const toggleButton = document.querySelector('.gnb_toggler');
const gnb = document.querySelector('nav');

const menuLinks = document.querySelectorAll('.gnb_list > li');

function onResize() {
    if(window.innerWidth < 813) {
        for(let i=0; i<menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', onClickMobileMenu);
            menuLinks[i].removeEventListener('mouseleave', onLeaveDeskTopMenu);
            menuLinks[i].removeEventListener('mouseenter', onEnterDeskTopMenu);
        };  
    } else {
        for(let i=0; i<menuLinks.length; i++) {
            menuLinks[i].removeEventListener('click', onClickMobileMenu);
            menuLinks[i].addEventListener('mouseleave', onLeaveDeskTopMenu);
            menuLinks[i].addEventListener('mouseenter', onEnterDeskTopMenu);
        };  
    };
};

function onClickMobileMenu() {
    const menuLink = this.children[0];
    const dropDownList = this.children[1];

    if(!dropDownList) return;

    if(dropDownList.classList.contains('on')) {
        dropDownList.classList.remove('on');
        menuLink.style.setProperty('--background-postion-drop', '-114px -32px');
    } else {
        dropDownList.classList.add('on');
        menuLink.style.setProperty('--background-postion-drop', '-95px -32px');
    };
};

function onEnterDeskTopMenu() {
    const dropDownList = this.querySelector('ul');

    if(!dropDownList) return;
    dropDownList.classList.add('on');
};

function onLeaveDeskTopMenu() {
    const dropDownList = this.querySelector('ul');

    if(dropDownList === null) return;
    dropDownList.classList.remove('on');
};

toggleButton.addEventListener('click', () => {
    if(gnb.classList.contains('open')) {
        gnb.classList.remove('open');
        document.documentElement.style.setProperty('--background-postion-toggle', '-20px -30px');
    } else {
        gnb.classList.add('open');
        document.documentElement.style.setProperty('--background-postion-toggle', '-133px -31px');
    };
});
