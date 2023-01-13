// Creating 16x16 grid

let gridCont = document.getElementById('container');

const colors = ['#073b4c', '#ffd166', '#118ab2', '#05c793', '#002408', '#f3854a', 'b8293d', '#de3700']
//['red', 'blue', 'green', 'yellow', 'purple', 'baby-blue']

// Loop to create 256 div -- grid
for (var i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('box');
    gridCont.appendChild(gridBox);

    gridBox.addEventListener('mouseover', () => {
        let randomColor = colors[Math.floor(Math.random()*colors.length)]
        gridBox.style.backgroundColor = randomColor;
        setTimeout(() => {
            gridBox.style.backgroundColor = 'white';
        }, 5000);
    });
}

