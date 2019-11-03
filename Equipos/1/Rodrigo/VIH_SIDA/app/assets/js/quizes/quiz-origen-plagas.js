$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta es incorrecta');
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones correctas');
    }
    else if (res_cor == correctas){
        alert('¡Correcto!');
    }
    event.preventDefault();
});