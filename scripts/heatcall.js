/*jshint esversion: 6 */
// heatcall.js
// written by nate schneider 
'use strict';

const api = (function () {

    const columnArray = ["RecId",
        "Category",
        "CreatedDateTime",
        "IncidentNumber",
        "Owner",
        "Priority",
        "ProfileFullName",
        "Status",
        "Subject",
        "Symptom"
    ];

    let choices = [],
        storeName = "";

    try {
        HEATAPI.Search.SearchBusinessObject("Frs_CompositeContract_Contact", '',
            "DisplayName",
            "LastModDateTime",
            "DESC",
            2000,
            function (payLoad) {
                if (payLoad.success) {
                    if (!sessionStorage) {
                        signIn();
                    }
                    console.log("Name payLoad Receieved");
                    document.querySelector('.header-title').classList.add('hide');
                    document.querySelector('.footer').classList.toggle('footerShow');
                    const inputs = document.querySelectorAll('.inputGroup');

                    for (let i = 0; i < inputs.length; i++) {
                        inputs[i].classList.remove('hide');
                    }

                } else {
                    // console.log("Name payLoad Failure.");
                }
                for (let i = 0; i < payLoad.data.length; i++) {
                    choices[i] = payLoad.data[i].DisplayName;
                }
            });
    } catch (e) {
        console.log('UH OH! ', e.message);
        api.logOut();
    }

    //autocomplete.js - https://goodies.pixabay.com/javascript/auto-complete/demo.html
    new autoComplete({
        selector: '#searchBox',
        minChars: 2,
        source: function (term, suggest) {
            term = term.toLowerCase();
            let matches = [];
            for (let i = 0; i < choices.length; i++)
                if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
            suggest(matches);
        },
        onSelect: function (e, term, item) {
            storeName = item.getAttribute('data-val');
            tProc.purgeContents();
            document.querySelector('.loader').classList.remove('hide');
            callTicketData();
        }
    });

    //calls HEAT for ticket data and creates ticket objects
    function callTicketData() {
        HEATAPI.Search.SearchBusinessObject("Incident",
            '5b58910a-f400-400b-b12f-7c6ad065e9a2',
            columnArray,
            "LastModDateTime",
            "DESC",
            2000,
            function (payLoad) {
                if (payLoad.success) {
                    tProc.createTicketObjects(storeName, payLoad);
                } else {
                    // console.log("Ticket payLoad Failure.");
                }
            });
    }

    function logOut() {
        console.log('calling Logout');
        HEATAPI.Auth.signOut(function () {
            location.reload();
        });
    }

    function signIn() {
        HEATAPI.Auth.signIn(function (data) {
            //location.reload();
        });
    }

    function getNameData() { //returns private function
        return _namepayLoadData;
    }

    function getTicketData() { //returns private function
        return _ticketObj;
    }

    //public
    return {
        callTicketData: callTicketData, //function to fetch ticket data from HEAT
        name: getNameData, //function to fetch employee name data from HEAT
        data: getTicketData, //function to use ticketObj data
        logOut: logOut, //function to log out of app
        signIn: signIn, //function to sign into app
        log: log
    };
})();