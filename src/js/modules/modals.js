const modals = () => {
    function toggleModal(trigger, modal, closeClickOverlay = true) {
        const triggerElement = document.querySelectorAll(trigger),
                modalElement = document.querySelector(modal),
                modalCloseButton = modalElement.querySelector('.popup_close'),
                windows = document.querySelectorAll('[data-modal]'),
                scroll = calcScroll();

        if (!triggerElement || !modalElement) return

        triggerElement.forEach(elem => {
            if (elem.classList.contains('disable')) return

            elem.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modalElement.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        })

        modalCloseButton.addEventListener('click', () => {
            modalElement.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = '0px';

            windows.forEach(item => {
                item.style.display = 'none';
            });
        });

        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement && closeClickOverlay) {
                modalElement.style.display = 'none';
                document.body.style.overflow = 'auto';
                document.body.style.marginRight = '0px';

                windows.forEach(item => {
                    item.style.display = 'none';
                });
            }
        })
    }

    function showModalByTime(modal, time) {
        setTimeout(() => {
            document.querySelector(modal).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    toggleModal('.popup_engineer_btn', '.popup_engineer');
    toggleModal('.phone_link', '.popup');
    toggleModal('.popup_calc_btn', '.popup_calc');
    toggleModal('.popup_calc_button', '.popup_calc_profile', false);
    toggleModal('.popup_calc_profile_button', '.popup_calc_end', false);
    // showModalByTime('.popup', 60000);
};

export default modals;