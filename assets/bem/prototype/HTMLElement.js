'use strict';
(function () {
    HTMLElement.prototype.addClassName = function (className) {
        this.className = this.className.split(' ').indexOf(className) > -1 ?
            this.className :
            this.className + " " + className;
    }
    HTMLElement.prototype.removeClassName = function (className) {
        this.className = this.className.split(' ').filter(function (t) {
            return t != className;
        }).join(' ');
    }
    HTMLElement.prototype.containsClassName = function (className) {
        return this.className.split(' ').indexOf(className) > -1;
    }

    HTMLElement.prototype.toogleClassName = function (className) {
        if (this.className.split(' ').indexOf(className) > -1) {
            this.className = this.className.split(' ').filter(function (t) {
                return t != className;
            }).join(' ');
        } else {
            this.className = this.className.split(' ').indexOf(className) > -1 ?
                this.className :
                this.className + " " + className;
        }
    }
}());

