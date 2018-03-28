'use strict';

(function() {

    var btnMenu = document.getElementById("nav-button"),
        btnClassActive = "ods-header__button--active",
        menuElement = document.getElementsByClassName("ods-header__nav")[0],
        menuClassActive = "ods-header__nav--active";

    function resetStateSidebar() {
        menuElement.classList.remove(menuClassActive);
        btnMenu.classList.remove(btnClassActive);
    }

    function toggle() {

        //- Save state element
        var stateElement = menuElement.className,
            open = stateElement.includes(menuClassActive) ? false : true;

        resetStateSidebar();

        if (open) {
            menuElement.classList.add(menuClassActive);
            btnMenu.classList.add(btnClassActive);
        }

    }

    document.body.addEventListener("click", function (event) {
        if (event.target.id === "nav-button") {
            toggle();
        }
    });

})();