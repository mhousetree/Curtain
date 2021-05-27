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
        const textarea = document.getElementById("title");
        const color_icon = document.getElementById("bg_color_change");
        const copyright = document.querySelector("small");
        textarea.classList.add("clicked");
        color_icon.style.filter = "invert(1)";
        copyright.style.color = "#ccc";
        const rand = Math.floor(Math.random() * 8);
        if ( rand === 8 ) {
            rand = 7;
        }
        body.style.backgroundColor = backgroundColorList[rand];
    },
    { once: true }
);

// set a function for question and answer when name is hovered
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