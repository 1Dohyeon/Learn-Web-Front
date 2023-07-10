window.addEventListener('scroll', function() {
    var boxes = [
      document.getElementById('AboutMe_box'),
      document.getElementById('Resume_box'),
      document.getElementById('Studying_box'),
      document.getElementById('Projects_box'),
      document.getElementById('Blog_box')
    ];
  
    var headerLiElements = document.querySelectorAll('.header_li');
    var windowHeight = window.innerHeight;
    var threshold = windowHeight * 0.45; // header_li
  
    boxes.forEach(function(box, i) {
      var boxRect = box.getBoundingClientRect();
      var correspondingHeaderLi = headerLiElements[i];
  
      var isBoxVisible = (boxRect.top + threshold) <= windowHeight && (boxRect.bottom - threshold) >= 0;
  
      correspondingHeaderLi.style.borderBottomColor = '#5D9D0B';
      correspondingHeaderLi.querySelector('h3').style.color = isBoxVisible ? '#5D9D0B' : '#F4FEFD';
    });
  });

// 헤더 요소 클릭 이벤트 처리
function ClickToBox(boxId) {
    var boxElement = document.getElementById(boxId);
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width>768){
        var boxTop = boxElement.offsetTop - 180;
    } else{
        var boxTop = boxElement.offsetTop - 101;
    }

    window.scrollTo({
        top: boxTop,
        behavior: 'smooth'
    });
}


function toggleTheme() {
  var body = document.body;
  var header = document.getElementById("header");

  if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      header.classList.remove("light-mode"); // 헤더에도 어두운 모드 클래스 제거
  } else {
      body.classList.add("light-mode");
      header.classList.add("light-mode"); // 헤더에도 어두운 모드 클래스 추가
  }
}





