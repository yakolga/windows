import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('input#width'),
        windowHeight = document.querySelectorAll('input#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('input[type="checkbox"]');

    checkNumInputs('input#width');
    checkNumInputs('input#height');

    function bindActionToElems(event, element, prop) {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN': 
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Cold' : state[prop] = 'Hot';
                            element.forEach((checkbox, j) => {
                                checkbox.checked = false;
                                if (i == j) {
                                    checkbox.checked = true;
                                }
                            });
                        } else {
                           state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                    console.log(state);
                if (!state['form'] || !state['width'] || !state['height']) {
                    document.querySelector('.popup_calc_button').classList.add('disable');
                } else {
                    document.querySelector('.popup_calc_button').classList.remove('disable');
                }
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;