$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta incorrecta');
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones');
    }
    else if(res_cor == correctas){
        alert('Correcto!');
    }
    event.preventDefault();
});
$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta2"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        alert('Respuesta incorrecta');
    }
    else{
        alert('Correcto!');
    }
    event.preventDefault();
});
$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta3"][type="radio"]:checked').val();
    if (respuesta === "incorrect"){
        alert('Respuesta incorrecta');
    }
    else{
        alert('Correcto!');
    }
    event.preventDefault();
});

