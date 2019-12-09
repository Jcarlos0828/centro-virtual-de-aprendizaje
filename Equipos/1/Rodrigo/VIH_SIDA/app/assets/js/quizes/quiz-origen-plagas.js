$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta == "correct1") {
        alert('¡Muy bien!');
    }
    event.preventDefault();
});

$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta == "resp-1"){
        alert('Si le recomendaste que importara a los enemigos naturales recuérdale que esta importación la realizan sólo los organismos gubernamentales y las instituciones de educación superior.');
    }
    else if (respuesta == "resp-2") {
        alert('Si le recomendaste que libere enemigos naturales para su plaga recuérdale que la liberación o aplicación masiva se utiliza en cultivos intensivos o áreas limitadas, por su costo, y que es necesario ponerse en contacto con un laboratorio o centro reproductor para adquirir el agente de control y hacer la liberación masiva. ');
    }
    else if (respuesta == "correct1") {
        alert('¡Muy bien!');
    }
    event.preventDefault();
});

$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct2"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct2"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect2"]:checked').toArray().length;
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
