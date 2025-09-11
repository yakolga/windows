const modals = () => {
    function toggleModal(trigger, modal) {
        const triggerElement = document.querySelectorAll(trigger),
                modalElement = document.querySelector(modal),
                modalCloseButton = modalElement.querySelector('.popup_close');

        if (!triggerElement || !modalElement) return

        triggerElement.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modalElement.classList.add('--active');
                document.body.style.overflow = 'hidden';
            });
        })

        modalCloseButton.addEventListener('click', () => {
            modalElement.classList.remove('--active');
            document.body.style.overflow = 'auto';
        });

        modalElement.addEventListener('click', (e) => {
            if (!e.target.closest('.popup_content')) {
                modalElement.classList.remove('--active');
                document.body.style.overflow = 'auto';
            }
        })
    }

    function showModalByTime(modal, time) {
        setTimeout(() => {
            document.querySelector(modal).classList.add('--active');
             document.body.style.overflow = 'hidden';
        }, time);
    }

    toggleModal('.popup_engineer_btn', '.popup_engineer');
    toggleModal('.phone_link', '.popup');
    showModalByTime('.popup', 6000);
};

export default modals;