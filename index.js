'use strict'

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

function getEachProjectShowcase() {
    const results =  [];
    for (let i=0; i<STORE.length; i++) {
        results.push(`
            <div class="showcase">
                    <img class="${STORE[i].showcaseImage[0]}" src="${STORE[i].showcaseImage[1]}" alt="${STORE[i].showcaseImage[2]}">
                    <p class="showcase_captions">${STORE[i].yearCreated}</p>
                <h3>${STORE[i].titleOfProject}</h3>
                    <p class="showcase_captions showcase_captions_bottom">${STORE[i].techUsed.map(item => `${item} `).join('')}</p>
                    <p class="item_description">${STORE[i].description}</p>
            <div class="showcase_item_buttons_bar">
                <button class="showcase_button" onclick="window.open('${STORE[i].liveLink}','_blank')">Live</button>
                <button class="showcase_button" onclick="window.open('${STORE[i].repoLink}','_blank')">View on github</button>
            </div>
            </div>
        `)
    }
    return results;
}

function generateShowcase() {
    $('#projects-area').append(getEachProjectShowcase().join(''))
}

function runPage() {
    checkTime()
    generateShowcase();
}

runPage();