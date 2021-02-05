window.addEventListener('load', () => {
    const encodeButton = document.querySelector('#encode-button');
    const outputBox = document.querySelector('#output-box');
    const input = document.querySelector('#input-box');

    encodeButton.addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        outputBox.value = CryptoJS.SHA512(input.value);
    })

});