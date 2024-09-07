window.addEventListener('load', function () {

    //homepage menu scroll
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

    //Chuyển trang

    document.querySelector('header .logo').addEventListener('click', function () {
        let url = this.getAttribute('href');
        window.open(url, '_self');
    })

    

    function updateClock() {
        let now = new Date();
        let weeks = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        let thu = weeks[now.getDay()];
        let day = String(now.getDate()).padStart(2, '0');
        let month = String(now.getMonth() + 1).padStart(2, '0');
        let year = String(now.getFullYear());
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');

        document.querySelector('.date-time').innerText = `${thu}, ${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    }

    setInterval(function () {
        updateClock();
    }, 1000)

    // // console.log(year);
    // console.log(day);
    // console.log('heelo');
    // console.log(now.getDay());

    function createSection(items) {
        let main = document.querySelector('main');
        for (let i = 0; i < items.length; i++) {
            let innerHTML = `
                
        <section id="${items[i].id}">

            <h1>${items[i].h1}</h1>
            <div class="news-container flex">
                <div class="container-right">
                    <div class="main-content flex">
                        <div class="content">
                            <h2 class="title">
                                TP.HCM: Rộn ràng chào đón năm học mới
                            </h2>
                            <p>
                                (HTV) - Ngay sau khi kết thúc kỳ nghỉ lễ 02/9, thầy và trò các trường tại TP.HCM đã trở
                                lại trường trang trí, tập dợt các chương trình để chuẩn bị cho Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, suscipit. Explicabo dolores ipsam quia consequatur exercitationem omnis alias molestias cupiditate mollitia beatae fugit aliquid, error, rem molestiae accusantium minus dolor!
                            </p>
                        </div>
                        <div class="img-content">
                            <img src="https://assets2.htv.com.vn/Images/1/News/126731/thumb-back-to-school.gif"
                                alt="">
                        </div>
                    </div>
                    <div class="sub-content">
                        <div class="list-items flex">
                            <div class="item">
                                <img src="https://assets2.htv.com.vn/Images/1/News/126716/thumb-cua-hang.gif" alt="">
                                <h3 class="title">
                                    TP.HCM: Rộn ràng chào đón năm học mới
                                </h3>
                            </div>

                            <div class="item">
                                <img src="https://assets2.htv.com.vn/Images/1/News/126716/thumb-cua-hang.gif" alt="">
                                <h3 class="title">
                                    Ngành tái chế Việt Nam đứng trước thách thức và cơ hội đan xen
                                </h3>
                            </div>

                            <div class="item">
                                <img src="https://assets2.htv.com.vn/Images/1/News/126716/thumb-cua-hang.gif" alt="">
                                <h3 class="title">
                                    TP.HCM: Đẩy mạnh đào tạo nhân lực ngành công nghiệp vi mạch bán dẫn
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-left">
                    <div class="sub-content">
                        <div class="list-items flex">
                            <div class="item">
                                <img src="https://assets2.htv.com.vn/Images/1/News/126716/thumb-cua-hang.gif" alt="">
                                <h3 class="title">
                                    TP.HCM: Rộn ràng chào đón năm học mới
                                </h3>
                            </div>

                            <div class="item">
                                <img src="https://assets2.htv.com.vn/Images/1/News/126716/thumb-cua-hang.gif" alt="">
                                <h3 class="title">
                                    Ngành tái chế Việt Nam đứng trước thách thức và cơ hội đan xen
                                </h3>
                            </div>

                            <div class="item">
                                <img src="https://assets2.htv.com.vn/Images/1/News/126716/thumb-cua-hang.gif" alt="">
                                <h3 class="title">
                                    TP.HCM: Đẩy mạnh đào tạo nhân lực ngành công nghiệp vi mạch bán dẫn
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

            `

            main.insertAdjacentHTML('beforeend', innerHTML);
        }
    }

    let items = [
        { id: 'kinhte', h1: 'Kinh tế' },
        { id: 'giaitri', h1: 'Giải trí' },
        { id: 'congnghe', h1: 'Công nghệ' },
        { id: 'thethao', h1: 'Thể thao' },
        { id: 'giaoduc', h1: 'Giáo dục' },
        { id: 'dulich', h1: 'Du lịch' },
    ]

    createSection(items);

    let listSrc = [
        { src: 'https://assets2.htv.com.vn/Images/1/News/126659/thumb.hoc-bac-ve-tinh-than-tu-chu-okok.transfer.gif' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126776/60s-germany-ifa.gif' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126791/germany-thumb.gif' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126779/usa-lobster-thumb.gif' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126780/benin-culture-lake-thumb.gif' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126729/thumb.gif' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126744/thumb-20h-11.gif' },

        { src: 'https://assets2.htv.com.vn/Images/1/News/126508/20h-03-cum-rap-phuc-vu-le-0209.transfer.gif' },

        { src: 'https://assets2.htv.com.vn/Images/1/News/126767/11-n.jpg' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126730/thumb.gif' },

        { src: 'https://assets2.htv.com.vn/Images/1/News/126732/z5795522283491_af0a708bb53640bb28a4624196c10661.jpg' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126684/vang.jpeg' },
        { src: 'https://assets2.htv.com.vn/Images/1/News/126684/vang.jpeg' },


    ]


    //thay anh
    function updateImgSrc(items) {
        let count = 0;
        $('main img').each(function () {
            count = count % items.length;
            $(this).attr('src', items[count++].src)
        })
    }

    updateImgSrc(listSrc);

    $('a').click(function (event) {
        event.preventDefault();
    })

    //xu ly truot
    $('ul.menu li a').click(function () {
        // console.log($(this).attr('href').offset().top);

        $('html ,body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 50
            },
            600
        )
    })

    $('ul.menu li a').hover(function () {
        $(this).addClass('animate__animated').addClass('animate__heartBeat').addClass('effect');
    }, function () {
        $(this).removeClass('animate__heartBeat');
    })

    let menu = $('ul.menu');
    let distanceTopMenu = menu.offset().top

    $(window).scroll(function () {

        let distance = distanceTopMenu - $(this).scrollTop();
        if (distance <= 0) {
            menu.css({
                "position": "fixed",
                'z-index': "999",
                'width': '100%',
                'top': '0',
                'left': '50%',
                'transform': 'translateX(-50%)',
                'background-color': 'white'
            })
        } else {
            menu.css({
                'position': 'relative',
                // 'margin': '1rem auto 0 auto'
            })
        }

        // console.log($(window).scrollTop());

        // console.log($('ul.menu').offset().top);


    })



})