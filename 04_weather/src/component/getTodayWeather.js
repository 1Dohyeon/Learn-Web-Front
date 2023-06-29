import '../style.css';

function GetTodayWeather(props) {

    function getImg(){  // get weather icon images according to the value of the "result.data.weather[0].main"
        switch(props.sky){
        case 'Clear':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnSKZMCWzMOQx-BmqNAIuo4NkETmZF1jEuQ&usqp=CAU"
            />
            );

        case 'Clouds':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37PUJjm0Pp9cRHHdSMqZuaGPHgG_N5SCnvQ&usqp=CAU"
            />
            );

        case 'Rain':
            return (
            <img
                className="weatherImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8spnSarVkpWrCSnR4gtoNedUnZaEWSfc1g&usqp=CAU"
            />
            );
        } 
    } 

    return (
              
        <div className='todayWeather'>
            <div className='city'>{props.name}</div>
            <div className='temperature'>{props.temp}°C</div>
            <div className='sky'>{getImg()}</div>
        </div>
                 
    );
}

export default GetTodayWeather;


