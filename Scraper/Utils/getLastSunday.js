/**
 * 
 * @param {Date} currentDate 
 */

function getLastSunday(currentDate) {
    currentDate.setDate(currentDate.getDate() - currentDate.getDay()) 
}