
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

    document.querySelector(".first").style.background = validHex();
    document.querySelector(".second").style.background = validHex();
    document.querySelector(".third").style.background = validHex();

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