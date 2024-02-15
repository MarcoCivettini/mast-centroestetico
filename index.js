let menuOpened = false;

const setHeadrClass = (component, home) => {
    if (window.scrollY >= window.innerHeight - 64) {
        component.classList.add('high-contrast');
    } else {
        component.classList.remove('high-contrast');
    }
}

const toogleHomeVisible = (home) =>{
    if (window.scrollY >= window.innerHeight + 100) {
        home.classList.add('hide');
    } else {
        home.classList.remove('hide');
    }
}

const closeMobileMenu = (mobileLinksContainer, headerLinksContainer) => {
    menuOpened = false;

    mobileLinksContainer.classList.add('hide');
    const body = document.getElementById('body');
    body.classList.remove('no-scroll');
}
const openMobileMenu = (mobileLinksContainer, headerLinksContainer) => {
    menuOpened = true;
    mobileLinksContainer.classList.remove('hide');
    headerLinksContainer.classList.add('high-contrast');
    const body = document.getElementById('body');
    body.classList.add('no-scroll');

}

const init = () => {
    const burgerMenu = document.getElementById('burger-menu');
    const headerLinks = document.getElementById('header');
    const mobileLinks = document.getElementById('mobile-menu');
    const home = document.getElementById('home-section');
    setHeadrClass(headerLinks, home);
    toogleHomeVisible(home);

    window.addEventListener('scroll', (e) => {
        setHeadrClass(headerLinks);
        toogleHomeVisible(home);
    })

    mobileLinks.addEventListener('click', (e) => {
        const isLink = e.target.classList.contains('item');
        if(isLink){
            closeMobileMenu(mobileLinks, headerLinks)
            setHeadrClass(headerLinks, home);
            toogleHomeVisible(home);
        }
    })

    burgerMenu.addEventListener('click', () => {
        if (menuOpened) {
            closeMobileMenu(mobileLinks, headerLinks);
            setHeadrClass(headerLinks, home);
            toogleHomeVisible(home);
        } else {
            openMobileMenu(mobileLinks, headerLinks);
        }

    });
}

window.onload = () => { init() };



