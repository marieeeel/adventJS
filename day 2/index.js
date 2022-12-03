const year = 2022
const holidays = ['01/06', '04/01', '12/25'] 

function countHours(year, holidays) {
  let hours = 0;
  holidays.forEach(holiday => {
    const date = new Date(`${holiday}/${year}`);
    if (date.getDay() !== 0 && date.getDay() !== 6)
     hours += 2;
 });
 return hours;
};

console.log(countHours(year, holidays))
