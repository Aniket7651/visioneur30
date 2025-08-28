// document.addEventListener('DOMContentLoaded', function () {
//     const popup = document.getElementById('cookie-popup');
//     const acceptBtn = document.getElementById('accept-cookies');
//     const cookieName = 'cookieConsent';

//     function setCookie(name, value, days) { /*... code ...*/ }
//     function getCookie(name) { /*... code ...*/ }

//     if (!getCookie(cookieName)) {
//         setTimeout(() => {
//             popup.classList.add('show');
//         }, 1000);
//     }
//     else {
//         popup.classList.remove('show');
//     }

//     acceptBtn.addEventListener('click', function () {
//         setCookie(cookieName, 'accepted', 30);
//         popup.classList.remove('show');
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
    const cookieName = 'cookieConsent';

    // Function to set a cookie
    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        // Path=/ makes the cookie available across your entire site
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie by name
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    // Main logic
    if (popup && acceptBtn) {
        if (!getCookie(cookieName)) {
            setTimeout(() => {
                popup.classList.add('show');
            }, 1000);
        } else {
            popup.classList.remove('show');
        }

        acceptBtn.addEventListener('click', function () {
            setCookie(cookieName, 'accepted', 30);
            popup.classList.remove('show');
        });
    }
});
