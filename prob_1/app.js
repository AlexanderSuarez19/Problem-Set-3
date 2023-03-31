//Element selectors
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const currentHours = document.getElementsByClassName("currHours");
const lastWeekHours = document.getElementsByClassName("lastWeekHours");
let interval = "weekly"; //Set the initial value for the interval value, this are the options that will display different hours.

const fetchTime = () => {
  //Function to fecth the information.
  fetch(
    "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json"
  )
    .then((res) => res.json()) //Get the information in JSON format.
    .then((userHorus) => addInfo(userHorus)) //Send the info to the function addInfo
    .catch((error) => console.error(error)); //Error handling.
};

//Event listener for the intervals "daily", "weekly" and "monthly"
daily.addEventListener("click", () => {
  //When the element is clicked
  interval = "daily"; //Change the value of the interval variable to daily
  daily.style.color = "white"; //Change the color of the word daily to white
  weekly.style.color = "rgba(255, 255, 255, 0.438)"; //Change the opacity of the other two elements, "weekly" and "monthly"
  monthly.style.color = "rgba(255, 255, 255, 0.438)";
  fetchTime(); //Run the fetch function to get the information.
});

//Same as the daily event listener, but this change the variable interval to "weekly", set the color of "weekly" to white and change the opacity of "daily" and "monthly"
weekly.addEventListener("click", () => {
  interval = "weekly";
  daily.style.color = "rgba(255, 255, 255, 0.438)";
  weekly.style.color = "white";
  monthly.style.color = "rgba(255, 255, 255, 0.438)";
  fetchTime();
});

//Same as the daily event listener, but this change the variable interval to "monthly", set the color of "monthly" to white and change the opacity of "daily" and "weekly"
monthly.addEventListener("click", () => {
  interval = "monthly";
  daily.style.color = "rgba(255, 255, 255, 0.438)";
  weekly.style.color = "rgba(255, 255, 255, 0.438)";
  monthly.style.color = "white";
  fetchTime();
});

//Function to set the hours depending on the interval.
function addInfo(userHours) {
  for (let i = 0; i < 6; i++) {
    //Because we have 6 squares to fill, run a for loop of 6 iterations
    //Each iteration check the value of interval

    if (interval === "daily") {
      //If the value of interval is daily
      currentHours[i].innerHTML = userHours[i].timeframes.daily.current + "hrs"; //Set in the 6 squares the values of the current hours from the daily object.
      lastWeekHours[i].innerHTML =
        "Yesteday - " + userHours[i].timeframes.daily.previous + "hrs"; //Also, set in the 6 squares the values of the previous day from the daily object.
    }
    //If the value of interval is weekly
    if (interval === "weekly") {
      currentHours[i].innerHTML =
        userHours[i].timeframes.weekly.current + "hrs"; //Set in the 6 squares the values of the current hours from the weekly object.
      lastWeekHours[i].innerHTML =
        "Last week - " + userHours[i].timeframes.weekly.previous + "hrs"; //Also, set in the 6 squares the values of the previous week from the weekly object.
    }
    //If the value of interval is monthly
    if (interval === "monthly") {
      currentHours[i].innerHTML =
        userHours[i].timeframes.monthly.current + "hrs"; //Set in the 6 squares the values of the current hours from the monthly object.
      lastWeekHours[i].innerHTML =
        "Last month - " + userHours[i].timeframes.monthly.previous + "hrs"; //Also, set in the 6 squares the values of the previous month from the monthly object.
    }
  }
}

fetchTime(); //Run the fetch function when the page loads, so the page will load the values of the weekly interval.
