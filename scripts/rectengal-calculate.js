function calculateRectangalArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const width = rectangleWidth.value ;
    const rectangleLength = document.getElementById('rectangle-length');
    const length= rectangleLength.value;
    const area = width * length;
    const rectangleSpan= document.getElementById('rectangle-span');
    rectangleSpan.innerText = area;
}