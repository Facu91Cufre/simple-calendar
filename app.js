const weekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
const currentDate = today.getDate();
const currentDay = today.getDay();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
console.log(currentYear);

date.innerHTML = currentDate;
day.innerHTML = weekDays[currentDay];
month.innerHTML = months[currentMonth];
year.innerHTML = currentYear;

if (currentDate < 10) {
  date.innerHTML = `0${currentDate}`;
}
