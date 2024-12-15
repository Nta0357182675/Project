//đăng xuất
var out = document.querySelector('.log');
var log = document.querySelector('.out .ba i');
var cut = document.querySelector('.nut button.b22');
console.log(log);
log.addEventListener('click', function () {
    out.style.display = 'flex';
});
cut.addEventListener('click', function () {
    out.style.display = 'none';
});
cut.addEventListener('click', function () {
    log.style.color = 'black';
});
log.onmousemove = function () {
    log.style.color = '#0ed2f7';
};
log.onmouseleave = function () {
    log.style.color = 'black';
};
// Xem quán cafe
var ny = document.querySelector('.cen .trai ul li div.ny1');
var quan = document.querySelector('.cen .trai ul li div.cf1');
var cafe = document.querySelector('.task ul li.cafe i');
var home = document.querySelector('.task ul li.home i');
cafe.addEventListener('click', function () {
    cafe.style.color = '#0ed2f7';
    home.style.color = 'black';
    ny.style.display = 'none';
    quan.style.display = 'block';
});
home.onmousemove = function () {
    home.style.color = '#0ed2f7';
};
home.onmouseleave = function () {
    home.style.color = 'black';
};
home.addEventListener('click', function () {
    home.style.color = '#0ed2f7';
    cafe.style.color = 'black';
    ny.style.display = 'block';
    quan.style.display = 'none';
    home.onmouseleave = function () {
        home.style.color = '#0ed2f7';
    };
});
