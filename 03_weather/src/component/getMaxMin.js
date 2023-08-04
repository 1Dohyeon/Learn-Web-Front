import '../style.css';
import React from 'react';

export default function GetTodayTime(props){
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    return(
        <div className='todayTimeWeather'>
            <div className='dateBox'>{year + '/' + month + '/' + date}</div>
            <div className='tempsBox'><div className='rightBorderBox1'>{props.maxtemp}°C<br/><a>max</a></div></div>
            <div className='tempsBox'>{props.mintemp}°C<br/><a>min</a></div>
        </div>
    );
}