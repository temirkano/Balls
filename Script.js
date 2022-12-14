let blocks = document.querySelectorAll('.block');

function generateRandomColor() {
    let x = Math.floor((Math.random() * 256));
    let y = Math.floor((Math.random() * 256));
    let z = Math.floor((Math.random() * 256));
    let color = `rgb(${x}, ${y}, ${z})`;
    return color
};
let color = generateRandomColor();



function changeBackground (event){
    console.log(event)
    let color = generateRandomColor();
    event.target.style.backgroundColor = color
}

blocks.forEach(function(block) {
    block.addEventListener('click', changeBackground)
})

