

window.addEventListener('load', function() {
    document.getElementById('image1').src = 'images/first.jpg';
    document.getElementById('image2').src = 'images/second.jpg';
    document.getElementById('image3').src = 'images/third.jpg';
    document.getElementById('flex1').src = 'images/tickets.jpg';
    document.getElementById('flex2').src = 'images/shirts.jpg';
    document.getElementById('flex3').src = 'images/sports.jpg';
    document.getElementById('flex4').src = 'images/ball.avif';
    document.getElementById('flex5').src = 'images/jewerly.jpg';
    document.getElementById('carosel1').src = 'images/carosel1.jpg';
    document.getElementById('carosel2').src = 'images/carosel2.jpg';
    document.getElementById('carosel3').src = 'images/carosel3.jpg';
    document.getElementById('carosel4').src = 'images/carosel4.jpg';
    document.getElementById('carosel5').src = 'images/carosel5.jpg';
    document.getElementById('carosel6').src = 'images/carosel6.jpg';
    document.getElementById('carosel7').src = 'images/carosel7.jpg';
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelector('.slides');
    const slideCount = slides.querySelectorAll('.slide').length;
    const perPage = 5; // Number of products per page
    let currentPage = 1;

    function showPage(page) {
        const startPosition = (page - 1) * perPage;
        const endPosition = startPosition + perPage;
        slides.style.transform = `translateX(-${startPosition * (100 / perPage)}%)`;
    }

    showPage(currentPage);

    document.querySelector('.prev').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.querySelector('.next').addEventListener('click', function () {
        if (currentPage < Math.ceil(slideCount / perPage)) {
            currentPage++;
            showPage(currentPage);
        }
    });
});
