const classBtns = document.querySelector('.portfolio_btns');

const portfolioImages = document.querySelectorAll('.img');

const portfolioAllButns = document.querySelectorAll('.btn');



function changeImage(event) {

    if (event.target.classList.contains('btn')) {

        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`)

    }

}

function changeButton(event) {

    if (event.target.classList.contains('btn')) {

        portfolioAllButns.forEach(btn => btn.classList.remove('btn_active'))

        event.target.classList.add('btn_active')
    }
}

classBtns.addEventListener('click', changeImage)
classBtns.addEventListener('click', changeButton)


