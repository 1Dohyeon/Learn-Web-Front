## What is it?
장소와 날짜를 설정하고 버튼을 누르면 오픈 API를 이용하여 고조와 저조 데이터를 가져온다.
<br/>

### HTML
아래 html 코드를 보면 알 수 있듯이 select를 이용하여 장소를 선택할 수 있게 하였고,
input type date를 이용하여 날짜를 입력받게 해두었다.<br/>

```
<select id="place">
...
<input type="date" id="start-date" name="start-date">
```

<br/>

### function getTph()
select에서 선택된 option value값을 url에 작성할 변수 dt에 담는다.<br/>
input에서 선택된 날짜 정보를 url로 옮기기전에, 데이터가 보내달라는 정보값대로 기호를 제거해준다.<br/>
오픈 api url에 변수 dt와 날짜정보, 그리고 KEY까지 붙여준다.<br/>
이제 fetch를 통해서 url를 불러오고 json형태의 데이터를 UI에 어울리게 매칭되도록 가공해주었다.
