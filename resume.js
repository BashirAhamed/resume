document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.createElement('a');
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jane Doe's Resume</title>
            <style>
                ${document.querySelector('style') ? document.querySelector('style').textContent : ''}
                ${document.styleSheets[0].cssRules[0].cssText}
            </style>
        </head>
        <body>
            ${document.querySelector('.container').outerHTML}
        </body>
        </html>`;
    const file = new Blob([htmlContent], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.html';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
});
