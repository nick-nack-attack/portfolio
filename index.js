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

/*

<h2> My Work </h2>
<div class="showcase_1">
    <div class="showcase_images"></div>
    <img class="primary_showcase_image side" src="images/pineapple_quiz_screenshot_2.jpg"
        alt="answering a question correctly in the pineapple quiz">
    <img class="primary_showcase_image" src="images/pineapple_quiz_screenshot_1.jpg"
        alt="the first question of the pineapple quiz">
    <img class="primary_showcase_image side" src="images/pineapple_quiz_screenshot_3.jpg"
        alt="answering a question incorrectly in the pineapple quiz">
    <img class="secondary_showcase_image" src="images/pineapple_quiz_asset_1.jpg"
        alt="pineapple afraid of being cut up and put on a steak">
    <img class="secondary_showcase_image" src="images/pineapple_quiz_asset_2.jpg"
        alt="a perplexed pineapple on top of three pineapples">
    <img class="secondary_showcase_image" src="images/pineapple_quiz_asset_3.jpg"
        alt="a pineapple exploding">
</div>

<p class="showcase_captions">2020</p>
<h3>The Finest Pineapple Quiz</h3>
<p class="showcase_captions showcase_captions_bottom"><i class="fab fa-html5"></i> HTML <i
        class="fab fa-css3-alt"></i> CSS <i class="fab fa-js-square"></i> Javascript</p>
<p class="item_description">This quiz tests your knowledge of pineapples. It is administered by a
    loquacious pineapple. However incorrigible this fruit is, nay we forget its indescribable
    deliciousness. Assignment for Thinkful Bootcamp.</p>

<div class="showcase_item_buttons_bar">
    <button id="pineapple_live_link" class="showcase_button"
        onclick="window.open('https://nick-nack-attack.github.io/final-pineapple-quiz/','_blank')">Play
        the
        quiz</button>
    <button id="pineapple_git_link" class="showcase_button"
        onclick="window.open('https://github.com/nick-nack-attack/final-pineapple-quiz.git','_blank')">View
        on
        github</button>
</div>
</div>

*/