var toolbox = (function () {

    var root = document.querySelector('body');
    var toolbox = document.createElement('div');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    var span4 = document.createElement('span');

    toolbox.classList = "toolbox";
    span1.innerText = "Sign In\n";
    span1.setAttribute("aria-label", "Sign In");
    span2.innerText = "Sign Out\n";
    span2.setAttribute("aria-label", "Sign out");

    span3.innerText = "Get Info\n";
    span3.setAttribute("aria-label", "get info");

    span4.innerText = "Is Signed";
    span4.setAttribute("aria-label", "Is signed");


    span1.addEventListener('click', function () {
        HEATAPI.Auth.signIn(function (data) {
            console.log(data);
        });
    });

    span2.addEventListener('click', function () {
        HEATAPI.Auth.signOut(function (data) {
            console.log(data);
            location.reload();
        });
    });

    span3.addEventListener('click', function () {
        HEATAPI.Auth.getSignInfo(function (data) {
            console.log(data);
        });
    });

    span4.addEventListener('click', function () {
        HEATAPI.Auth.isSigned(function (data) {
            console.log(data);
        });
    });

    root.appendChild(toolbox);
    toolbox.appendChild(span1);
    toolbox.appendChild(span2);
    toolbox.appendChild(span3);
    toolbox.appendChild(span4);

})();