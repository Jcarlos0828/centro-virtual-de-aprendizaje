$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        alert('Respuesta incorrecta');
    }
});

$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Aguna respuesta incorrecta');
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones');
    }
});

$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let respuesta = parseFloat($('input[name="respuesta"][type="number"]').val());
    // respuestaCorrecta es la respuesta
    let respuestaCorrecta = 100.21;
    let precision = 2;
    if (respuesta.toFixed(precision) !== respuestaCorrecta.toFixed(precision) && !isNaN(respuesta)){
        alert('Respuesta incorrecta');
    }
});