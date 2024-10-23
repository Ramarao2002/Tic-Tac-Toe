let currentplayer='O';
let checkgame="working";
let c0=true;
let c1=true;
let c2=true;
let c3=true;
let c4=true;
let c5=true;
let c6=true;
let c7=true;
let c8=true;


function myfun0(){
    if(checkgame=="working" && c0==true){

        if(currentplayer=='X'){
            document.getElementById("cell0").innerHTML="O";
            currentplayer="O";
            c0=false;
        }
        else{
            document.getElementById("cell0").innerHTML="X";
            currentplayer="X";
            c0=false;
    
        }
        checkwin()

    }
    
    
    
}
function myfun1(){

    if(checkgame=="working" && c1==true){

    if(currentplayer=='X'){
            document.getElementById("cell1").innerHTML="O";
            currentplayer="O";
            c1=false;
        }
        else{
            document.getElementById("cell1").innerHTML="X";
            currentplayer="X";
            c1=false
    
        }
        checkwin()
    }
    
    
}
function myfun2(){
    if(checkgame=="working" && c2==true){

    if(currentplayer=='X'){
            document.getElementById("cell2").innerHTML="O";
            currentplayer="O";
            c2=false;
        }
        else{
            document.getElementById("cell2").innerHTML="X";
            currentplayer="X";
            c2=false;
    
        }
        checkwin()
    }
    
}
function myfun3(){
    if(checkgame=="working"  && c3==true){

    if(currentplayer=='X'){
            document.getElementById("cell3").innerHTML="O";
            currentplayer="O";
            c3=false;
        }
        else{
            document.getElementById("cell3").innerHTML="X";
            currentplayer="X";
            c3=false;
    
        }
        checkwin()
    }
    
}
function myfun4(){
    if(checkgame=="working" && c4==true){

    if(currentplayer=='X'){
            document.getElementById("cell4").innerHTML="O";
            currentplayer="O";
            c4=false;
        }
        else{
            document.getElementById("cell4").innerHTML="X";
            currentplayer="X";
            c4=false;
    
        }
        checkwin()
    }
    
}
function myfun5(){
    if(checkgame=="working"  && c5==true){
   
            if(currentplayer=='X'){
                document.getElementById("cell5").innerHTML="O";
                currentplayer="O";
                c5=false;
            }
            else{
                document.getElementById("cell5").innerHTML="X";
                currentplayer="X";
                c5=false;
        
            }
            checkwin()
        }
        
}
function myfun6(){
    if(checkgame=="working"  && c6==true){

    if(currentplayer=='X'){
            document.getElementById("cell6").innerHTML="O";
            currentplayer="O";
            c6=false;
        }
        else{
            document.getElementById("cell6").innerHTML="X";
            currentplayer="X";
            c6=false;
    
        }
        checkwin()
    }
    
}
function myfun7(){
    if(checkgame=="working"  && c7==true){

    if(currentplayer=='X'){
            document.getElementById("cell7").innerHTML="O";
            currentplayer="O";
            c7=false;
        }
        else{
            document.getElementById("cell7").innerHTML="X";
            currentplayer="X";
            c7=false;
    
        }
        checkwin()
    }
    
}

function myfun8(){
    if(checkgame=="working"  && c8==true){

    if(currentplayer=='X'){
            document.getElementById("cell8").innerHTML="O";
            currentplayer="O";
            c8=false;
        }
        else{
            document.getElementById("cell8").innerHTML="X";
            currentplayer="X";
            c8=false;
    
        }
        checkwin()
    }
    
    
}

function ResetAll(){
   window.location="index.html";
}



function checkwin(){

    let a= document.getElementById("cell0").innerHTML
    let b= document.getElementById("cell1").innerHTML
    let c= document.getElementById("cell2").innerHTML
    let d= document.getElementById("cell3").innerHTML
    let e= document.getElementById("cell4").innerHTML
    let f= document.getElementById("cell5").innerHTML
    let g= document.getElementById("cell6").innerHTML
    let h= document.getElementById("cell7").innerHTML
    let i= document.getElementById("cell8").innerHTML

    if(currentplayer==a && currentplayer==b && currentplayer==c){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
        
    }
    else if(currentplayer==d && currentplayer==e && currentplayer==f){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
    else if(currentplayer==g && currentplayer==h && currentplayer==i){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
    else if(currentplayer==a && currentplayer==d && currentplayer==g){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
    else if(currentplayer==b && currentplayer==e && currentplayer==h){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
    else if(currentplayer==c && currentplayer==f && currentplayer==i){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
    else if(currentplayer==a && currentplayer==e && currentplayer==i){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
    else if(currentplayer==c && currentplayer==e && currentplayer==g){
        document.getElementById("result").innerHTML=currentplayer+" is winner";
        checkgame="notworking";
    }
   else if ((a == 'X' || a == 'O') && (b == 'X' || b == 'O') && (c == 'X' || c== 'O') &&
    (d == 'X' || d == 'O') && (e == 'X' || e == 'O') && (f == 'X' || f == 'O') &&
    (g == 'X' || g == 'O') && (h == 'X' ||h == 'O') && (i == 'X' || i == 'O')){
            document.getElementById("result").innerHTML="It's Draw";
    }
 
}