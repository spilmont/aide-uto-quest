
var x=0;
var y=0;




function deplacement(e) {



    switch (e.which) {



        case 38: //haut

            document.getElementById('dd').style.top = y-- +"px" ;
            if(y <1){
                y=0;
            }
            break;


        case 40: // bas
            document.getElementById('dd').style.top = y++ +"px";
            if(y>539){
                y=540;
            }
            break;

        case 37: //gauche
            document.getElementById('dd').style.left = x-- +"px";
            if(x <1){
                x=0;
            }
            break;
        case 39 :   // droite;
            document.getElementById('dd').style.left = x++ +"px";
            if(x >539){
                x=540;
            }
            break;

    }
}

document.body.addEventListener("keydown", deplacement);






