/**
 * 
 * @param {Date} currentDate 
 */

function getLastSunday(currentDate) {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - newDate.getDay());

    return newDate;
}

const lastSunday = getLastSunday(new Date());

console.log(lastSunday.toISOString().substring(0, 10));