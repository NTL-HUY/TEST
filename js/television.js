window.addEventListener('load', function () {

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
        let currentTime = now.getHours() * 60 + now.getMinutes();

        for (let i = 0; i < items.length; i++) {
            //tách giờ và phút
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

            //gắn class
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
            count = [count % movieTitles.length];
            items.push({ time: time, title: movieTitles[count] });
            count++;
        }
    }

    addItemsToList(items);

    setInterval(function () {
        addItemsToList(items);
        console.log('h1llo');
    }, 1000)


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
                                    <button id="xem-ngay">Xem ngay</button>
                                    <button id="danh-sach">Danh sách</button>
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
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/06/14/pyw7qyf1_vtv1_tet_hoa_xuan_cae436b7770f8da626663ad71801953920_296_168.webp" }
    ];

    let imgHTV = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/07/31/9tkj4nag_htv112a746c20eb4c92349fd591f8e35473ed_296_168.webp" }
    ]
    let imgK = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/06/pg01z5pa_banner-dai-truyen-hinh380158b1b95fe311a2ae92e43705028f_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/06/pg01z5pa_banner-dai-truyen-hinh380158b1b95fe311a2ae92e43705028f_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/06/pg01z5pa_banner-dai-truyen-hinh380158b1b95fe311a2ae92e43705028f_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/06/pg01z5pa_banner-dai-truyen-hinh380158b1b95fe311a2ae92e43705028f_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/06/pg01z5pa_banner-dai-truyen-hinh380158b1b95fe311a2ae92e43705028f_296_168.webp" }
    ]
    let imgTHVL = [
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/1gnf3s0c_3d1a0e431a504ecc9149e67ac8aa0a596_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/1gnf3s0c_3d1a0e431a504ecc9149e67ac8aa0a596_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/1gnf3s0c_3d1a0e431a504ecc9149e67ac8aa0a596_296_168.webp" },
        { src: "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/02/27/1gnf3s0c_3d1a0e431a504ecc9149e67ac8aa0a596_296_168.webp" }
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
        }
    });

    document.querySelectorAll('.tab-container.sub2 .tab-content').forEach(function (tabContent, index) {
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
})