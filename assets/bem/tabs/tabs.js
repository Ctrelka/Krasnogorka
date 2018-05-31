"use strict";

(function () {
    var tabs = document.getElementsByClassName("tabs");
    for (var i = 0; i < tabs.length; i++) {
        initActiveTabsIfNeed(tabs[i]);
        var links = tabs[i].getElementsByClassName("tabs__link");
        var contents = tabs[i].getElementsByClassName("tabs__content");
        if (links.length === contents.length) {
            initTab(links, contents);
        } else {
            console.log('tabs error');
        }
    }

    function initActiveTabsIfNeed(tabs) {
        var activeLink = tabs.getElementsByClassName('tabs__link--active');
        var activeContent = tabs.getElementsByClassName('tabs__content--active');
        if (!activeLink.length) {
            tabs.getElementsByClassName('tabs__link')[0].addClassName('tabs__link--active');
        }
        if (!activeContent.length) {
            tabs.getElementsByClassName('tabs__content')[0].addClassName('tabs__content--active');
        }
    }

    function initTab(links, contents) {
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', linkContent(links[i], contents[i]), false);
        }
    }

    function linkContent(link, content) {
        return function (event) {
            event.preventDefault();
            if (link.containsClassName('tabs__link--active')) {
                return;
            }
            cleanActiveTabs(link.parentNode.parentNode);
            link.addClassName('tabs__link--active');
            content.addClassName('tabs__content--active');
        }
    }

    function cleanActiveTabs(tabs) {
        var activeLink = tabs.getElementsByClassName('tabs__link--active')[0];
        var activeContent = tabs.getElementsByClassName('tabs__content--active')[0];
        if (activeLink) {
            activeLink.removeClassName('tabs__link--active');
        }
        if (activeContent) {
            activeContent.removeClassName('tabs__content--active');
        }
    }

}());
