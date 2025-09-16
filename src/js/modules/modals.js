const modals = () => {
    function toggleModal(trigger, modal, closeClickOverlay = true) {
        const triggerElement = document.querySelectorAll(trigger),
                modalElement = document.querySelector(modal),
                modalCloseButton = modalElement.querySelector('.popup_close'),
                windows = document.querySelectorAll('[data-modal]');

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
            });
        })

        modalCloseButton.addEventListener('click', () => {
            modalElement.style.display = 'none';
            document.body.style.overflow = 'auto';

            windows.forEach(item => {
                item.style.display = 'none';
            });
        });

        modalElement.addEventListener('click', (e) => {
            if (e.target === modalElement && closeClickOverlay) {
                modalElement.style.display = 'none';
                document.body.style.overflow = 'auto';

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

    toggleModal('.popup_engineer_btn', '.popup_engineer');
    toggleModal('.phone_link', '.popup');
    toggleModal('.popup_calc_btn', '.popup_calc');
    toggleModal('.popup_calc_button', '.popup_calc_profile', false);
    toggleModal('.popup_calc_profile_button', '.popup_calc_end', false);
    // showModalByTime('.popup', 60000);
};

export default modals;