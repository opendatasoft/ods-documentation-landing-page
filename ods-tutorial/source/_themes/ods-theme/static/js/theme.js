require=function(){return function e(t,n,i){function o(r,s){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[r]={exports:{}};t[r][0].call(u.exports,function(e){var n=t[r][1][e];return o(n||e)},u,u.exports,e,t,n,i)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}}()({"ods-theme":[function(e,t,n){var jQuery="undefined"!=typeof window?window.jQuery:e("jquery");function i(){$("[data-toggle='wy-nav-shift']").toggleClass("shift"),$("[data-toggle='rst-versions']").toggleClass("shift"),$("#nav-button").toggleClass("ods__documentation-header-btn-active")}function o(){$(".ods__documentation-help-hub-sidebar").toggleClass("ods__documentation-help-hub-sidebar-active"),$("#help-hub-button").toggleClass("ods__documentation-header-btn-active")}t.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(e){var t=this;t.isRunning||(t.isRunning=!0,jQuery(function(n){t.init(n),t.reset(),t.win.on("hashchange",t.reset),e&&t.win.on("scroll",function(){t.linkScroll||t.winScroll||(t.winScroll=!0,requestAnimationFrame(function(){t.onScroll()}))}),t.win.on("resize",function(){t.winResize||(t.winResize=!0,requestAnimationFrame(function(){t.onResize()}))}),t.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(e){e(document);var t=this;this.navBar=e("div.wy-side-scroll:first"),this.win=e(window),e(document).on("click","[data-toggle='wy-nav-top']",function(){e(".ods__documentation-help-hub-sidebar").hasClass("ods__documentation-help-hub-sidebar-active")?(o(),i()):i()}).on("click",".wy-menu-vertical .current ul li a",function(){var n=e(this);i(),t.toggleCurrent(n),t.hashChange(n)}).on("click","[data-toggle='rst-current-version']",function(){e("[data-toggle='rst-versions']").toggleClass("shift-up")}),e("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),e("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),e("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),e(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var n=e(this);expand=e('<span class="toctree-expand"></span>'),expand.on("click",function(e){return t.toggleCurrent(n),e.stopPropagation(),!1}),n.prepend(expand)})},reset:function(){var e=encodeURI(window.location.hash)||"#";try{var t=$(".wy-menu-vertical").find('[href="'+e+'"]');if(0===t.length){var n=$('.document a[href="'+e+'"]').closest("div.section");t=$(".wy-menu-vertical").find('[href="#'+n.attr("id")+'"]')}t.length>0&&($(".wy-menu-vertical .current").removeClass("current"),t.parent().addClass("current current-active"),t.closest("li.toctree-l1").addClass("current current"),t.closest("li.toctree-l1").parent().addClass("current"),t.closest("li.toctree-l1").addClass("current"),t.closest("li.toctree-l2").addClass("current"),t.closest("li.toctree-l3").addClass("current"),t.closest("li.toctree-l4").addClass("current"))}catch(i){console.log("Error expanding nav for anchor",i)}},onScroll:function(){this.winScroll=!1;var e=this.win.scrollTop(),t=e+this.winHeight,n=this.navBar.scrollTop()+(e-this.winPosition);e<0||t>this.docHeight||(this.navBar.scrollTop(n+200),this.winPosition=e)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(e){var t=e[0].attributes.href.nodeValue;if("#"===t||t.indexOf(".html")>-1)return null;var n=$(t).offset().top;setTimeout(function(){$("html, body").animate({scrollTop:n-110},0)},0)},toggleCurrent:function(e){var t=e.closest("li");t.parent().parent().removeClass("current-active"),t.siblings("li.current").removeClass("current current-active"),t.siblings().find("li.current").removeClass("current current-active"),t.find("> ul li.current").removeClass("current current-active"),t.toggleClass("current current-active")}},"undefined"!=typeof window&&(window.OdsTheme={Navigation:t.exports.ThemeNav}),$("#help-hub-button").click(function(){$("[data-toggle='wy-nav-shift']").hasClass("shift")?(i(),o()):o()}),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var i=(new Date).getTime(),o=Math.max(0,16-(i-e)),a=window.setTimeout(function(){t(i+o)},o);return e=i+o,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var a=$(".expand-all"),r=$(".collapse-all"),s="expand-collapse-item-active",l=$(".img-hide"),c=".button-switch-img",u=function(e,t,n){$(e).toggleClass("img-active"),$(t).toggleClass("button-switch-img-active"),$(t)[0].innerText=n?"Show image":"Hide image"},d=function(e,t){if(e.className.indexOf("img-active")>0)return null;u(e,t,!1)};$(a).click(function(){$(this).removeClass(s),$(r).addClass(s);for(var e=0;e<$(c).length;e++)d($(l)[e],$($(c)[e]))}),$(r).click(function(){$(this).removeClass(s),$(a).addClass(s);for(var e=0;e<$(c).length;e++)t=$(l)[e],n=$($(c)[e]),t.className.indexOf("img-active")>0&&u(t,n,!0);var t,n}),$(document).on("click",c,function(){var e=$(this).next();e[0].className.indexOf("img-active")>0?(u(e[0],this,!0),r.length>0&&($(a).addClass(s),$(r).removeClass(s))):u(e[0],this,!1)}),function(){$($(".title-level-2")[0]).addClass("title-level-2-first");for(var e=$(".block-step"),t=0;t<e.length;t++){var n=$(e[t])[0].innerHTML.split(" +"),i='<div class="number-step"><p>'+n[0]+'.</p></div><div class="content-step"><p>'+n[1]+"</p></div>";$(e[t]).replaceWith('<div class="block-step">'+i+"</div>")}for(var o=$(".img-hide"),a=0;a<o.length;a++)$('<button class="button-switch-img">Show image</button>').insertBefore($(o[a]));var r=$(".header-information-tutorial"),s=$(r)[0].innerText.split(" - ");s[1]=s[1].split("time:")[1];var l='<div class="header-information-tutorial"><p><span class"header-information-tutorial-item">'+s[0]+'</span><span class="header-information-tutorial-item">'+s[1]+"</span></p></div>";$(r).replaceWith(l)}()},{jquery:"jquery"}]},{},["ods-theme"]);