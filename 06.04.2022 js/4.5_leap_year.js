const isLeapYear = (year) => {
    if( (year%4 === 0 && year%100 !== 0) || year%400===0 )
        console.log(`${year} is indeed a leap year.`);
    else{
        console.log(`${year} This is not a leap year.`);
    }    
}
isLeapYear(2000);
isLeapYear(2004);
isLeapYear(2100);
isLeapYear(2005);