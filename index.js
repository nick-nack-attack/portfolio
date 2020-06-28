'use strict'

// check the current user time to get greeting
function checkTime() {
    const now = new Date().getHours();
    determineTime(now);
};

// func to find out the time is in 24 hr day (i.e. '17' is '5:00pm')
// use this to determine proper greeting to use
function determineTime(now) {
    if (21 < now && now <= 24) {
        $('#period-of-day').text('Night');
    } else if (0 < now && now <= 4) {
        $('#period-of-day').text('Night');
    } else if (4 < now && now <= 12) {
        $('#period-of-day').text('Morning');
    } else if (12 < now && now <= 18) {
        $('#period-of-day').text('Afternoon');
    } else if (18 < now && now <= 21) {
        $('#period-of-day').text('Evening');
    } else {
        $('#period-of-day').text('Day!');
    }
};

// fun to generate project showcase image
function generateImage(img) { 
    return `
        <img 
            class="${img.class}" 
            src="${img.src}" 
            alt="${img.alt}"
        >`
};

// function to map through each tech used on a project
function generateTechUsed(array) {
    return array
        .map(tech => `<span class="tech-label">${tech}</span>` )
        .join(' ')
        
};

// created func to generate all buttons attached to a project
function generateButtons(array) {
    return array    
        .map(btn =>
            `
                <button
                    class="showcase-button"
                    onclick="window.open('${btn.link}','_blank')"
                >
                    ${btn.title}
                </button>
            `    
        )
        .join(' ')
};

// map through STORE and create each project showcase
function generateShowcase(array) {
    return array.map(project => 
        `
            <div id="${project.showcaseImage.id}" class="showcase">
                <div class="hero_image ${project.showcaseImage.id}">
                    ${generateImage(project.showcaseImage)}
                </div>
                <div class="showcase_content">
                    <div class="title_tech">
                        <h2 class="project_title">
                            ${project.titleOfProject}
                        </h2>
                        <p class="year-created">
                            ${project.yearCreated}
                        </p>
                        <div class="tech-used-div">
                            ${generateTechUsed(project.techUsed)}
                        </div>
                    </div>
                    <div class="desc_buttons">
                        <p class="item-description">
                            ${project.description}
                        </p>
                        <div class="button-div">
                            ${generateButtons(project.buttons)}
                    </div>
                    </div>
                </div>
            </div>
        `
    );
};

// make each project within the STORE
function setShowcase() {
    $('#projects-area').append(generateShowcase(STORE));
};

// Get the header
let myWorkHeader = document.getElementById("myWorkNav");
const sg = document.getElementById("SG");
const tc = document.getElementById("TC"); 
const rm = document.getElementById("RM");
const pq = document.getElementById("PQ"); 

$("#PQ").click(function() {
    $('html, body').animate({
        scrollTop: $("#hero_pq").offset().top
    }, 2000);
    $("#PQ").addClass("active");
});

$("#RM").click(function() {
    $('html, body').animate({
        scrollTop: $("#hero_rm").offset().top
    }, 2000);
});

$("#TC").click(function() {
    $('html, body').animate({
        scrollTop: $("#hero_tc").offset().top
    }, 2000);
});

$("#SG").click(function() {
    $('html, body').animate({
        scrollTop: $("#hero_sg").offset().top
    }, 2000);
    $("#sg_li").addClass("active");
});

$(window).on("scroll", function() {

    let currentPos = $(window).scrollTop();

    $('.nav li a').each(function() {

        let sectionLink = $(this);
        let section = $(sectionLink.attr('href'));
        let svgLink = $(this);

            // if the top of the section is less than the current position
            // or if the top of the link plus the section height is more than the current 
        // if (section.position().top <= currentPos && sectionLink.offset().top + section.height() >= currentPos) {
            if (section.position().top <= currentPos && section.position().top + section.height() >= currentPos) {
            // $('.nav li').removeClass('active');
            sectionLink.addClass('active');
            sectionLink.children().addClass('active')
        } else {
            sectionLink.removeClass('active');
            sectionLink.children().removeClass('active')
        }
    })

})

// Get the offset position of the navbar
let sticky = myWorkHeader.offsetTop;

function handleMenu() {
    if ( window.pageYOffset > sg_div ) {
        sg.classList.add("active")
      } else if ( window.pageYOffset > tc_div ) {
          tc.classList.add("active")
      } else if ( window.pageYOffset > rm_div ) {
        rm.classList.add("active")
    } else if ( window.pageYOffset > pq_div ) {
        pq.classList.add("active")
    } else ('');
}

// Add the sticky class to the header when you reach its 
// scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        myWorkHeader.classList.add("sticky");
    } else {
        myWorkHeader.classList.remove("sticky");
    }
  }

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document
        .documentElement
        .setAttribute(
            'data-theme', 
            currentTheme
        );
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
};

function switchTheme(e) {
    if (e.target.checked) {
        document
            .documentElement
            .setAttribute(
                'data-theme', 'dark'
            );
            localStorage.setItem('theme', 'dark');
            $('button').addClass('dark-button');
            $('body').addClass('dark-mode');
            $('a').addClass('dark')
            $('.tech-label').addClass('dark-label')
    }
    else {
        document
            .documentElement
            .setAttribute(
                'data-theme', 'light'
            );
            localStorage.setItem('theme', 'light');
            $('button').removeClass('dark-button');
            $('body').removeClass('dark-mode');
            $('a').removeClass('dark')
            $('.tech-label').removeClass('dark-label')
    }
};

toggleSwitch.addEventListener('change', switchTheme, false);




// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myFunction();
};

function runPage() {
    checkTime();
    setShowcase();
}

runPage();