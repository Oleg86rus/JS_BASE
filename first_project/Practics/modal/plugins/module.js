function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('omodal');
    modal.insertAdjacentHTML("afterbegin", `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&#10008;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modal-footer">
                    <button>OK</button>
                    <button>CANCEL</button>
                </div>
    
            </div>
        </div>
        `)
    document.body.appendChild(modal);
    return modal;
}


$.modal = function (options) {
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 2000;
    let closing = false;

    return {
        open() {
            !closing && $modal.classList.add('open');
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED);

        },
        destroy() {}
    }
}