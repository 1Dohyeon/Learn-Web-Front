function getTph(){
    // 우선 선택된 option value값을 url의 변수(파라미터값) dt에 담는다.
    var place  = document.getElementById("place")
    var dt = (place.options[place.selectedIndex].value);
    // 우선 선택된 option text값을 html에 출력하기 위한 변수에 담고 html에 출력.
    var city =  (place.options[place.selectedIndex].text);
    document.getElementById('city').innerHTML = city;
    // 선택된 날짜를 ' - '를 기준으로 분리하고 ' - ' 또는 공백  없이 모아준다.
    const startDate = document.getElementById('start-date').value;
    var todayDate=startDate.split('-');
    var Date=todayDate[0]+todayDate[1]+todayDate[2];
    
    var url ='https://www.khoa.go.kr/api/oceangrid/tideObsPreTab/search.do?ServiceKey=D1H8zV6S/gnXCwLS4/oSw==&ObsCode='+ dt +'&Date='+ Date +'&ResultType=json';
    
    // fetch()함수를 통해 url을 불러온다
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
        // Json data의 원하는 key만 불러오는데, ' '를 기준으로 분리하여 필요한 부분만 가져오고 html에 출력 
        tph0=data.result.data[0].tph_time.split(' ')
        document.getElementById('t1').innerHTML = tph0[1] + ' ' +data.result.data[0].hl_code;
        tph1=data.result.data[1].tph_time.split(' ')
        document.getElementById('t2').innerHTML = tph1[1] + ' ' +data.result.data[1].hl_code;
        tph2=data.result.data[2].tph_time.split(' ')
        document.getElementById('t3').innerHTML = tph2[1] + ' ' +data.result.data[2].hl_code;
        tph3=data.result.data[3].tph_time.split(' ')
        document.getElementById('t4').innerHTML = tph3[1] + ' ' +data.result.data[3].hl_code;
    });
}