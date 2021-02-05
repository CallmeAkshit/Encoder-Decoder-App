window.addEventListener('load', () => {
    const encodeButton = document.querySelector('#encode-button');
    const decodeButton = document.querySelector('#decode-button');
    const outputBox = document.querySelector('#output-box');
    const input = document.querySelector('#input-box');

    // eslint-disable-next-line no-unused-expressions
    encodeButton.addEventListener('click', () => {
        // outputBox.value = Buffer.from(input.value).toString('base64');
        outputBox.value = btoa(input.value);
    }),
        decodeButton.addEventListener('click', () => {
            outputBox.value = atob(input.value);
        });
});
