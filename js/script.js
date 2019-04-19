

var arrPhotos = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];

var currentPhotoIndex = 0;

var timer;

function changeImage(indx) {

    document.getElementById("imgViewer").src = arrPhotos[indx];

}

function showPrevious() {

    if (currentPhotoIndex === 0)
        currentPhotoIndex = 4;
    else
        currentPhotoIndex--;

    changeImage(currentPhotoIndex);

}

function startSlideShow() {

    if (timer != null)
        clearInterval(timer);

    timer = setInterval(showNext, 1000);

}

function stopSlideShow() {

    clearInterval(timer);

}

function showNext() {

    if (currentPhotoIndex === 4)
        currentPhotoIndex = 0;
    else
        currentPhotoIndex++;

    changeImage(currentPhotoIndex);

}