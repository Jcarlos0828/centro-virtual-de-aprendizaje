$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
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

$('input[name="pregunta_6"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
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

$('input[name="pregunta_1b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar1b").style.background='#F20D0D';
        document.getElementById("button Verificar1b").style.border='#000000';
        document.getElementById("button Verificar1b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar1b").style.background='#28D81C';
        document.getElementById("button Verificar1b").style.border='#000000';
        document.getElementById("button Verificar1b").value='Correcto';
    }
});

$('input[name="pregunta_2b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar2b").style.background='#F20D0D';
        document.getElementById("button Verificar2b").style.border='#000000';
        document.getElementById("button Verificar2b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar2b").style.background='#28D81C';
        document.getElementById("button Verificar2b").style.border='#000000';
        document.getElementById("button Verificar2b").value='Correcto';
    }
});

$('input[name="pregunta_3b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar3b").style.background='#F20D0D';
        document.getElementById("button Verificar3b").style.border='#000000';
        document.getElementById("button Verificar3b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar3b").style.background='#28D81C';
        document.getElementById("button Verificar3b").style.border='#000000';
        document.getElementById("button Verificar3b").value='Correcto';
    }
});

$('input[name="pregunta_4b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar4b").style.background='#F20D0D';
        document.getElementById("button Verificar4b").style.border='#000000';
        document.getElementById("button Verificar4b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar4b").style.background='#28D81C';
        document.getElementById("button Verificar4b").style.border='#000000';
        document.getElementById("button Verificar4b").value='Correcto';
    }
});

$('input[name="pregunta_5b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar5b").style.background='#F20D0D';
        document.getElementById("button Verificar5b").style.border='#000000';
        document.getElementById("button Verificar5b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar5b").style.background='#28D81C';
        document.getElementById("button Verificar5b").style.border='#000000';
        document.getElementById("button Verificar5b").value='Correcto';
    }
});

$('input[name="pregunta_6b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar6b").style.background='#F20D0D';
        document.getElementById("button Verificar6b").style.border='#000000';
        document.getElementById("button Verificar6b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar6b").style.background='#28D81C';
        document.getElementById("button Verificar6b").style.border='#000000';
        document.getElementById("button Verificar6b").value='Correcto';
    }
});

$('input[name="pregunta_7b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar7b").style.background='#F20D0D';
        document.getElementById("button Verificar7b").style.border='#000000';
        document.getElementById("button Verificar7b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar7b").style.background='#28D81C';
        document.getElementById("button Verificar7b").style.border='#000000';
        document.getElementById("button Verificar7b").value='Correcto';
    }
});

$('input[name="pregunta_8b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar8b").style.background='#F20D0D';
        document.getElementById("button Verificar8b").style.border='#000000';
        document.getElementById("button Verificar8b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar8b").style.background='#28D81C';
        document.getElementById("button Verificar8b").style.border='#000000';
        document.getElementById("button Verificar8b").value='Correcto';
    }
});

$('input[name="pregunta_9b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar9b").style.background='#F20D0D';
        document.getElementById("button Verificar9b").style.border='#000000';
        document.getElementById("button Verificar9b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar9b").style.background='#28D81C';
        document.getElementById("button Verificar9b").style.border='#000000';
        document.getElementById("button Verificar9b").value='Correcto';
    }
});

$('input[name="pregunta_10b"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        document.getElementById("button Verificar10b").style.background='#F20D0D';
        document.getElementById("button Verificar10b").style.border='#000000';
        document.getElementById("button Verificar10b").value='Incorrecto';
    }
    else if (respuesta === "correct"){
        document.getElementById("button Verificar10b").style.background='#28D81C';
        document.getElementById("button Verificar10b").style.border='#000000';
        document.getElementById("button Verificar10b").value='Correcto';
    }
});