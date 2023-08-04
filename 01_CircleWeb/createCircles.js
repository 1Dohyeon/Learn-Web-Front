/* function createAboutMe() {
  const aboutMeDiv = document.createElement('div');
  aboutMeDiv.style.backgroundColor = '#748c70';
  aboutMeDiv.style.width = '100vw';
  aboutMeDiv.style.height = '80vh';
  aboutMeDiv.style.position = 'absolute';
  aboutMeDiv.style.top = '20vh';
  aboutMeDiv.style.zIndex = '9999';

  // X 버튼 생성
  const closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.width = '30px';
  closeButton.style.height = '30px';
  closeButton.style.border = 'none';
  closeButton.style.backgroundColor = 'transparent';
  closeButton.style.color = 'white';
  closeButton.style.fontSize = '24px';
  closeButton.style.fontWeight = 'bold';
  closeButton.style.cursor = 'pointer';

  // X 버튼 클릭 이벤트 처리
  closeButton.addEventListener('click', () => {
    document.body.removeChild(aboutMeDiv);
  });

  // aboutMeDiv에 closeButton 추가
  aboutMeDiv.appendChild(closeButton);

  document.body.appendChild(aboutMeDiv);
} */
// createCircles.js
const container = document.querySelector('.container');
const smallCirclesGroup = document.querySelector('.small-circles');
const bigCircleRadius = 800;    // 큰 원 반지름
const smallCircleRadius = 150;  // 작은 원 반지름
const smallCircleCount = 6;     // 원의 갯수
const angleIncrement = (2 * Math.PI) / smallCircleCount;  // 원과 원 사이의 각도

export function createCircles() {
    for (let i = 0; i < smallCircleCount; i++) {
      const angle = i * angleIncrement; // 원이 위치할 각도
      const smallCircleCx = 800 + (bigCircleRadius - smallCircleRadius * 1.25) * Math.cos(angle); // 각 원 중심의 x좌표
      const smallCircleCy = 800 + (bigCircleRadius - smallCircleRadius * 1.25) * Math.sin(angle); // 각 원 중심의 y좌표
      
      // http://www.w3.org/2000/svg 를 이용하여 circleGroup 생성
      const circleGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
      // http://www.w3.org/2000/svg 를 이용하여 원 요소 생성 후 편집(좌표, 반지름, 색 등)
      const smallCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      smallCircle.setAttribute('cx', smallCircleCx);
      smallCircle.setAttribute('cy', smallCircleCy);
      smallCircle.setAttribute('r', smallCircleRadius);
      smallCircle.setAttribute('fill', `#748c70`);
  
      // http://www.w3.org/2000/svg 를 이용하여 원 안에 들어갈 text요소 생성
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      
      switch (i){
        case 0:
          text.textContent = `About Me`;
          break;
        case 1:
          text.textContent = `Github`;
          break;
        case 2:
          text.textContent = `Language`;
          break;
        case 3:
          text.textContent = `Studying`;
          break;
        case 4:
          text.textContent = `Projects`;
          break;
        case 5:
          text.textContent = `Contact Me`;
          break;
      }
  
      text.setAttribute('x', smallCircleCx);
      text.setAttribute('y', smallCircleCy);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('alignment-baseline', 'middle');
      text.setAttribute('fill', '#e8e7e3');  // 텍스트 색상
      text.setAttribute('font-size', '34px');  // 텍스트 글꼴 크기
      text.setAttribute('font-weight', '900');  // 텍스트 글꼴 두께
  
      // smallCircle과 text에 마우스 커서 진입 및 벗어날 때 커서 모양 변경
      [smallCircle, text].forEach((element) => {
        element.addEventListener('mouseenter', () => {
          container.style.cursor = 'pointer';
        });
      
        element.addEventListener('mouseleave', () => {
          container.style.cursor = 'auto';
        });
      });
    
      // 각각의 smallCircle 또는 text를 click할 경우 handleCircleClick함수를 발생시킴
      smallCircle.addEventListener('click', handleCircleClick);
      text.addEventListener('click', handleCircleClick);
      
      function handleCircleClick() {
        switch (i) {
          case 0:
            createAboutMe()
            break;
          case 1:
            window.location.href = 'https://github.com/1Dohyeon';
            break;
          case 2:
            break;
          case 3:
            window.location.href = 'https://github.com/1Dohyeon/Study';
          case 4:
            break;
          case 5:
            break;
        }
      }
      
  
      // CircleGroup에 contents 삽입
      circleGroup.appendChild(smallCircle);
      circleGroup.appendChild(text);
  
      // smallCirclesGroup에 circleGroup삽입
      smallCirclesGroup.appendChild(circleGroup);
    }
  }

