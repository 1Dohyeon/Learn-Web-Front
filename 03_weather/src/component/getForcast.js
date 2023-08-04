import '../style.css';
import React from 'react';

export default function GetForcast(props){
    
    return(
        <div className='forcastBox'>
            <div className='forcasts'><div className='rightBorderBox1'>{props.humidity}%<br/><a>상대습도</a></div></div>
            <div className='forcasts'><div className='rightBorderBox1'>{props.feelsLike}°C<br/><a>체감온도</a></div></div>
            <div className='forcasts'>{props.pressure}hPa<br/><a>기압</a></div>
        </div>
    );
}