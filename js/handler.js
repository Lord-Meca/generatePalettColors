
/* PUBLIC VARIABLES*/

let boxesColorsVisible = false;

//---------------------------------

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return ''+[(c>>16)&255].join(',')+"";
    }
    throw new Error('Bad Hex');
}

function RgbaToHex(orig) {
    var a, isPercent,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
  
    if (alpha !== "") { a = alpha; }
    else { a = 01; }
    hex = hex + a;
  
    return hex;
}

function validHex() {

    var reg=/^#([0-9a-f]{3}){1,2}$/i;

    var input = document.getElementById("hexInput").value;

    if(reg.test(input)){

        const r = Math.floor(200 * Math.random()) + 30;
        const g = Math.floor(200 * Math.random()) + 30;
        const b = Math.floor(200 * Math.random()) + 30;
        return `rgb(`+hexToRgbA(input)+`, ${g}, ${b})`;

    } else {
        document.querySelector(".output").style.display = "block";
        setTimeout(() => {
            document.querySelector(".output").style.display = "none";
        }, 1000);

        return 0;
    }

  
}

function generate(){

    var firstHex = validHex();
    var firstHexContent = "ㅤㅤ#" + RgbaToHex(firstHex);

    document.querySelector(".first").style.background = firstHex;
    document.querySelector(".first-hexa").textContent = firstHexContent.replace("1", "");

    var secondHex = validHex();
    var secondHexContent = "ㅤㅤ#" + RgbaToHex(secondHex);

    document.querySelector(".second").style.background = validHex();
    document.querySelector(".second-hexa").textContent = secondHexContent.replace("1", "");

    var thirdHex = validHex();
    var thirdHexContent = "ㅤㅤ#" + RgbaToHex(thirdHex);

    document.querySelector(".third").style.background = validHex();
    document.querySelector(".third-hexa").textContent = thirdHexContent.replace("1", "");


    var input = document.getElementById("hexInput").value;

    document.querySelector(".original").style.backgroundColor = input;

    showBoxesColors();
}



function showBoxesColors(){

    const boxesColors = document.getElementById("boxesColorsId");

    boxesColors.classList.add("show-boxes-colors");
    boxesColorsVisible = true;

}

setInterval(() => {

    if(!boxesColorsVisible){
        document.getElementById("boxesColorsId").style.opacity = 0;
    } else {
        document.getElementById("boxesColorsId").style.opacity = 1;
    }

  

}, 1);