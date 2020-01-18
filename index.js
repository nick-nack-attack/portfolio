function checkTime() {
    const now = new Date().getHours();
    determineTime(now);
}

function determineTime(now) {
    console.log(now);
    if (21 < now && now <= 24) {
        $('#period-of-day').text('Night');
    } else if (0 < now && now <= 4) {
        $('#period-of-day').text('Night');
    } else if (4 < now && now <= 12 ) {
        $('#period-of-day').text('Morning');
    } else if (12 < now && now <= 18) {
        $('#period-of-day').text('Afternoon');
    } else if (18 < now && now <= 21) {
        $('#period-of-day').text('Evening');
    } else {
        $('#period-of-day').text('Day!');
    }
}

function runPage() {
    checkTime()
}

runPage();