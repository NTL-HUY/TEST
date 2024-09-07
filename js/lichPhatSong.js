$(document).ready(function(){
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

     // reposive toggle menu
     let menu = document.querySelector('.menuContent')
     document.querySelector('.toggle-btn').addEventListener('click',function(){
         this.classList.toggle('show-icon');
         menu.classList.toggle('show-menu');
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


    function infoDate(date){
        let weeks = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
        let thu = weeks[date.getDay()];
        let day = String(date.getDate()).padStart(2,'0');
        let month = String(date.getMonth()+1).padStart(2,'0');
        return `${thu}, ngày ${day} tháng ${month}`;
    }

    let now = new Date();
    for(let i = 0; i < 7 ; i++){
        let stringDate = infoDate(now);
        $(`#day${i+1}`).text(stringDate);

        now.setDate(now.getDate()+1);
    }

    function returnElement(src,title){
        return `
                    <div class="item">
                        <div>
                            <img src="${src}" alt="">
                            <div class="title">${title}</div>
                        </div>
                    </div>
        `
    }
    
    function createItem(items,items2){
        let count = 0;
        let cnt = 0;
        $('.home-schedule .list-content').each(function(){
            for(let i = 0; i < 10 ; i++){
                count = count%items.length;
                cnt = cnt%items2.length;
                $(this).append(`${returnElement(items[count].src,items2[cnt].title)}`)
                cnt++;
                count++;
            }
        })
    }

    let listImgSrc = [
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/30/d4mfy3b4_1920x1080-cachsongdocthan_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/08/30/m2c4fh74_1920x1080-khiharrygapsally_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/09/05/00pafgjx_1920x1080-beetlejuicefa7e5ef1ff0a6c50a2b4cdca5ca0fbc7_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/12/k18e1ku0_1920x1080-doisongtinhaicuanusv_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/06/21/bpdcq6f9_1920x1080-nhagemstonechinhtruc3_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/06/4wo16qvn_1920x1080-maximumride_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/01/16/qtxg5y4z_1920x1080-toiaccuagrindelwald_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/12/07/g30i6hpz_1920x1080-nhanhvanguyhiem8_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/05/19/g4fepty5_1920x1080-hoi11cuaocean_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/03/15/tk2thpte_1920x1080-danecook7f4f5041b7b8a75dde4e70d9369b4026_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/05/rydd1p02_1920x1080-ngaythethaodunglai_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2024/04/19/6czeea98_1920x1080-blackhawkbiha_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/08/e8nhi6bo_1920x1080-tokyo_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/16/tgdffpq5_1920x1080-giadinhsopranos3_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/04/12/k18e1ku0_1920x1080-doisongtinhaicuanusv_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/03/17/n5v89z4w_1920x1080-serangoon-road-s1_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2021/03/18/voadtmk3_1920x1080-nhungcauchuyenangiau_296_168.webp"},
        {src : "https://static2.vieon.vn/vieplay-image/thumbnail_v4/2023/01/17/avv6zn00_1920x1080-maoiodau_296_168.webp"},
    ]

    let listTitle = [
        {title: "Cuộc Phiêu Lưu Kỳ Thú Của Nhóm Bạn Trẻ"},
        {title: "Bí Mật Của Thành Phố Ma"},
        {title: "Tình Yêu Và Sự Hy Sinh Trong Chiến Tranh"},
        {title: "Cuộc Chiến Chống Lại Thế Lực Hắc Ám"},
        {title: "Hành Trình Của Một Siêu Anh Hùng"},
        {title: "Một Ngày Trong Đời Của Một Nhà Báo"},
        {title: "Cuộc Chiến Của Những Thế Lực Siêu Nhiên"},
        {title: "Những Bí Mật Chưa Được Tiết Lộ"},
        {title: "Những Cuộc Phiêu Lưu Không Thể Tưởng Tượng Nổi"},
        {title: "Cuộc Chiến Giữa Các Nền Văn Minh"},
        {title: "Chuyến Phiêu Lưu Kỳ Thú Trong Không Gian"},
        {title: "Khám Phá Bí Mật Của Một Thế Giới Kỳ Lạ"},
        {title: "Đối Mặt Với Những Thử Thách Không Tưởng"},
        {title: "Cuộc Tìm Kiếm Một Kho Báu Huyền Thoại"},
        {title: "Bí Mật Của Một Tổ Chức Bí Ẩn"},
        {title: "Cuộc Chiến Đẫm Máu Giữa Các Gia Tộc"},
        {title: "Sự Trở Lại Của Một Huyền Thoại"},
        {title: "Những Cuộc Phiêu Lưu Trong Thế Giới Song Song"}
    ];
    
    createItem(listImgSrc,listTitle);

})