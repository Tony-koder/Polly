image1 = document.getElementById('img1');
image2 = document.getElementById('img2');

function enlargeImg1() {
    image1.style.transform = 'scale(1.5)';
    image1.style.transition = 'transform 0.3s ease'
}

function resetImg1() {
    image1.style.transform = "scale(1)";
    image1.style.transition = "transform 0.3s ease";
}
function enlargeImg2() {
    image2.style.transform = 'scale(1.5)';
    image2.style.transition = 'transform 0.3s ease'
}

function resetImg2() {
    image2.style.transform = "scale(1)";
    image2.style.transition = "transform 0.3s ease";
}

function resetImg() {
    resetImg1()
    resetImg2()
}