// Preguntas tema 2-2.html

$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    // if (respuesta === "incorrect"){
    //     alert('Respuesta incorrecta');
    // }
    // event.preventDefault();
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
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    // let correctas = $('input[name="respuesta"][type="checkbox"][value="correct"]').toArray().length;
    // let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct"]:checked').toArray().length;
    // let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect"]:checked').toArray().length;
    // if(res_incor > 0){
    //     alert('Alguna respuesta incorrecta');
    // }else if(res_cor !== correctas && res_cor > 0){
    //     alert('Existen más opciones');
    // }
    // event.preventDefault();
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
    // let respuesta = parseFloat($('input[name="respuesta"][type="number"]').val());
    // // respuestaCorrecta es la respuesta
    // let respuestaCorrecta = 100.21;
    // let precision = 2;
    // if (respuesta.toFixed(precision) !== respuestaCorrecta.toFixed(precision) && !isNaN(respuesta)){
    //     alert('Respuesta incorrecta');
    // }
    // event.preventDefault();
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
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

// Preguntas tema 2-4.html

$('input[name="pregunta_4"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar4").style.background='#F20D0D';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar4").style.background='#28D81C';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Correcto';
    }
});

$('input[name="pregunta_5"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar5").style.background='#F20D0D';
        document.getElementById("button Verificar5").style.border='#000000';
        document.getElementById("button Verificar5").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar5").style.background='#28D81C';
        document.getElementById("button Verificar5").style.border='#000000';
        document.getElementById("button Verificar5").value='Correcto';
    }
});

// Preguntas tema 3-2.html

$('input[name="pregunta_6"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar6").style.background='#F20D0D';
        document.getElementById("button Verificar6").style.border='#000000';
        document.getElementById("button Verificar6").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar6").style.background='#28D81C';
        document.getElementById("button Verificar6").style.border='#000000';
        document.getElementById("button Verificar6").value='Correcto';
    }
});

$('input[name="pregunta_7"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar7").style.background='#F20D0D';
        document.getElementById("button Verificar7").style.border='#000000';
        document.getElementById("button Verificar7").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar7").style.background='#28D81C';
        document.getElementById("button Verificar7").style.border='#000000';
        document.getElementById("button Verificar7").value='Correcto';
    }
});

$('input[name="pregunta_8"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar8").style.background='#F20D0D';
        document.getElementById("button Verificar8").style.border='#000000';
        document.getElementById("button Verificar8").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar8").style.background='#28D81C';
        document.getElementById("button Verificar8").style.border='#000000';
        document.getElementById("button Verificar8").value='Correcto';
    }
});

$('input[name="pregunta_9"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar9").style.background='#F20D0D';
        document.getElementById("button Verificar9").style.border='#000000';
        document.getElementById("button Verificar9").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar9").style.background='#28D81C';
        document.getElementById("button Verificar9").style.border='#000000';
        document.getElementById("button Verificar9").value='Correcto';
    }
});

$('input[name="pregunta_10"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar10").style.background='#F20D0D';
        document.getElementById("button Verificar10").style.border='#000000';
        document.getElementById("button Verificar10").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar10").style.background='#28D81C';
        document.getElementById("button Verificar10").style.border='#000000';
        document.getElementById("button Verificar10").value='Correcto';
    }
});

$('input[name="pregunta_11"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar11").style.background='#F20D0D';
        document.getElementById("button Verificar11").style.border='#000000';
        document.getElementById("button Verificar11").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar11").style.background='#28D81C';
        document.getElementById("button Verificar11").style.border='#000000';
        document.getElementById("button Verificar11").value='Correcto';
    }
});

$('input[name="pregunta_12"][type="button"]').on('click', function(event){
    let respuesta = $('option[name="respuesta"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar12").style.background='#F20D0D';
        document.getElementById("button Verificar12").style.border='#000000';
        document.getElementById("button Verificar12").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar12").style.background='#28D81C';
        document.getElementById("button Verificar12").style.border='#000000';
        document.getElementById("button Verificar12").value='Correcto';
    }
});

// Preguntas tema 3-5.html

$('input[name="pregunta_13"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar13").style.background='#F20D0D';
        document.getElementById("button Verificar13").style.border='#000000';
        document.getElementById("button Verificar13").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar13").style.background='#28D81C';
        document.getElementById("button Verificar13").style.border='#000000';
        document.getElementById("button Verificar13").value='Correcto';
    }
});

$('input[name="pregunta_14"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar14").style.background='#F20D0D';
        document.getElementById("button Verificar14").style.border='#000000';
        document.getElementById("button Verificar14").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar14").style.background='#28D81C';
        document.getElementById("button Verificar14").style.border='#000000';
        document.getElementById("button Verificar14").value='Correcto';
    }
});

$('input[name="pregunta_15"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar15").style.background='#F20D0D';
        document.getElementById("button Verificar15").style.border='#000000';
        document.getElementById("button Verificar15").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar15").style.background='#28D81C';
        document.getElementById("button Verificar15").style.border='#000000';
        document.getElementById("button Verificar15").value='Correcto';
    }
});