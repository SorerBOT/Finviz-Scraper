function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return [date.getFullYear(), 
       (month > 9 ? '' : '0') + month,
       (day > 9 ? '' : '0') + day
    ].join('');
}

export default formatDate;