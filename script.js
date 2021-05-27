// settings
// list of background-color
const backgroundColorList = [ "#5f6368", "#1a73e8", "#d93025", "#e37400", "#1e8e3e", "#d01884", "#9334e6", "#007b83" ]


// set functions which work when body(background) is clicked

function setFocusOnTextarea() {
    document.getElementById("title").focus();
}

const body = document.querySelector('body');

body.addEventListener('click', setFocusOnTextarea);
body.addEventListener(
    'click',
    function() {
        body.classList.add("first-clicked");
        const rand = Math.floor(Math.random() * 8);
        if ( rand === 8 ) {
            rand = 7;
        }
        body.style.backgroundColor = backgroundColorList[rand];
    },
    { once: true }
);

// set colors on color pallet
const color_pallet = document.querySelector("ul");

function toggleColorPallet() {
    const is_open_check = document.querySelector("input[name='button_toggle']");
    if (is_open_check.checked) {
        color_pallet.style.opacity = "0";
        setTimeout(function(){color_pallet.style.visibility = 'hidden';}, 400);
    } else {
        color_pallet.style.visibility = "visible";
        color_pallet.style.opacity = "1";
    }
    is_open_check.checked = !is_open_check.checked;
}

for (var i = 0; i < color_pallet.children.length; i++) {
    color_pallet.children[i].style.backgroundColor = backgroundColorList[i];
    color_pallet.children[i].addEventListener(
        'click',
        function() {
            body.style.backgroundColor = this.style.backgroundColor;
            toggleColorPallet();
        }
    );
}

// set a function for selection of colors

const color_toggle_button = document.getElementById("bg_color_change");

color_toggle_button.addEventListener('click', toggleColorPallet);


// set a function for question and answer which work when the application name is hovered
const qa_target = document.getElementById("hover_qa");

qa_target.addEventListener(
    'mouseover',
    function() {
        const qa_window = document.querySelector("dl");
        qa_window.style.opacity = "1";
    }
)
qa_target.addEventListener(
    'mouseout',
    function() {
        const qa_window = document.querySelector("dl");
        qa_window.style.opacity = "0";
    }
)

// other

function setHeightOfTextarea(target) {
    if(target.scrollHeight > target.offsetHeight) {
        target.style.height = target.scrollHeight + "px";
    } else {
        target.style.height = 10 + "px";
        var height, lineHeight;
        height = Number(target.style.height.split("px")[0]);
        lineHeight = Number(target.style.lineHeight.split("px")[0]);
        target.style.height = height - lineHeight + "px";
        setHeightOfTextarea(target);
    }
}