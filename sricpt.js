let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let daysHand = document.querySelector(".days");
let monthHand = document.querySelector(".month");
let dateHand = document.querySelector(".date");

let clock = function () {
  let currentDate = new Date();

  let getHour = currentDate.getHours() % 12 || 12;
  let getMin = currentDate.getMinutes() % 12 || 12;
  let getSec = currentDate.getSeconds() % 12 || 12;
  const ampm = getHour <= 12 ? "pm" : "am";

  //
//   let getDays = currentDate.getDay();

//   let getMonth = currentDate.getMonth();

//   let getDates = currentDate.getDate();

  hourHand.textContent = `${getHour}${ampm}`;
  minHand.textContent = `${getMin}min`;
  secHand.textContent = `${getSec}sec`;

  //   dateHand.textContent = `${getDays}`;
  //   monthHand.textContent = `${getMonth}`;
  //   dateHand.textContent = `${getDates}`;
};
setInterval(clock, 1000);
