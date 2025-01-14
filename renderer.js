const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const navigateButton = document.getElementById('navigate');
    const backButton = document.getElementById('back');
    const backToSecondButton = document.getElementById('back-to-second');
    const backToThirdButton = document.getElementById('back-to-third');

   
    // Navigate to the second page
    if (navigateButton) {
        navigateButton.addEventListener('click', () => {
            ipcRenderer.send('navigate-to-second');
        });
    }

    // Navigate back to the first page
    if (backButton) {
        backButton.addEventListener('click', () => {
            ipcRenderer.send('navigate-to-first');
        });
    }

    // Navigate to the third page
    if (navigateButton && document.title === 'Second Page') {
        navigateButton.addEventListener('click', () => {
            ipcRenderer.send('navigate-to-third');
        });
    }
    
    if (navigateButton && document.title === 'Third Page') {
        navigateButton.addEventListener('click', () => {
            ipcRenderer.send('navigate-to-fourth');
        });
    }

    // Navigate back to the second page
    if (backToSecondButton) {
        backToSecondButton.addEventListener('click', () => {
            ipcRenderer.send('navigate-to-second-from-third');
        });
    }

    if (backToThirdButton) {
        backToThirdButton.addEventListener('click', () => {
            ipcRenderer.send('navigate-to-third-from-fourth');
        });
    }
    
});
