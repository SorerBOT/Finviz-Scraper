/**
 * 
 * @param {Date} currentDate 
 */

function getLastSunday(currentDate) {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - newDate.getDay());

    return newDate.toISOString().substring(0, 10);
}

export default getLastSunday;