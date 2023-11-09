const titleElement = document.querySelector('.title');
const titleElement2 = document.querySelector('.title2');

const text = 'My Personal Projects !!';
const text2 = "305 426 5021";

const speed = 100;
const repeatInterval = 13000; 

function typeWriter(i, element, text, callback) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(i, element, text, callback), speed);
    } else if (callback) {
        callback();
    }
}

function startTypeWriter() {
    titleElement.innerHTML = '';
    titleElement2.innerHTML = '';
    typeWriter(0, titleElement, text, () => {
        typeWriter(0, titleElement2, text2);
    });
}


startTypeWriter();


setInterval(startTypeWriter, repeatInterval);
