const images = () => {
    const workSection = document.querySelector('.works'),
        imgPopup = document.createElement('div'),
        bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const parentLink = target.closest('a').getAttribute('href');
            bigImage.src = parentLink;
        }

        if (target && target.classList.contains('popup')) {
            imgPopup.style.display = 'none';
        }
    });

}

export default images;