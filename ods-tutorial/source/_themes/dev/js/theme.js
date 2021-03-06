var jQuery = (typeof (window) != 'undefined') ? window.jQuery : require('jquery');

function setMenu() {
    $("[data-toggle='wy-nav-shift']").toggleClass("shift");
    $("[data-toggle='rst-versions']").toggleClass("shift");
    $("#nav-button")
        .toggleClass("ods__documentation-header-btn-active");
}

function setHub() {
    $('.ods__documentation-help-hub-sidebar')
        .toggleClass('ods__documentation-help-hub-sidebar-active');
    $("#help-hub-button")
        .toggleClass("ods__documentation-header-btn-active");
}

// Sphinx theme nav state
function ThemeNav() {

    var nav = {
        navBar: null,
        win: null,
        winScroll: false,
        winResize: false,
        linkScroll: false,
        winPosition: 0,
        winHeight: null,
        docHeight: null,
        isRunning: false
    };

    nav.enable = function (withStickyNav) {
        var self = this;

        if (self.isRunning) {
            // Only allow enabling nav logic once
            return;
        }

        self.isRunning = true;
        jQuery(function ($) {
            self.init($);

            self.reset();
            self.win.on('hashchange', self.reset);

            if (withStickyNav) {
                // Set scroll monitor
                self.win.on('scroll', function () {
                    if (!self.linkScroll) {
                        if (!self.winScroll) {
                            self.winScroll = true;
                            requestAnimationFrame(function () { 
                                self.onScroll(); 
                            });
                        }
                    }
                });
            }

            // Set resize monitor
            self.win.on('resize', function () {
                if (!self.winResize) {
                    self.winResize = true;
                    requestAnimationFrame(function () { self.onResize(); });
                }
            });

            self.onResize();
        });

    };

    nav.enableSticky = function () {
        this.enable(true);
    };

    nav.init = function ($) {
        var doc = $(document),
            self = this;

        this.navBar = $('div.wy-side-scroll:first');
        this.win = $(window);

        // Set up javascript UX bits
        $(document)
            // Shift nav in mobile when clicking the menu.
            .on('click', "[data-toggle='wy-nav-top']", function () {
                if ($(".ods__documentation-help-hub-sidebar")
                    .hasClass("ods__documentation-help-hub-sidebar-active")) {
                    setHub();
                    setMenu();
                } else {
                    setMenu();
                }
            })

            // Nav menu link click operations
            .on('click', ".wy-menu-vertical .current ul li a", function () {
                var target = $(this);
                // Close menu when you click a link.
                setMenu();
                // Handle dynamic display of l3 and l4 nav lists
                self.toggleCurrent(target);
                self.hashChange(target);
            })
            .on('click', "[data-toggle='rst-current-version']", function () {
                $("[data-toggle='rst-versions']").toggleClass("shift-up");
            })

        // Make tables responsive
        $("table.docutils:not(.field-list,.footnote,.citation)")
            .wrap("<div class='wy-table-responsive'></div>");

        // Add extra class to responsive tables that contain
        // footnotes or citations so that we can target them for styling
        $("table.docutils.footnote")
            .wrap("<div class='wy-table-responsive footnote'></div>");
        $("table.docutils.citation")
            .wrap("<div class='wy-table-responsive citation'></div>");

        // Add expand links to all parents of nested ul
        $('.wy-menu-vertical ul').not('.simple').siblings('a').each(function () {
            var link = $(this);
            expand = $('<span class="toctree-expand"></span>');
            expand.on('click', function (ev) {
                self.toggleCurrent(link);
                ev.stopPropagation();
                return false;
            });
            link.prepend(expand);
        });
    };

    nav.reset = function () {
        // Get anchor from URL and open up nested nav
        var anchor = encodeURI(window.location.hash) || '#';

        try {
            var link = $('.wy-menu-vertical')
                .find('[href="' + anchor + '"]');
            // If we didn't find a link, it may be because we clicked on
            // something that is not in the sidebar (eg: when using
            // sphinxcontrib.httpdomain it generates headerlinks but those
            // aren't picked up and placed in the toctree). So let's find
            // the closest header in the document and try with that one.
            if (link.length === 0) {
                var doc_link = $('.document a[href="' + anchor + '"]');
                var closest_section = doc_link.closest('div.section');
                // Try again with the closest section entry.
                link = $('.wy-menu-vertical')
                    .find('[href="#' + closest_section.attr("id") + '"]');
            }
            // If we found a matching link then reset current and re-apply
            // otherwise retain the existing match
            if (link.length > 0) {
                $('.wy-menu-vertical .current').removeClass('current');

                link.parent().addClass('current current-active');
                link.closest('li.toctree-l1').addClass('current current');
                link.closest('li.toctree-l1').parent().addClass('current');
                link.closest('li.toctree-l1').addClass('current');
                link.closest('li.toctree-l2').addClass('current');
                link.closest('li.toctree-l3').addClass('current');
                link.closest('li.toctree-l4').addClass('current');
            }
        }
        catch (err) {
            console.log("Error expanding nav for anchor", err);
        }

    };

    nav.onScroll = function () {
        this.winScroll = false;
        var newWinPosition = this.win.scrollTop(),
            winBottom = newWinPosition + this.winHeight,
            navPosition = this.navBar.scrollTop(),
            newNavPosition = navPosition + (newWinPosition - this.winPosition);
        if (newWinPosition < 0 || winBottom > this.docHeight) {
            return;
        }
        this.navBar.scrollTop(newNavPosition + 200);
        this.winPosition = newWinPosition;
    };

    nav.onResize = function () {
        this.winResize = false;
        this.winHeight = this.win.height();
        this.docHeight = $(document).height();
    };

    nav.hashChange = function (element) {
        var target = element[0].attributes.href.nodeValue;

        if (target === '#' || target.indexOf('.html') > -1) return null;
        else {
            var res_target = $(target).offset().top;
            setTimeout(function () {
                $('html, body').animate({ scrollTop: res_target - 110 }, 0);
            }, 0);
        }
    };

    nav.toggleCurrent = function (elem) {

        var parent_li = elem.closest('li');

        parent_li.parent().parent().removeClass('current-active');
        parent_li.siblings('li.current').removeClass('current current-active');
        parent_li.siblings().find('li.current').removeClass('current current-active');
        parent_li.find('> ul li.current').removeClass('current current-active');
        parent_li.toggleClass('current current-active');

    }

    return nav;

};

module.exports.ThemeNav = ThemeNav();

if (typeof (window) != 'undefined') {
    window.OdsTheme = { Navigation: module.exports.ThemeNav };
}

// ODS Theme Header
$('#help-hub-button').click(function() {
    if ($("[data-toggle='wy-nav-shift']").hasClass("shift")) {
        setMenu();
        setHub();
    } else {
        setHub();
    }
});

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// https://gist.github.com/paulirish/1579671
// MIT license

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
            || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
/*
 *
 *  Action tutorials
 *
 */
var buttonExpand = $('.expand-all');
var buttonCollapse = $('.collapse-all');
var classToActivElement = 'expand-collapse-item-active';

var imgElement = $('.img-hide');
var buttonSwitchImg = '.button-switch-img';

//- Function to change status button img
var toggleButton = function (elementButton, isActive) {
    if (isActive) {
        $(elementButton).removeClass('button-switch-img-active');
        $(elementButton).text('Show image');
    } else {
        $(elementButton).addClass('button-switch-img-active');
        $(elementButton).text('Hide image');
    }
}
//- Function to open/hide images
//- Function if there is more than one image
var toggleNextImg = function (firstImg, action) {
    var nextImg = $(firstImg).next();
    while ($(nextImg)[0].className.indexOf('img-hide') > -1) {
        $(nextImg)[action]('img-active');
        nextImg = $(nextImg).next();
    }
}
var toggleImage = function (elementImg, isActive) {
    if (isActive) {
        $(elementImg).removeClass('img-active');
        toggleNextImg(elementImg, 'removeClass');
    } else {
        $(elementImg).addClass('img-active');
        toggleNextImg(elementImg, 'addClass');
    }
}
//- Active All Buttons
var activeAllButtons = function (elementButton) {
    if (elementButton.className.indexOf('button-switch-img-active') == -1) {
        toggleButton(elementButton, false);
    }
}
//- Expand All Images
var expandAllImg = function (elementImg) {
    if (elementImg.className.indexOf('img-active') == -1) {
        toggleImage(elementImg, false);
    }
}
//- Desactive All Images
var desactiveAllButtons = function (elementButton) {
    if (elementButton.className.indexOf('button-switch-img-active') > -1) {
        toggleButton(elementButton, true);
    }
}
//- Collapse All Images
var collapseAllImg = function (elementImg) {
    if (elementImg.className.indexOf('img-active') > -1) {
        toggleImage(elementImg, true);
    }
}

//- Show All Images && Active All Buttons
$(buttonExpand).click(function () {
    $(this).removeClass(classToActivElement);
    $(buttonCollapse).addClass(classToActivElement);

    for (var i = 0; i < $(imgElement).length; i++) {
        expandAllImg($(imgElement)[i]);
    }
    for (var i = 0; i < $(buttonSwitchImg).length; i++) {
        activeAllButtons($($(buttonSwitchImg)[i])[0]);
    }
});

//- Hide All Images && Desactive All Buttons
$(buttonCollapse).click(function () {
    $(this).removeClass(classToActivElement);
    $(buttonExpand).addClass(classToActivElement);

    for (var i = 0; i < $(imgElement).length; i++) {
        collapseAllImg($(imgElement)[i]);
    }
    for (var i = 0; i < $(buttonSwitchImg).length; i++) {
        desactiveAllButtons($($(buttonSwitchImg)[i])[0]);
    }
});

//- Priority to image opening
//- Count images opened to change expand/collapse button status
var countImages = function () {
    var countButtonsActived = $('.button-switch-img-active').length;
    var countTotalButtons = $('.button-switch-img').length;
    if (countButtonsActived === countTotalButtons) {
        $(buttonExpand).removeClass(classToActivElement);
        $(buttonCollapse).addClass(classToActivElement);
    } else if (countButtonsActived < countTotalButtons) {
        $(buttonCollapse).removeClass(classToActivElement);
        $(buttonExpand).addClass(classToActivElement);
    }
}

//- Switch show/hide img
$(document).on('click', buttonSwitchImg, function () {
    var element = $(this).next();
    if (element[0].className.indexOf('img-active') > -1) {
        toggleImage(element[0], true);
        toggleButton(this, true);
    } else {
        toggleImage(element[0], false);
        toggleButton(this, false);
    }
    countImages();
});

//- Added / Removed button to scroll to the top
$(document).scroll(function () {
    var positionRef = $('.expand-collapse-items').offset().top;
    var positionWindow = $(window).scrollTop();
    var elementToTop = $('.tutorial-to-top');
    var classActiveToTop = 'tutorial-to-top-active';
    if (positionWindow > positionRef) {
        elementToTop.addClass(classActiveToTop);
    } else {
        elementToTop.removeClass(classActiveToTop);
    }
});

//- Function to scroll to top
$(document).on('click', '.tutorial-to-top', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
});

/*
 *
 *  Set up style for tutorials
 *
 */
(function () {
    //- Inject element to scroll to top
    $('<div class="tutorial-to-top"></div>').insertAfter('.section');

    //- Remove border-top at first title-level-2
    $($('.title-level-2')[0]).addClass('title-level-2-first');

    //- Generate style classes for number of step.
    var blockStep = $('.block-step');

    for (var i = 0; i < blockStep.length; i++) {
        var resultSplit = $(blockStep[i])[0].innerHTML.split(' +');
        var newData = '<div class="number-step">' +
                            '<p>' + resultSplit[0] + '.</p>' +
                        '</div>' +
                        '<div class="content-step">' +
                            '<p>' + resultSplit[1] + '</p>' +
                        '</div>';
        $(blockStep[i]).replaceWith('<div class="block-step">' +
                                        newData +
                                    '</div>');
    }

    //- Generate button for img hide
    var imgHideElement = $('.img-hide');

    for (var o = 0; o < imgHideElement.length; o++) {
        if ($($(imgHideElement[o]).prev())[0].classList.contains('img-hide')) {
            continue;
        } else {
            $('<button class="button-switch-img">Show image</button>').insertBefore($(imgHideElement[o]));
        }
    }

    //- Generate style for header tutorial information
    var headerInformationElement = $('.header-information-tutorial');

    var dataSplit = $(headerInformationElement)[0].innerText.split(' - ');
    dataSplit[1] = dataSplit[1].split(':')[1];
    var newElement = '<div class="header-information-tutorial">' +
                        '<p>' +
                            '<span class"header-information-tutorial-item">' + dataSplit[0] + '</span>' +
                            '<span class="header-information-tutorial-item">' + dataSplit[1] + '</span>' +
                        '</p>' +
                    '</div>';
    $(headerInformationElement).replaceWith(newElement);
}());