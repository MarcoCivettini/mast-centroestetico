const setHeadrClass = (component) => {

    if (window.scrollY >= window.innerHeight - 64) {
        component.classList.add('high-contrast');
    } else {
        component.classList.remove('high-contrast');
    }
}
const init = () => {
    const section2 = document.getElementById("header");
    setHeadrClass(section2);

    window.addEventListener('scroll', (e) => {
        setHeadrClass(section2);
    })
}

window.onload = () => { init() };



