document.addEventListener("DOMContentLoaded", function() {

    const navigation = document.querySelector('nav');
    const navbarMobille = document.querySelector('#navbarNavAltMarkup');
    const links = document.querySelectorAll('.nav-link');

    function addShadow() {

        if (window.scrollY >= 300) {
            navigation.classList.add('shadow-bg');
        } else {
            navigation.classList.remove('shadow-bg');
        }
    }


    links.forEach(item => item.addEventListener('click', () => navbarMobille.classList.remove('show')));





    window.addEventListener('scroll', addShadow);
});