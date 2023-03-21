/**
 * 
 * @returns {newDate} the Date of last sunday 
 */

function getLastSunday() {
    const currentDate = new Date();
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - newDate.getDay());

    return newDate.toISOString().substring(0, 10);
}

export default getLastSunday;