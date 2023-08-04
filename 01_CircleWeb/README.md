## What is it?
작은 원이 큰 원 반지름을 기준으로 회전을 하도록 설계하였다.
단순히 자바스크립트 함수 연습한 코드이다.
### function createCircles()
우선 함수 내에서 원의 갯수만큼 반복문을 생성한다.<br/>
각각의 원사이의 각도와 sin cos 함수를 이용하여 각 원의 x,y좌표를 생성한다.<br/>
http://www.w3.org/2000/svg 를 이용하여 각 원을 포함시킬 circleGroup 생성하였다.<br/>
또한 원 안에 들어갈 text요소도 생성한다.<br/>
switch를 이용하여 각 원 안에 들어갈 텍스트들을 다르게 설정하였다.<br/>
이제 각 원과 텍스트를 circleGroup에 담는다.

### function rotateCircles()
아래의 함수 내부 코드를 보면 알 수 있듯이 각도를 변화시켜 cos, sin함수를 이용하여 좌표를 변화시키며 원을 회전시킨다.<br/>
```rotationAngle += rotationSpeed;```
이 함수를 한 번 실행시키면 requestAnimationFrame(rotateCircles)에 의해 재귀호출 된다.<br/>
여기서 "requestAnimationFrame"는 변화를 자연스럽게 연결시켜준다.<br/> 
