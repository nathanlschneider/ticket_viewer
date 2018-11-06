'use strict';

const app = (function() {
    const statusSelector = document.querySelectorAll('.filterBtn'),
        clearButton = document.getElementById('clearButton'),
        searchBox = document.getElementById('searchBox'),
        // logBtn = document.getElementById('logBtn');
        fsButton = document.querySelector('#fsButton'),
        activeButton = document.querySelector('.left'),
        resolvedButton = document.querySelector('.right');
    //addHomeBtn = document.querySelector('.addHomeImg')
    let lastClickedButton = 'Active';

    clearButton.addEventListener('click', function() {
        searchBox.value = '';
        tProc.purgeContents();
    });

    activeButton.addEventListener('click', function() {
        tProc.showCurrentCards('Active');
        console.log('active');
    });

    resolvedButton.addEventListener('click', function() {
        tProc.showCurrentCards('Resolved');
        console.log('resolved');
    });

    fsButton.addEventListener('click', function() {
        fullscreen.toggle();
        fsButton.classList.toggle('fs-animate');
    });

    // logBtn.addEventListener('click', function () {
    //     api.logOut();
    // });

    window.addEventListener('load', function(e) {
        if ('serviceWorker' in navigator) {
            try {
                navigator.serviceWorker.register('sw.js');
                console.log('[Service Worker Registered]');
            } catch (err) {
                console.log('[Service Worker Registration Failed]');
            }
        }
    });

    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault();
        deferredPrompt = e;
    });

    // btnAdd.addEventListener('click', e => {
    //     deferredPrompt.prompt();

    //     deferredPrompt.userChoice.then(choiceResult => {
    //         if (choiceResult.outcome === 'accepted') {
    //             console.log('User accepted the A2HS prompt');
    //         } else {
    //             console.log('User dismissed the A2HS prompt');
    //         }
    //         deferredPrompt = null;
    //     });
    // });

    //function to strip out HTML tags from a string
    function strip(html) {
        let doc = new DOMParser().parseFromString(html, 'text/html'),
            clean = doc.body.textContent;

        clean = clean.replace(/(\r\n\t|\n|\r\t)/gm, '');
        return clean || '';
    }

    function ts(string) {
        let length = document.documentElement.clientWidth * 0.1;
        let trimmedString = string.length > length ? string.substring(0, length - 3) + '...' : string;
        return trimmedString;
    }

    function active() {
        activeButton.click();
    }

    function getLastClickedButton() {
        return lastClickedButton;
    }

    return {
        lastClicked: getLastClickedButton,
        ts: ts,
        strip: strip,
        active: active
    };
})();
