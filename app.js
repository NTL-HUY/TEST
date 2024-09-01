window.onload = function () {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let length = items.length - 1;
    let refreshSlider = setInterval(function () {
        next.click();
    }, 5000)
    console.log(length);
    next.addEventListener('click', function () {
        if (active == length) {
            active = 0;
        } else {
            active++;
        }
        reloadSlider();
    })

    prev.addEventListener('click', function () {
        if (active == 0) {
            active = length;
        } else {
            active--;
        }
        reloadSlider();
    })

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            active = i;
            reloadSlider();
        })
    }

    function reloadSlider() {
        // console.log(active);
        // doi hinh anh
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        //hieu ung di chuyen dots
        let lastActiveDot = document.querySelector('.slider .dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');

        //reset hieu ung content slider
        let lastEffectItems = document.querySelector('.slider .list .item.effect');
        lastEffectItems.classList.remove('effect');
        items[active].classList.add('effect');

        //lam moi lai time chuyen silde khi click
        clearInterval(refreshSlider);
        refreshSlider = setInterval(function () {
            next.click();
        }, 5000)
    }

    $('a').click(function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    });

    // tab menu
    $(".tab-container").each(function () {
        $(this).find(".tab-content:not(:first)").hide();
    })
    $(".tab a").click(function () {
        //xác định vị trí tab-container nào đang được click
        let tabContainer = $(this).closest(".tab-container");

        tabContainer.find(".tab li").removeClass("active-tab");
        $(this).parent().addClass('active-tab');

        tabContainer.find(".tab-content").hide();
        tabContainer.find($(this).attr('href')).show();
    })


    //Animated css cho menu
    $('.tab li').each(function () {
        $(this).addClass('animate__animated');
    })

    $('.tab li').hover(function () {
        $(this).addClass('animate__rubberBand');
    },
        function () {
            $(this).removeClass('animate__rubberBand');
        })
    // menu truot
    let tab = document.querySelector('.tab');
    let tabItems = document.querySelectorAll('.tab > li > a');
    let highlight = document.querySelector('.highlight');

    for (let i = 0; i < tabItems.length; i++) {
        tabItems[i].addEventListener('click', function () {
            let itemCoords = tabItems[i].getBoundingClientRect();
            let tabCoords = tab.getBoundingClientRect();

            highlight.style.width = `${itemCoords.width}px`;
            highlight.style.transform = `translateX(${itemCoords.left - tabCoords.left}px)`;
        });
    }

    const firstItem = tabItems[0];
    const firstItemCoords = firstItem.getBoundingClientRect();
    const tabCoords = tab.getBoundingClientRect();
    highlight.style.width = `${firstItemCoords.width}px`;
    highlight.style.transform = `translateX(${firstItemCoords.left - tabCoords.left}px)`;
}