
const projects = document.querySelectorAll('.project');
const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close-popup');
const popupTitle = document.querySelector('.popup-title');
const popupImage = document.querySelector('.popup-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImages = [];
let currentImageIndex = 0;

projects.forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h3').textContent;
        const description = project.querySelector('p').textContent;
        currentImages = project.dataset.images.split(',');
        popupTitle.textContent = title;
        currentImageIndex = 0;
        popupImage.src = currentImages[currentImageIndex];

        popup.style.display = 'flex';
        document.body.classList.add('popup-open');
    });
});


closePopup.addEventListener('click', closePopupFunction);
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopupFunction();
    }
});

function closePopupFunction() {
    popup.style.display = 'none';
    document.body.classList.remove('popup-open');
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    popupImage.src = currentImages[currentImageIndex];
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    popupImage.src = currentImages[currentImageIndex];
});
