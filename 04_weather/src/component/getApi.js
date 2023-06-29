import React from 'react';
import {useState} from 'react'; // "useState" manage value that could be changed in the componant.
import axios from "axios";
import '../style.css';
import GetTodayWeather from './getTodayWeather';
import GetTodayTime from './getMaxMin';
import GetForcast from './getForcast';
import GetWeekWeather from './getWeekWeather';

export default function GetApi(){
    
    const API_KEY = '2de645da3d179f6103fa573ecaaf89dd'; // api key

    const [location, setLocation] = useState(''); 
    // Create function "setLocation" operated by variable "location" using "useState".  
    const [result, setResult] = useState({}); 
    // Create function "setResult" operated by variable "result" using "useState". 

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`; // api url

    const searchWeather = async (e) => {  // Create the function operated by "e". 
                                            // You can search city and this function show you the city's weather.

        if(e.key === 'Enter'){  // If you press the enter key,
        try{  // this function run try.

            const data = await axios({  // This function makes variable "data".
            method: 'get',            // "data" has method that can get
            url: URL                  //  "url" that has varible "URL".

            }) // And
            console.log(data);
            setResult(data) // Run function "setResult" using variable "data".

        } catch (err){  // if there is any error,

            alert(err);   
            // alert err. By doing this, The error does not appear when the value is not set at first time.
        }

        }
    }
    
    return(
        <div className='mainContainer'>
            <div className='searchContainer'>
                <input
                className='search' 
                placeholder='Cities'
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                // If you enter a value, onChange show you value of "setLocation" in the input. 
                
                type='text'
                onKeyDown={searchWeather} 
                // If you press the enter key, run the function "searchWeather"
                />
            </div>
            <div className='resultContainer'>
                {   
                Object.keys(result).length !== 0 &&( 
                // If this condition is true, it will display the following HTML elements.
                // In condition, result is the variable to run function "setResult", 
                // and result equal to the variable "data".
                // Anyway, If length(size) of keys of data is not 0, run HTML elements.
                <GetTodayWeather
                    name={result.data.name}
                    temp={Math.round((result.data.main.temp - 273.15)*10)/10}
                    sky={result.data.weather[0].main}
                />
                )}
                {   
                Object.keys(result).length !== 0 &&( 
                <GetTodayTime 
                    maxtemp={Math.round((result.data.main.temp_max - 273.15)*10)/10}
                    mintemp={Math.round((result.data.main.temp_min - 273.15)*10)/10}
                />
                )}
                {   
                Object.keys(result).length !== 0 &&( 
                    <GetForcast
                    feelsLike={Math.round((result.data.main.feels_like - 273.15)*10)/10}       
                    humidity={result.data.main.humidity}
                    pressure={result.data.main.pressure}
                    />
                )}
                {   
                Object.keys(result).length !== 0 &&( 
                    <GetWeekWeather/>
                )}
            </div>
        </div>
    );
}