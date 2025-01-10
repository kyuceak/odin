const searchBtn = document.querySelector("#search-btn");

const loadingBar = document.querySelector("#loading-bar");

const delay = (ms) =>  new Promise((resolve) => setTimeout(resolve),ms);

const getWeatherData = async (city) => {

    try{
        loadingBar.classList.remove("visible");
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=L4L4A2L4THCVXYFEVL95E7492`,
            {
              mode: "cors",
            }
          );
        
          const weatherData = await response.json();
        
          await delay(5000);

          return weatherData;
    }catch(err){
        console.log("error fetching data:", err);
    }finally{
        loadingBar.classList.add("visible");
    }

};

searchBtn.addEventListener("click", async () => {
  const searchInput = document.getElementsByName("city")[0];

  const weatherData = await getWeatherData(searchInput.value);

  const dest_data = processData(weatherData);

  console.log(dest_data);

  updateUI(dest_data);



});

const processData = (data) => {
  console.log(data);

  /* description
    days[0]
    resolvedAddress
    currentConditions
    
    
    */
  const { resolvedAddress, description, currentConditions } = data;

  return { resolvedAddress, description, currentConditions };
};


const updateUI = (data) => {

    const h1 = document.querySelector("#h1");
    const h2 = document.querySelector("#h3");
    const p  = document.querySelector("#p");
    const hide = document.querySelector("#hide");
    

    h1.textContent = data.resolvedAddress;
    h2.textContent = `${data.currentConditions.temp}F`;
    p.textContent = data.description;

    hide.classList.remove("hidden");

}