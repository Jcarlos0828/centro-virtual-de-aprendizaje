$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta1"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar1").style.background='#F20D0D';
        document.getElementById("button Verificar1").style.border='#000000';
        document.getElementById("button Verificar1").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar1").style.background='#28D81C';
        document.getElementById("button Verificar1").style.border='#000000';
        document.getElementById("button Verificar1").value='Correcto';
    }
});

$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta2"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar2").style.background='#F20D0D';
        document.getElementById("button Verificar2").style.border='#000000';
        document.getElementById("button Verificar2").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar2").style.background='#28D81C';
        document.getElementById("button Verificar2").style.border='#000000';
        document.getElementById("button Verificar2").value='Correcto';
    }
});

$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta3"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar3").style.background='#F20D0D';
        document.getElementById("button Verificar3").style.border='#000000';
        document.getElementById("button Verificar3").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar3").style.background='#28D81C';
        document.getElementById("button Verificar3").style.border='#000000';
        document.getElementById("button Verificar3").value='Correcto';
    }
});

$('input[name="pregunta_4"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta4"][type="radio"]:checked').val();

    let correctas = $('input[name="respuesta4"][type="checkbox"][value="correct"]').toArray().length;
    let res_cor = $('input[name="respuesta4"][type="checkbox"][value="correct"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta4"][type="checkbox"][value="incorrect"]:checked').toArray().length;
    if(res_incor > 0){
        document.getElementById("button Verificar4").style.background='#F20D0D';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Elegiste una opción incorrecta';
    }else if(res_cor !== correctas && res_cor > 0){
        document.getElementById("button Verificar4").style.background='#F20D0D';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Existen más opciones correctas';
    } else {
        document.getElementById("button Verificar4").style.background='#28D81C';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Correcto';
    }
});