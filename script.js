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

//This function will handle the carousel 
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelector('.slides');
    const slideCount = slides.querySelectorAll('.slide').length;
    let perPage = getPerPage();
    let currentPage = 1;

    function getPerPage() {
        const width = window.innerWidth;
        if (width <= 480) {
            return 1;  
        } else if (width <= 768) {
            return 2;  
        } else {
            return 5;  
        }
    }

    function showPage(page) {
        perPage = getPerPage();
        const maxPages = Math.ceil(slideCount / perPage);
        if (page < 1) {
            page = 1;
        } else if (page > maxPages) {
            page = maxPages;
        }
        currentPage = page;
        const startPosition = (currentPage - 1) * perPage;
        slides.style.transform = `translateX(-${(100 / perPage) * startPosition}%)`;
    }

    showPage(currentPage);

    window.addEventListener('resize', function() {
        showPage(currentPage);
    });

    document.querySelector('.prev').addEventListener('click', function () {
        showPage(currentPage - 1);
    });

    document.querySelector('.next').addEventListener('click', function () {
        showPage(currentPage + 1);
    });
});

