window.addEventListener('scroll', function() {
    var AboutMeBox = document.getElementById('AboutMe_box');
    var resumeBox = document.getElementById('Resume_box');
    var studyingBox = document.getElementById('Studying_box');
    var projectsBox = document.getElementById('Projects_box');
    var blogBox = document.getElementById('Blog_box');
    var boxes = [AboutMeBox, resumeBox, studyingBox, projectsBox, blogBox];
    var headerLiElements = document.getElementsByClassName('header_li');

    var windowHeight = window.innerHeight;
    var threshold = windowHeight * 0.5;

    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        var boxRect = box.getBoundingClientRect();
        var correspondingHeaderLi = headerLiElements[i];

        if ((boxRect.top + threshold) <= windowHeight && (boxRect.bottom - threshold) >= 0) {
            correspondingHeaderLi.style.borderBottomColor = '#5D9D0B';
            correspondingHeaderLi.querySelector('h1').style.color = '#5D9D0B';
        } else {
            correspondingHeaderLi.style.borderBottomColor = '#F4FEFD';
            correspondingHeaderLi.querySelector('h1').style.color = '#F4FEFD';
        }
    }
});

// 헤더 요소 클릭 이벤트 처리
function scrollToBox(boxId) {
    var boxElement = document.getElementById(boxId);
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width>650){
        var boxTop = boxElement.offsetTop - 200;
    } else{
        var boxTop = boxElement.offsetTop - 100;
    }

    window.scrollTo({
        top: boxTop,
        behavior: 'smooth'
    });
}








