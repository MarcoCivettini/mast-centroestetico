const init = () => {
    const section2 = document.getElementById("header");

    window.addEventListener('scroll', (e) => {
            if (window.scrollY >= window.innerHeight -64) {
            section2.classList.add('high-contrast');
        }else{
            section2.classList.remove('high-contrast');
        }
    })
}

window.onload = () => {init()};



