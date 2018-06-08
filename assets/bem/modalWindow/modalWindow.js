"use strict";
(function () {
    var DATA_MODAL = 'data-modal',
        MODAL_ACTIVE = 'modal-window--active',
        MODAL_WINDOW = 'modal-window',
        MODAL_WINDOW_CLOSE = 'modal-window__close',
        MODAL_CLOSE = 'modal-window--close';
        WRAPPER_CLOSE = 'modal-window__wrapper--close'
    var buttons = document.querySelectorAll('[' + DATA_MODAL + ']');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', openModal, false);
    }
    var modals = document.getElementsByClassName(MODAL_WINDOW);
    for (var i = 0; i < modals.length; i++) {
        var spans = document.getElementsByClassName(MODAL_WINDOW_CLOSE);
        modals[i].addEventListener('click', closeSelf, false);
        for (var j = 0; j < spans.length; j++) {
            spans[j].addEventListener('click', closeModalWrapper(modals[i]), false)
        }
    }

    function openModal() {
        var modalName = this.getAttribute(DATA_MODAL);
        var modalWindow = document.getElementById(modalName);
        if (modalWindow) {
            modalWindow.addClassName(MODAL_ACTIVE);
        }
    }

    function closeModalWrapper(modal) {
        return function closeModal() {
            if (modal) {
                modal.removeClassName(MODAL_ACTIVE);
                modal.addClassName(MODAL_CLOSE);
                setTimeout(function () {
                    modal.removeClassName(MODAL_CLOSE);
                }, 300);
            }
        }
    }

    function closeSelf(event) {
        if (event.target == this) {
            this.removeClassName(MODAL_ACTIVE);
            this.addClassName(MODAL_CLOSE);
            setTimeout(function () {
                event.target.removeClassName(MODAL_CLOSE);
            }, 300);
        }
    }
}());





