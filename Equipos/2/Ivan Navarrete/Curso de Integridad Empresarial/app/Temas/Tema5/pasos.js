var paso1= 1;
var paso2=1;
var paso3=1;
var paso5=1;
var paso7=1;
var locked = false;
function Paso1Der() {
    if (!locked && paso1<2) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso1-"+paso1);
        paso1= paso1+1;
        var y = document.getElementById("content-Paso1-"+paso1);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonIsq1");
        flecha.style.display="block";
        if(paso1==2){
          var flecha=document.getElementById("buttonDer1");
          flecha.style.display="none";
        }
    }
    
}
  function Paso1Isq() {
    if (!locked && paso1>1) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso1-"+paso1);
        paso1= paso1-1;
        var y = document.getElementById("content-Paso1-"+paso1);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonDer1");
        flecha.style.display="block";
        if(paso1==1){
          var flecha=document.getElementById("buttonIsq1");
          flecha.style.display="none";
        }
        
    }
  }

  function Paso2Der() {
    if (!locked && paso2<2) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso2-"+paso2);
        paso2= paso2+1;
        var y = document.getElementById("content-Paso2-"+paso2);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonIsq2");
        flecha.style.display="block";
        if(paso2==2){
          var flecha=document.getElementById("buttonDer2");
          flecha.style.display="none";
        }
    }
    
}
  function Paso2Isq() {
    if (!locked && paso2>1) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso2-"+paso2);
        paso2= paso2-1;
        var y = document.getElementById("content-Paso2-"+paso2);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonDer2");
        flecha.style.display="block";
        if(paso2==1){
          var flecha=document.getElementById("buttonIsq2");
          flecha.style.display="none";
        }
        
    }
  }

  function Paso3Der() {
    if (!locked && paso3<4) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso3-"+paso3);
        paso3= paso3+1;
        var y = document.getElementById("content-Paso3-"+paso3);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonIsq3");
        flecha.style.display="block";
        if(paso3==4){
          var flecha=document.getElementById("buttonDer3");
          flecha.style.display="none";
        }
    }
    
}
  function Paso3Isq() {
    if (!locked && paso3>1) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso3-"+paso3);
        paso3= paso3-1;
        var y = document.getElementById("content-Paso3-"+paso3);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonDer3");
        flecha.style.display="block";
        if(paso3==1){
          var flecha=document.getElementById("buttonIsq3");
          flecha.style.display="none";
        }
    }
    
  }
  function Paso5Der() {
    if (!locked && paso5<11) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso5-"+paso5);
        paso5= paso5+1;
        var y = document.getElementById("content-Paso5-"+paso5);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonIsq5");
        flecha.style.display="block";
        if(paso5==11){
          var flecha=document.getElementById("buttonDer5");
          flecha.style.display="none";
        }
    }
    
}
  function Paso5Isq() {
    if (!locked && paso5>1) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso5-"+paso5);
        paso5= paso5-1;
        var y = document.getElementById("content-Paso5-"+paso5);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonDer5");
        flecha.style.display="block";
        if(paso5==1){
          var flecha=document.getElementById("buttonIsq5");
          flecha.style.display="none";
        }
    }
    
  }
  function Paso7Der() {
    if (!locked && paso7<2) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso7-"+paso7);
        paso7= paso7+1;
        var y = document.getElementById("content-Paso7-"+paso7);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonIsq7");
        flecha.style.display="block";
        if(paso7==2){
          var flecha=document.getElementById("buttonDer7");
          flecha.style.display="none";
        }
    }
    
}
  function Paso7Isq() {
    if (!locked && paso7>1) {
        locked = true;
        setTimeout(unlock, 500);
        var x = document.getElementById("content-Paso7-"+paso7);
        paso7= paso7-1;
        var y = document.getElementById("content-Paso7-"+paso7);
        if (x.style.display === "none") {
        x.style.display = "block";
        
        } else {
        x.style.display = "none";
        y.style.display = "block";
        }
        var flecha=document.getElementById("buttonDer7");
        flecha.style.display="block";
        if(paso7==1){
          var flecha=document.getElementById("buttonIsq7");
          flecha.style.display="none";
        }
    }
    
  }
 
  function unlock () {
    locked = false;
}