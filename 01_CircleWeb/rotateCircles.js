// rotateCircles.js
import { createCircles } from './createCircles.js';

// 변수들
const smallCirclesGroup = document.querySelector('.small-circles');
const bigCircleRadius = 800;    // 큰 원 반지름
const smallCircleRadius = 150;  // 작은 원 반지름
const smallCircleCount = 6;     // 원의 갯수
const angleIncrement = (2 * Math.PI) / smallCircleCount;  // 원과 원 사이의 각도
const rotationSpeed = 0.005;  // 회전 속도 
let rotationAngle = 0;        // 현재 회전 각도를 저장

// function: 원들의 좌표값을 변경시켜서 회전시킴
function rotateCircles() {
  rotationAngle += rotationSpeed;
  const smallCircles = smallCirclesGroup.querySelectorAll('circle');

  smallCircles.forEach((circle, index) => {
    const angle = index * angleIncrement + rotationAngle;
    const smallCircleCx = 800 + (bigCircleRadius - smallCircleRadius * 1.25) * Math.cos(angle);
    const smallCircleCy = 800 + (bigCircleRadius - smallCircleRadius * 1.25) * Math.sin(angle);
    circle.setAttribute('cx', smallCircleCx);
    circle.setAttribute('cy', smallCircleCy);

    const text = circle.parentNode.querySelector('text');
    text.setAttribute('x', smallCircleCx);
    text.setAttribute('y', smallCircleCy);
  });

  requestAnimationFrame(rotateCircles);
}


createCircles(); // 원 생성 함수 실행
rotateCircles();