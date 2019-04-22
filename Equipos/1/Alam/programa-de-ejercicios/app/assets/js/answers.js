let answers = {
    '1-p1' : [
        'falso', 
        '¡Muy Bien! Pueden ser muchos: sentirse bien, bajar de peso, fortalecerse, por rehabilitación o para estar más sano.',
        'El hacer ejercicio te lleva a sentirte bien, bajar de peso, fortalecerse, por rehabilitación y ser una persona sana.'
    ],
    '1-p2' : [
        'falso',
        '¡Muy bien! Basta con activarse y hacer que el ejercicio forme parte de su vida cotidiana.',
        'el hacer ejercicio te lleva a sentirte bien, bajar de peso, fortalecerse, por rehabilitación y ser una persona sana.'
    ],
    '1-p3' : [
        'array',
        '¡Muy bien hecho! Recuerde que debe cuidar su salud eliminando aquellos hábitos malos de su vida.',
        'Necesita revisar sus respuestas, recuerde ¿Qué hábitos me ayudan a mantener una buena salud?'
    ],
    '2-p1' : [
        'verdadero',
        '¡Muy bien! El hacer ejercicio físico le lleva a ejercitarse, a darle más movilidad a nuestro cuerpo y a nuestros huesos y nos motivan a tener actividad física en nuestra vida.',
        'Decídase a Realizar ejercicio físico constante y adaptado a sus condiciones físicas y de salud, a la edad y al sexo, le permite lograr efectos positivos en su organismo y en su vida.'
    ],
    '2-p2' : [
        'verdadero',
        '¡Muy bien! , Solamente es cuestión de decisión, ¡Hágalo hoy!',
        'Decídase, ya que le dejará buenos beneficios para su vida'
    ],
    '2-p3' : [
        'array',
        '¡Muy bien!',
        'Necesita revisar sus respuestas.'
    ],
    '2-p4' : [
        'array',
        '¡Muy bien!',
        'Necesita revisar sus respuestas.'
    ]
}

function answerCard(id, answer) {
    if (document.getElementById(id + '-ans')) {
        document.getElementById(id).parentElement.removeChild(document.getElementById(id + '-ans'));
    }
    let isCorrect;
    if (answer === answers[id][0]) isCorrect = true;
    else if (answer === 'array') isCorrect = true;
    else isCorrect = false;
    let card = document.createElement('div');
    let header = document.createElement('div');
    let icon = document.createElement('span');
    let body = document.createElement('div');
    card.className = 'card ans-card ' + (isCorrect ? 'bg-success' : 'bg-danger');
    header.className = 'card-header lead';
    body.className = 'card-body lead';
    icon.className = ' fa fa-' + (isCorrect ? 'check' : 'remove');
    body.innerHTML = answers[id][isCorrect ? 1 : 2];
    header.innerHTML = (isCorrect ? '¡Correcto! ' : 'Incorrecto ');
    header.appendChild(icon);
    card.appendChild(header);
    card.appendChild(body);
    card.id = id + '-ans';
    document.getElementById(id).insertAdjacentElement('afterend', card);

    return isCorrect;
}

