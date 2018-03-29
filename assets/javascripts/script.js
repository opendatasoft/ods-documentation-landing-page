'use strict';

(function() {

    var btnMenu            = document.getElementById("nav-button"),
        btnClassActive     = "ods-header__menu-toggle--active",
        menuElement        = document.getElementsByClassName("ods-header__nav")[0],
        menuClassActive    = "ods-header__nav--active",
        headerElement      = document.getElementsByClassName("ods-header")[0],
        headerClassActive  = "ods-header--active",
        footerElement      = document.getElementsByClassName("ods-footer")[0],
        footerClassActive  = "ods-footer--active",
        wrapperElement     = document.getElementsByClassName("ods-wrapper")[0];

    function resetStateSidebar() {
        menuElement.classList.remove(menuClassActive);
        btnMenu.classList.remove(btnClassActive);
        headerElement.classList.remove(headerClassActive);
        footerElement.classList.remove(footerClassActive);

        wrapperElement.style.height = "auto";
        wrapperElement.style.overflowY = "visible";
    }

    function toggle() {

        //- Save state element
        var stateElement = menuElement.className,
            open         = stateElement.includes(menuClassActive) ? false : true,
            sizeWindow   = window.outerHeight;

        resetStateSidebar();

        if (open) {
            menuElement.classList.add(menuClassActive);
            btnMenu.classList.add(btnClassActive);
            headerElement.classList.add(headerClassActive);
            footerElement.classList.add(footerClassActive);

            wrapperElement.style.overflowY = "hidden";
            wrapperElement.style.height = (sizeWindow - 130) + "px";
        }

    }

    document.body.addEventListener("click", function (event) {
        if (event.target.id === "nav-button") {
            toggle();
        }
    });

})();