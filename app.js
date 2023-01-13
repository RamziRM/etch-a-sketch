// Creating 16x16 grid

let gridCont = document.getElementById('container');

gridCont.style.display = 'flex';
gridCont.style.flexWrap = 'wrap';

// Loop to create 256 div -- grid
for (var i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.style.width = '10px';
    gridBox.style.height = '10px';

    gridCont.appendChildÎ(gridBox);
}