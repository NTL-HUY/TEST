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
    //ẩn các tab và hiện tab đầu khi load trang
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
    

    //Chuyển trang
    document.querySelectorAll('.menuContent .main-menu li a').forEach(function(a){
        a.addEventListener('click',function(){
            let url = this.getAttribute('href');
            window.open(url,'_self');
        })
    })

    document.getElementById('logo').addEventListener('click',function(){
        window.open(this.getAttribute('data_url'),'_self');
    })

    // reposive toggle menu
    let menu = document.querySelector('.menuContent')
    document.querySelector('.toggle-btn').addEventListener('click',function(){
        this.classList.toggle('show-icon');
        menu.classList.toggle('show-menu');
    })

    // =======update anh
    let imgSrc = [
        {src : 'https://cdn.animevietsub.app/data/poster/2019/08/26/animevsub-bGw5lnUHTC.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2020/10/17/animevsub-IoEzyCjdCJ.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2023/09/29/animevsub-Qf9u3L0E8T.jpeg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2022/08/10/animevsub-YbyuKjpQeE.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2024/07/31/animevsub-9ep9o4FUkU.jpg'},

        {src : 'https://cdn.animevietsub.app/data/poster/2024/08/21/animevsub-HyPtzWKWts.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2022/08/10/animevsub-hAPTRhuOjc.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2023/09/25/animevsub-lPqhWXhWS6.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2023/03/07/animevsub-mWLl2jHich.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2024/07/04/animevsub-vFSCZJW5HB.jpg'},
        
        {src : 'https://cdn.animevietsub.app/data/poster/2024/04/20/animevsub-opBQsZguLV.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2024/07/31/animevsub-KifL3BWcVE.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2024/06/01/animevsub-Vm3me5nfAg.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2022/08/02/animevsub-r0adZL56My.jpg'},
        {src : 'https://cdn.animevietsub.app/data/poster/2024/07/01/animevsub-CXl8GsAf2f.jpg'},
    ]

    let titles = [
        { title: 'The Shawshank Redemption' },
        { title: 'Bố Già' },
        { title: 'Kỵ Sĩ Bóng Đêm' },
        { title: 'Pulp Fiction' },
        { title: 'Chúa Tể Những Chiếc Nhẫn: Sự Trở Lại Của Nhà Vua' },
        { title: 'Những Kẻ Điên' },
        { title: 'Kẻ Phá Hoại' },
        { title: 'Cuộc Chiến Không Thể Tả' },
        { title: 'Ma Trận' },
        { title: 'Những Gã Hề' },
        { title: 'Đế Chế Phản Công' },
        { title: 'Sự Im Lặng Của Cừu' },
        { title: 'Bảy Tội Ác' },
        { title: 'Những Kẻ Tình Nghi' },
        { title: 'Cứu Nhân Ryan' },
        { title: 'Dòng Xanh' },
        { title: 'Đấu Sĩ' },
        { title: 'Không Gian' },
        { title: 'Ngày Trở Về' },
        { title: 'Tử Thần' },
        { title: 'Công Viên Kỷ Jura' },
        { title: 'Vinh Quang' },
        { title: 'Avatar' },
        { title: 'Titanic' },
        { title: 'Kỵ Sĩ Bóng Đêm Trỗi Dậy' },
        { title: 'Kẻ Xâm Nhập' },
        { title: 'Những Kẻ Đánh Thuê' },
        { title: 'Nhạc Jazz' },
        { title: 'Kẻ Sống Sót' },
        { title: 'Ký Sinh Trùng' },
        { title: 'Joker' },
        { title: 'Năm 1917' },
        { title: 'Đâm Lén' },
        { title: 'La La Land' },
        { title: 'Vùng Đất Linh Hồn' },
        { title: 'Django Không Khoan Nhượng' },
        { title: 'Khách Sạn Budapest Vĩ Đại' },
        { title: 'Max Điên' },
        { title: 'Cô Gái Mất Tích' },
        { title: 'Mạng Xã Hội' },
        { title: 'Cáo Già Phố Wall' },
        { title: 'Nước Mắt Của Nàng' },
        { title: 'Sự Xuất Hiện Của Người Ngoài Hành Tinh' },
        { title: 'Blade Runner 2049' },
        { title: 'Tám Kẻ Thù' },
        { title: 'Một Nơi Yên Tĩnh' },
        { title: 'Linh Hồn' },
    
        // Tiêu đề tin tức
        { title: 'Tin Nóng: Động Đất Lớn Ở Thành Phố' },
        { title: 'Chính Trị: Công Bố Chính Sách Mới' },
        { title: 'Cập Nhật Thể Thao: Đội Địa Phương Chiến Thắng Giải Vô Địch' },
        { title: 'Cảnh Báo Thời Tiết: Cơn Bão Dự Kiến Sẽ Đến Ngày Mai' },
        { title: 'Y Tế: Nghiên Cứu Mới Về Bệnh Tim Mạch' },
        { title: 'Giải Trí: Ngôi Sao Công Bố Dự Án Mới' },
        { title: 'Công Nghệ: Đột Phá Trong Trí Tuệ Nhân Tạo' },
        { title: 'Kinh Doanh: Thị Trường Chứng Khoán Đạt Mức Cao Kỷ Lục' },
        { title: 'Quốc Tế: Tiến Triển Trong Đàm Phán Hòa Bình' },
        { title: 'Khoa Học: Phát Hiện Mới Trong Khám Phá Vũ Trụ' }
    ];


    function updateText(items){
        let count = 0;
        $('.movie-item .movie-info .movie-title').each(function(){
            count = count%items.length;
            $(this).text(items[count++].title);
        })
    }

    function updateImg(items){
        let count = 0;
        $('section.left .tab-content img').each(function(){
            count = count%items.length;
            $(this).attr('src',items[count++].src);
        })
    }

    // console.log(document.querySelectorAll('section.left .tab-content img'));
    updateImg(imgSrc);
    updateText(titles);
    
    $(window).scroll(function(){
        // console.log($(this).scrollTop());
        
        if($(this).scrollTop() >= 130){
            $('.homepage').css({
                'background':'var(--random-movie-box)'
            })
        }else{
            $('.homepage').css({
                'background':'var(--menu-color)'
            })
        }
    })

}