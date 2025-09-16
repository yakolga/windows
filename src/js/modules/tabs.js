const tabs = () => {
    function tabsInit(headerElement, triggerElement, content, activeClass, displayType = 'block') {
        const header = document.querySelector(headerElement);

        header.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains(triggerElement) || target.closest(`.${triggerElement}`)) {
                const targetName = target.closest(`.${triggerElement}`).getAttribute('data-target');

                document.querySelectorAll(`.${triggerElement}`).forEach(elem => {
                    elem.classList.remove(activeClass);
                });

                target.closest(`.${triggerElement}`).classList.add(activeClass);

                if (!targetName) return

                document.querySelectorAll(content).forEach(item => {
                    item.style.display = 'none';

                    if (item.classList.contains(targetName)) {
                        item.style.display = displayType;
                    }
                });
            }
        })
    }

    tabsInit('.glazing_slider', 'glazing_block', '.glazing_content', 'after_click');
    tabsInit('.decoration_slider', 'decoration_item', '.decoration_content__block', 'after_click');
    tabsInit('.balcon_icons', 'balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
}

export default tabs;