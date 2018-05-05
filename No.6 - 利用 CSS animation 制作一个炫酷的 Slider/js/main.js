var container = document.querySelector(".container");
var imgList = document.querySelectorAll(".img-box img"); // 获取所有图片

for (var i = 0; i < imgList.length; i++) {
    if (i === 0) {
        imgList[i].style.zIndex = 2;
    } else {
        imgList[i].style.zIndex = 1;
    }
}
// 增加缩略图
container.innerHTML += "<ul><li><img src=" + imgList[0].src + "></li><li><img src=" + imgList[1].src + "></li><li><img src=" + imgList[2].src + "></li><li><img src=" + imgList[3].src + "></li><li><img src=" + imgList[4].src + "></li></ul>";

imgList = document.querySelectorAll(".img-box img"); // 由于页面重新渲染了，所以得重新获取
var currentImg = 0;
var thumbnailList = document.querySelectorAll(".container ul img"); // 获取所有缩略图

for (var i = 0; i < thumbnailList.length; i++) {
    thumbnailList[i].index = i;
    thumbnailList[i].onclick = function () {
        for (var j = 0; j < imgList.length; j++) {
            if (j === this.index) {
                imgList[j].style.zIndex = 2;
                imgList[j].className = "ani-" + (j + 1);
            } else if (j === currentImg) {
                imgList[j].style.zIndex = 1;
                imgList[j].className = "";
            } else {
                imgList[j].style.zIndex = 0;
                imgList[j].className = "";
            }
        }
        currentImg = this.index;
    }
}