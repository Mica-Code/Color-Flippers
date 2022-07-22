const rgb = [];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{

    for(let i = 0; i < 256; i++){
        rgb.push(i);
    }

    random = `rgb(${randomColor()},${randomColor()},${randomColor()})`;

    document.body.style.backgroundColor = random;
    color.textContent = random;
    
});

function randomColor(){
    return rgb[Math.floor(Math.random() * rgb.length)];
}


// const res = Array.from({length: 226}, _ => Math.floor(Math.random()*256))
// console.log(res);

// let colors = new Array(3).map((v) => Math.floor(Math.random()*256));
// console.log(colors);