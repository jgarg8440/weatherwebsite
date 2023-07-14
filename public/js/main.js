const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText = `please write the name before search`;
        

    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=124daf6b3a64ceab0ab33f38d5f9bdb1`;
            const response = await fetch(url);
            const data = await response.json();
          const arrData = [data];
          city_name.innerText =`${arrData[0].name}`;
          temp.innerText = arrData[0].main.temp;
          temp_status.innerText = arrData[0].weather[0].main;
          if(tempMood == "Clear"){
            temp_status.innerHTML =
            "<i class ='fas fa-sun' style='color: #f1f2f6;'></i>";
        }else if(tempMood == "Clouds"){
            temp_status.innerHTML = 
            "<i class ='fas fa-clouds' style='color: #f1f2f6;'></i>";
          }else if(tempMood == "Rain"){
            temp_status.innerHTML = 
            "<i class ='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
          }else{
            temp_status.innerHTML = 
            "<i class ='fas fa-sun' style='color: #f1f2f6;'></i>";
          }

        }
        catch{
            city_name.innerText = `please enter the city name properly`;
        }
  
    }

}
submitBtn.addEventListener('click',getInfo);