$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta == "incorrect1"){
        alert('Piénsalo bien, pues en este tipo de plantaciones se debe sembrar menor cantidad de árboles, ya que como todos tienen los mismos requerimientos compiten entre sí y hay que sembrarlos más espaciados.');
    }
    else if (respuesta == "correct1") {
        alert('¡Correcto! En este tipo de bosques los árboles pueden sembrarse a menor distancia, ya que por ser de diferentes especies cada uno tienen requerimientos distintos y no se estorban unos a otros.');
    }
    event.preventDefault();
});

$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta == "incorrect2"){
        alert('Piénsalo bien, pues ya que no es un suelo muy productivo si siembras muchos árboles estos tendrían que repartirse los pocos nutrientes y lo más seguro es que se los quitaran unos a otros.');
    }
    else if (respuesta == "correct2") {
        alert('¡Correcto! Ya que este terreno no es muy propicio para el desarrollo de los árboles se debe plantar poca cantidad para que tengan mayor posibilidad de sobrevivir');
    }
    event.preventDefault();
});

$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta == "incorrect3-sequias"){
        alert('Piénsalo bien, ya que al sembrar en esta época es casi seguro que la reforestación fracasará y los arbolitos morirán.');
    }
    else if (respuesta == "incorrect3-poca-lluvia") {
        alert('Piénsalo bien, los arbolitos pequeños necesitan de agua abundante y en esta época les puede hacer falta.');
    }
    else if (respuesta == "correct3") {
        alert('¡Correcto! Si se planta en esta época es mucho más probable tener éxito en la reforestación.');
    }
    event.preventDefault();
});