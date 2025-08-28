document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
    const cookieName = 'cookieConsent';

    function setCookie(name, value, days) { /*... code ...*/ }
    function getCookie(name) { /*... code ...*/ }

    if (!getCookie(cookieName)) {
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);
    }

    acceptBtn.addEventListener('click', function () {
        setCookie(cookieName, 'accepted', 30);
        popup.classList.remove('show');
    });
});