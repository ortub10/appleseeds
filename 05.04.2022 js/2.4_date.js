const date =function(dateStr){
    const d = new Date(dateStr);
    let dayName = d.toLocaleDateString( "en-US", { weekday: 'long' });
    let dayOfMonth = d.getDate();
    let monthMane = d.toLocaleString("en-US", { month: "long" });
    let year = d.getFullYear();

    return `Today is ${dayName} the ${dayOfMonth} of ${monthMane}, ${year}`
};

let dateStr = "2/25/2021";
console.log(date(dateStr));
