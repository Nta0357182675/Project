//đăng xuất
let out = document.querySelector('.log') as HTMLElement

let log = document.querySelector('.out .ba i') as HTMLElement

let cut = document.querySelector('.nut button.b22') as HTMLElement
console.log(log)


log.addEventListener('click', function () {  // click vào icon hiện trang đăng nhập

    out.style.display = 'flex'

})


cut.addEventListener('click', function () {  // sau đó nếu người dùng click vào quay lại thì ẩn trang đăng xuất đi
    out.style.display = 'none'
}
)
cut.addEventListener('click', function () {  // đồng thời icon chuyển lại thành màu đen
    log.style.color = 'black'
}
)
log.onmousemove = function () {
    log.style.color = '#0ed2f7'
}
log.onmouseleave = function () {
    log.style.color = 'black'
}

// Xem quán cafe
let ny = document.querySelector('.cen .trai ul li div.ny1') as HTMLElement
let quan = document.querySelector('.cen .trai ul li div.cf1') as HTMLElement
let cafe = document.querySelector('.task ul li.cafe i') as HTMLElement
let home = document.querySelector('.task ul li.home i') as HTMLElement

cafe.addEventListener('click', function () {
    cafe.style.color = '#0ed2f7'
    home.style.color = 'black'
    ny.style.display = 'none'
    quan.style.display = 'block'
})

home.onmousemove = function () {

    home.style.color = '#0ed2f7'
}

home.onmouseleave = function () {

    home.style.color = 'black'

}
home.addEventListener('click', function () {
    home.style.color = '#0ed2f7'
    cafe.style.color = 'black'
    ny.style.display = 'block'
    quan.style.display = 'none'
    home.onmouseleave = function () {
        home.style.color = '#0ed2f7'
    }
})