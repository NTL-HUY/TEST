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
    document.querySelectorAll('.menuContent .main-menu li a').forEach(function (a) {
        a.addEventListener('click', function () {
            let url = this.getAttribute('href');
            window.open(url, '_self');
        })
    })

    document.getElementById('logo').addEventListener('click', function () {
        window.open(this.getAttribute('data_url'), '_self');
    })

    $('a').click(function (event) {
        event.preventDefault();
    });

     // reposive toggle menu
     let menu = document.querySelector('.menuContent')
     document.querySelector('.toggle-btn').addEventListener('click',function(){
         this.classList.toggle('show-icon');
         menu.classList.toggle('show-menu');
     })


    // ======lịch chiếu========
    //tạo thẻ div
    function createItemHTML(time, title, classs) {
        return `
            <div class="item-lich ${classs}">
                <span class="time">${time}</span>
                <span class="title">${title}</span>
            </div>
        `;
    }

    function addItemsToList(items) {

        //tạo lại list 
        let listLich = document.getElementById('list-lich');
        // listLich.innerHTML = '';   
        while (listLich.firstChild) {
            listLich.removeChild(listLich.firstChild);
        }

        //lấy thời time là phút
        let now = new Date();
        let currentTime = now.getHours() * 60 + now.getMinutes();//lấy giời gian hiện tại

        for (let i = 0; i < items.length; i++) {
            //tách giờ và phút của item
            let timeParts = items[i].time.split(':');
            //chuyển về kiểu số
            let hours = parseInt(timeParts[0]);
            let minutes = parseInt(timeParts[1]);

            let itemTime = hours * 60 + minutes;
            //tạo class
            let s = '';
            if (itemTime < currentTime) {
                s = "past";
            } else if (itemTime >= currentTime - 30 && itemTime <= currentTime + 30) {
                s = "current";
            } else {
                s = 'upcoming';
            }

            //gắn class + thêm element
            let itemHTML = createItemHTML(items[i].time, items[i].title, s);
            listLich.insertAdjacentHTML('beforeend', itemHTML);
        }

        // Cuộn đến phần tử current
        let currentElement = listLich.querySelector('.current');
        if (currentElement) {
            listLich.scrollTo({
                top: currentElement.offsetTop - (listLich.clientHeight / 2) + (currentElement.clientHeight / 2),
                behavior: 'smooth'
            });
        }


    }
    // mảng chưa nội dung
    let items = [];
    let movieTitles = [
        "Ký Sinh Trùng",
        "Ròm",
        "Mắt Biếc",
        "Để Mai Tính",
        "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
        "Hai Phượng",
        "Em Là Bà Nội Của Anh",
        "Lật Mặt 48h",
        "Bố Già",
        "Cô Gái Đến Từ Hôm Qua",
        "Tháng Năm Rực Rỡ",
        "Song Lang",
        "Người Bất Tử",
        "Về Nhà Đi Con",
        "Những Đứa Con Nhà Họ Nguyễn",
        "Người Phán Xử",
        "Lôi Báo",
        "Số Đỏ",
        "Chị Mười Ba",
        "Tiệc Trăng Máu",
        "Mẹ Chồng",
        "Gái Già Lắm Chiêu",
        "Cánh Đồng Bất Tận",
        "Hương Ga"
    ];
    let count = 0;
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            let time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            //gán chuỗi
            count = count % movieTitles.length;
            items.push({ time: time, title: movieTitles[count] });
            count++;
        }
    }

    let YTBlink = [
        'https://www.youtube.com/embed/Ar94m3fQcPU',
        'https://www.youtube.com/embed/ZKWS0f-Vma0',
        'https://www.youtube.com/embed/52oDw8Ivzyk?list=PLlVHoHHccp2_jIce6hcp5WhNhEvc6NYrQ',
        'https://www.youtube.com/embed/qQMM0UIZ1S8?list=PLlVHoHHccp2_jIce6hcp5WhNhEvc6NYrQ',
        'https://www.youtube.com/embed/HVucThEHy1U?list=PLlVHoHHccp2_jIce6hcp5WhNhEvc6NYrQ',
        'https://www.youtube.com/embed/9eK1hQ01RZQ?list=PLlVHoHHccp2_jIce6hcp5WhNhEvc6NYrQ',
        'https://www.youtube.com/embed/yLjm5ee9t7I?list=PLlVHoHHccp2_jIce6hcp5WhNhEvc6NYrQ',
        'https://www.youtube.com/embed/Rlg5_jBMxNk?list=PLlVHoHHccp2_jIce6hcp5WhNhEvc6NYrQ'
    ]
    addItemsToList(items);
    //tạo src cho các item-lich và sk click
    let iframeSrc = $('.video-player iframe');
    function clickItemLich() {
        let count = 0
        $('#list-lich .item-lich.past').each(function () {
            count = count % YTBlink.length;
            $(this).attr('data-url', YTBlink[count++]);
        }).click(function () {
            iframeSrc.attr('src', $(this).attr('data-url'));
        })
    }

    clickItemLich();

    setInterval(function () {
        addItemsToList(items);
        //sự kiện click trên lịch
        clickItemLich();
    }, 10000)

    //sự kiện click trên lịch

    // Xử lý tab chính
    // $(".tab-container").each(function(){
    // $(this).find(".tab-content:not(:first)").hide();
    // });

    $(".tab a").click(function (event) {
        event.preventDefault();

        let tabContainer = $(this).closest('.tab-container');

        // Hiển thị các li
        tabContainer.find(".tab li").removeClass('active-tab');
        $(this).parent().addClass('active-tab');

        // Hiển thị content
        tabContainer.find('.tab-content').removeClass('active-content').hide();
        $($(this).attr('href')).addClass('active-content').show();

    });



    //tạo các item
    function addTolistChannel(items, tContent) {
        let listItems = tContent.querySelector('.list-items');
        // let listItems = $(tContent).find('list-items');
        for (let i = 0; i < items.length; i++) {
            let ItemHTML = `
                    <div class="gap-item">
                        <div class="item">
                            <img src="${items[i].src}"
                            alt="">
                        </div>
                        <div class="more-info">
                            <div class="info-container">
                                <img src="${items[i].src}"
                                alt="">
                                <div class="buttons">
                                    <button class="xem-ngay">Xem ngay</button>
                                    <button class="danh-sach"><i class="fa-solid fa-plus"></i>Danh sách</button>
                                </div>
                                <div class="shadow"></div>
                            </div>
                        </div>
                    </div>
                    `
            listItems.insertAdjacentHTML('afterbegin', ItemHTML);
        }
    }

    let imgVTV = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/23/7daw54te_vtv269c40dc1567cd3d90fbcf942f7dc301e_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/19/k8uqigv4_vtv3-19-0829853a3b8346fd688d46ec054ad065e1_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/01/14/6dufbhs9_vtv4_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/5fytohum_vtv5_2808202368f788786af86e4c48d000d973749e96_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/03/28/tmx7zrvk_vtvcab_vtv-tnb_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/03/28/9ku4rk7z_vtvcab_update_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/03/21/mygem9ju_vtv-can-tho992d0d0d357f71755e38c5f4276cc207_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/03/05/2q571qa6_vtv7d7962270987bf20c053af427d6f13dad_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/01/14/ma6k05nf_vtv8_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/09/v7xh3gtj_vtv91034e87a65839d8e73c8121ac1002fda_296_168.webp" }
    ];

    let imgHTV = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/08/rhtg43e2_htv915b4297ab3bdc564d9f5896677938fc0_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/16/p8ms82i1_htv7-16-05-2024786120c5f02ea56ac1b26160caab3d2c_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/21/f0u5dp2g_htv-keyd63a66192fb894094e9a809afd54aaf6_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/21/2yoph2z9_htv3b40c1feb3e93079cf4d13c6e8f58c0e2_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" }

    ]
    let imgK = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/06/pg01z5pa_banner-dai-truyen-hinh380158b1b95fe311a2ae92e43705028f_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/04/04/6afpikog_ngang853c845e0e8df5f0db78066cf842e661_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/04/04/j0fxi6qj_banner90542868a48c02687282643a8aa86868_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/12/ikwco0j3_ngang-12-0653c0bc9f431d070aaf03b850a3d994c5_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/04/04/hos99ds1_bannercc6df4f3cfe37bbf07469f814a119c6a_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/04/04/hos99ds1_bannercc6df4f3cfe37bbf07469f814a119c6a_296_168.webp" }
    ]
    let imgTHVL = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/18/vspmnymg_5_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/r26h5snk_4332b8919ef1a9049e9711064f4a94915_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/r26h5snk_4332b8919ef1a9049e9711064f4a94915_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/r26h5snk_4332b8919ef1a9049e9711064f4a94915_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/1gnf3s0c_3d1a0e431a504ecc9149e67ac8aa0a596_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/03/21/s5a0ind2_thumb-vinh-long-28e178b8b7610fcac686d4db7f93630ae_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/09/tj081yei_vinh-long-1e26160d29106ac9e53c7685e3cd9d3b1_296_168.webp" },
    ]



    // $(".tab-container.sub1 .tab-content").each(function(){
    //     addTolistChannel(imgSrc,this);
    // })
    document.querySelectorAll('.tab-container.sub1 .tab-content').forEach(function (tabContent, index) {
        switch (index) {
            case 0:
                addTolistChannel(imgVTV, tabContent);
                break;
            case 1:
                addTolistChannel(imgHTV, tabContent);
                break;
            case 2:
                addTolistChannel(imgK, tabContent);
                break;
            case 3:
                addTolistChannel(imgTHVL, tabContent);
                break;
            case 4:
                addTolistChannel(imgVTV, tabContent);
                break;
            case 5:
                addTolistChannel(imgVTV, tabContent);
                break;
            case 6:
                addTolistChannel(imgVTV, tabContent);
                break;
            case 7:
                addTolistChannel(imgVTV, tabContent);
                break;
        }
    });

    let imgNews = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/09/26/s8a2pdzd_113-online-ban-tin-trua_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/09/26/s8a2pdzd_113-online-ban-tin-trua_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/29/q90sukb5_image66b8e02ffd12399f7a64d2d24554a99e_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/28/g6agzddp_bantinthethao_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/26/echgc3vg_chuyen-dong-24h-toi19aa17365c8cbacaa063cdf2d5ee1825b_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/28/qpt5zq8m_nguoiduatin24h1_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },

        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/15/ce0smeap_image8c514118822b6a89a8cd431fb82d9144_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/f7ozj67d_tapchikinhtecuoituan6f102801b5f80e72c15dbe54bd58593d_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/14/fuyxdruk_bbc-world-news_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/3hmx1q2r_kinhteso_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/yhs8ne4w_bantin113online_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/yhs8ne4w_bantin113online_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/3hmx1q2r_kinhteso_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/09/26/s8a2pdzd_113-online-ban-tin-trua_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/09/26/s8a2pdzd_113-online-ban-tin-trua_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/29/q90sukb5_image66b8e02ffd12399f7a64d2d24554a99e_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/28/g6agzddp_bantinthethao_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/26/echgc3vg_chuyen-dong-24h-toi19aa17365c8cbacaa063cdf2d5ee1825b_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/28/qpt5zq8m_nguoiduatin24h1_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },

        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/15/ce0smeap_image8c514118822b6a89a8cd431fb82d9144_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/f7ozj67d_tapchikinhtecuoituan6f102801b5f80e72c15dbe54bd58593d_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/14/fuyxdruk_bbc-world-news_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/3hmx1q2r_kinhteso_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/yhs8ne4w_bantin113online_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/yhs8ne4w_bantin113online_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/3hmx1q2r_kinhteso_296_168.webp" }
    ]

    let imgSports = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/mw94qybe_ttlcs12e9e7d7858380638795fac296cd4321_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/08/p02e1jbv_tctgtt364ccc512f1f2e6dce8fb775c63ad7c7_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/31/t8twar3h_5cf5f86308c45f80bc0ed11e2495e733e_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/02/07/32yptj6r_eplbantin_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/05/30/qg1jq1m9_the-thao50536ec6ece80f125573b2780dd633d2_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/7njrsk1n_one39f2070b07e778879eddfc33fac42385_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },

        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/15/ce0smeap_image8c514118822b6a89a8cd431fb82d9144_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/f7ozj67d_tapchikinhtecuoituan6f102801b5f80e72c15dbe54bd58593d_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/14/fuyxdruk_bbc-world-news_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/3hmx1q2r_kinhteso_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/avy62eqx_one02399aa2d9e6010c028ab24ea4ff8528_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/20/05q6d8en_bong-chuyebeee2f4cd100433ca65b768afc3e3f5a9_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/06vau8hf_3d836932a324b97f5f6c354b248c55072_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/16/viaqfvc4_htv_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/mw94qybe_ttlcs12e9e7d7858380638795fac296cd4321_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/08/p02e1jbv_tctgtt364ccc512f1f2e6dce8fb775c63ad7c7_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/31/t8twar3h_5cf5f86308c45f80bc0ed11e2495e733e_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/02/07/32yptj6r_eplbantin_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/05/30/qg1jq1m9_the-thao50536ec6ece80f125573b2780dd633d2_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/7njrsk1n_one39f2070b07e778879eddfc33fac42385_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/09/j693o8zi_0i4dr5t8_htv2cbc6f88e77afc2b8cc812f40c95dd316_296_168.webp" },

        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/05/15/ce0smeap_image8c514118822b6a89a8cd431fb82d9144_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/f7ozj67d_tapchikinhtecuoituan6f102801b5f80e72c15dbe54bd58593d_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/14/fuyxdruk_bbc-world-news_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/11/24/3hmx1q2r_kinhteso_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/avy62eqx_one02399aa2d9e6010c028ab24ea4ff8528_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/20/05q6d8en_bong-chuyebeee2f4cd100433ca65b768afc3e3f5a9_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/04/06vau8hf_3d836932a324b97f5f6c354b248c55072_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/16/viaqfvc4_htv_296_168.webp" }
    ]


    document.querySelectorAll('.tab-container.sub2 .tab-content').forEach(function (tabContent, index) {
        switch (index) {
            case 0:
                addTolistChannel(imgNews, tabContent);
                break;
            case 1:
                addTolistChannel(imgSports, tabContent);
                break;
        }
    });

    // document.querySelectorAll('.tab-container.sub1 .tab-content').forEach(function (tabContent) {
    //     addTolistChannel(imgVTV, tabContent);
    // });

    // hiệu ưng hover lên các channel
    let hoverTimeout;
    $(".gap-item .more-info").hide();

    $(".gap-item").hover(
        function () {
            clearTimeout(hoverTimeout);

            hoverTimeout = setTimeout(() => {
                $(this).find('.more-info').fadeIn();
            }, 500);
        },
        function () {
            clearTimeout(hoverTimeout);
            $(this).find('.more-info').fadeOut();
        }
    );
    //ẩn hiện save-channel
    let saveChannel = $('.save-channel')
    let closeBtn = $('.close-popin');
    saveChannel.hide();
    closeBtn.hide();

    $('.open-popin-btn').click(function () {
        saveChannel.fadeIn();
        closeBtn.fadeIn();
    })

    closeBtn.click(function () {
        saveChannel.fadeOut();
        closeBtn.fadeOut();
        $('open-popin-btn').fadeIn();
    })


    $('.danh-sach').click(function () {
        // $(this).parent().prev().attr(src)
        console.log('hello');
        showMessage();
        let src = $(this).parent().prev().attr('src')
        let itemHTML = `
                    <div class="item">
                        <div class="fix">
                            <img src="${src}"
                                alt="">
                            <div class="buttons">
                                <button id="xem">Xem ngay</button>
                                <button class ="remove">Gỡ ngay</button>
                            </div>
                        </div>
                    </div>
        `
        $('.save-list-items').append(itemHTML);
        removeItem();
    })
    function removeItem() {

        $('.remove').click(function () {
            console.log('hellooô')
            $(this).closest('.item').remove();
        })
    }

    function showMessage(){
        $('.message').show('slow').delay(1500).hide('slow')
    }
    // $('.open-popin .message').hide();

})