function cfTurnstileLazyload() {
    let scriptTag = document.querySelector('[data-cf-turnstile-api]');
    if (scriptTag) {
        let forms = document.querySelectorAll('form');
        Array.prototype.forEach.call(forms, function (form) {
            if (form.querySelector('.cf-turnstile')) {
                form.addEventListener('input', function () {
                    let src = scriptTag.getAttribute('data-src');
                    scriptTag.setAttribute('src', src);
                });
            }
        });
    }
}
cfTurnstileLazyload();
