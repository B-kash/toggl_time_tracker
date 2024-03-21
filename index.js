const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTimeToDays(hours, minutes, seconds, hoursInDay) {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const secondsInDay = hoursInDay * 3600;
    console.log(`Total seconds: ${totalSeconds}, seconds in a day: ${secondsInDay}`)
    const days = totalSeconds / secondsInDay;
    return days;
}

rl.question('Enter the time (hours:minutes:seconds): ', (timeInput) => {
    const eachComponents = timeInput.split(',');
    let totalHours = 0, totalMinutes = 0, totalSeconds = 0;
    eachComponents.forEach((component) => {
        const timeComponents = component.split(':').map(Number);
        totalHours += timeComponents[0];
        totalMinutes += timeComponents[1];
        totalSeconds += timeComponents[2];
    });

    console.log(`Time entered: ${totalHours} hours, ${totalMinutes} minutes, ${totalSeconds} seconds.`)

    rl.question('Enter the number of hours in a day: ', (hoursInDayInput) => {
        const hoursInDay = parseInt(hoursInDayInput || 7.6);

        const days = convertTimeToDays(totalHours, totalMinutes, totalSeconds, hoursInDay);
        console.log(`The time entered is approximately ${days.toFixed(3)} days.`);

        rl.close();
    });
});