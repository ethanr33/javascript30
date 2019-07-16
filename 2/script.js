
window.onload = () => {

  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  let tickClock = () => {
    let date = new Date();

    secondHand.setAttribute("style", `transform: rotate(${date.getSeconds() * 6 + 90}deg);`);
    minuteHand.setAttribute("style", `transform: rotate(${(date.getMinutes() + date.getSeconds()/60) * 6 + 90}deg);`);
    hourHand.setAttribute("style", `transform: rotate(${(date.getHours() + date.getMinutes()/60 + date.getSeconds()/3600) + 90}deg);`);
  }

  tickClock();

  setInterval(() => {
    tickClock();
  }, 100);

};
