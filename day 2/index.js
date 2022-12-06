const year = 2022
const holidays = ['01/06', '04/01', '12/25'] 

function countHours(year, holidays) {
  return holidays.reduce((hours, holiday) => {
    const day = new Date(`${holiday}/${year}`).getDay();
    return day !== 0 && day !== 6 ? hours + 2 : hours;
  }, 0);
}

console.log(countHours(year, holidays))

