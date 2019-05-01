let checks = {
    '1-p1' : [
        ['1', '2', '5', '8', '9'],
        '¡Muy bien hecho! Recuerde que debe cuidar su salud eliminando aquellos hábitos malos de su vida.',
        'Necesita revisar sus respuestas, recuerde ¿qué hábitos me ayudan a mantener una buena salud?'
    ]
}

let radioAns = {
    '1-s1' : [
        'falso', 
        '¡Muy Bien! Pueden ser muchos: sentirse bien, bajar de peso, fortalecerse, por rehabilitación o para estar más sano.',
        'El hacer ejercicio te lleva a sentirte bien, bajar de peso, fortalecerse, por rehabilitación y ser una persona sana.'
    ],
    '1-s2' : [
        'falso',
        '¡Muy bien! Basta con activarse y hacer que el ejercicio forme parte de su vida cotidiana.',
        'El hacer ejercicio te lleva a sentirte bien, bajar de peso, fortalecerse, por rehabilitación y ser una persona sana.'
    ],
    '2-s1' : [
        'verdadero',
        '¡Muy bien! El hacer ejercicio físico le lleva a ejercitarse, a darle más movilidad a nuestro cuerpo y a nuestros huesos y nos motivan a tener actividad física en nuestra vida.',
        'Decídase a Realizar ejercicio físico constante y adaptado a sus condiciones físicas y de salud, a la edad y al sexo, le permite lograr efectos positivos en su organismo y en su vida.'
    ],
    '2-s2' : [
        'verdadero',
        '¡Muy bien! , Solamente es cuestión de decisión, ¡Hágalo hoy!',
        'Decídase, ya que le dejará buenos beneficios para su vida.'
    ],
    '3-s1' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, Todos pueden llevar a cabo actividades físicas, sólo debe tener presente que cada persona tiene características físicas y psicológicas diferentes por lo tanto necesita un programa especializado a su condición.'
    ],
    '5-s1':[
        'no',
        '¡Muy Bien! Es importante antes de iniciar cualquier actividad física saber en que estado de salud se encuentra para seguridad de usted, y le recomendamos seguir los pasos en seguridad en su PROESA.', 
        'Incorrecto, antes de iniciar su PROESA, le recomendamos practicarse una prueba de su capacidad o condición física, ahí le orientarán acerca de los estudios que necesita realizarse.'
    ],
    '6-s1' : [
        'verdadero',
        '¡Muy bien! Es importante saber el estado de su pulso para realizar un ejercicio que ejercite nuestro corazón.',
        'Incorrecto, Es importante saber que cuando se realiza un esfuerzo el pulso cambia, pero debe cambiar dentro de ciertos límites para que el corazón se fortalezca sin que llegue al sobreesfuerzo.'
    ],
    '7-s1' : [
        'falso',
        '¡Muy bien! La gente que incluye una actividad física regular en sus vidas después de un ataque cardíaco mejora la probabilidad de sobre vivencia.',
        'Incorrecto, La actividad física vigorosa y regular puede ayudar a reducir el riesgo de tener otro ataque cardíaco.'
    ],
    '8-s1' : [
        'falso',
        '¡Muy bien! Necesitará reanudar su ejercicio a niveles inferiores a los que estaba haciendo antes.',
        'Incorrecto, Si falta a pocas sesiones, debido a enfermedades leves y temporales, tales como gripa, espere hasta que esté bien antes de reanudar su ejercicio. Si tiene una lesión leve, espere hasta que el dolor desaparezca.'
    ],
    '8-s2' : [
        'no',
        '¡Muy bien! Recuerde lo que nos dijo Don Saludable "El que ignore estas señales y continúe con el ejercicio lo llevará a problemas serios del corazón. Cualquiera de estos signos que ocurran, deje de hacer ejercicio y consulte a su doctor."',
        'Incorrecto, el ejercitarse mucho causa lesiones en las articulaciones, los pies, tobillos y piernas. No cometa el error de seguir ejercitándose cuando presenta señales de dolor en éstas áreas, porque posiblemente tendrá como resultados lesiones más severas.'
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
    ],
    '3-p1' : [
        '#',
        '¡Muy bien!',
        'Inténtelo de nuevo.'
    ],
    '3-p2' : [
        '#',
        '¡Muy bien!',
        'Inténtelo de nuevo.'
    ],
    '3-p3' : [
        '#',
        '¡Muy bien!',
        'Inténtelo de nuevo.'
    ],
    '3-p4' : [
        '#',
        '¡Muy bien!',
        'Inténtelo de nuevo.'
    ],
    '3-p5' : [
        '#',
        '¡Muy bien!',
        'Inténtelo de nuevo.'
    ],
    '3-p6' : [
        '#',
        '¡Muy bien!',
        'Inténtelo de nuevo.'
    ],
    '4-p1' : [
        'falso',
        '¡Muy bien!, es recomendable trabajar 30 minutos diarios y es conveniente que usted divida en 2 ó 3 períodos su tiempo de ejercicio si así se le facilita; por ejemplo, 10 ó 15 minutos en la mañana y 10 ó 15 minutos en la tarde, y 10 ó 15 minutos en la noche; incluyendo el tiempo de los ejercicios de calentamiento y para la recuperación. Nunca deberá excederse.',
        'Incorrecto, recuerde que es recomendable trabajar 30 minutos diarios y es conveniente que usted divida en 2 ó 3 períodos su tiempo de ejercicio si así se le facilita; por ejemplo, 10 ó 15 minutos en la mañana y 10 ó 15 minutos en la tarde, y 10 ó 15 minutos en la noche; incluyendo el tiempo de los ejercicios de calentamiento y para la recuperación. Nunca deberá excederse.'
    ],
    '4-p2' : [
        'verdadero',
        '¡Muy bien!, es importante estar en compañía de otra persona, así la actividad resultará más placentera y segura en caso de algún imprevisto.',
        'Incorrecto, recuerde que es importante estar en compañía de otra persona, así la actividad resultará más placentera y segura en caso de algún imprevisto.'
    ],
    '4-p3' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, recuerde que es recomendable tener un horario establecido para practicar una actividad física, así el organismo responderá mejor y obtendrá mejores resultados.'
    ],
    '4-p4' : [
        'verdadero',
        '¡Muy bien!, antes de iniciar la sesión de ejercicio, deje transcurrir al menos tres horas después de una comida abundante, o bien, realícela en ayunas.',
        'Incorrecto, recuerde que todos pueden llevar a cabo actividades físicas, sólo debe tener presente que cada persona tiene características físicas y psicológicas diferentes por lo tanto necesita un programa especializado a su condición.'
    ],
    '4-p5' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, recuerde que todos pueden llevar a cabo actividades físicas, sólo debe tener presente que cada persona tiene características físicas y psicológicas diferentes por lo tanto necesita un programa especializado a su condición.',
    ],
    '4-p6' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, recuerde que debe dejar transcurrir de 10 a 15 minutos después de la sesión de ejercicio para darse un baño con agua tibia, nunca fría ni caliente.'
    ],
    '5-p1' : [
        '#',
        'No es la opción más recomendable, el hacer ejercicio cada tercer día podría empeorar su estado de salud. Por favor inténtelo nuevamente.',
        'Si usted está enfermo y hace ejercicio todos los días podría empeorar en grado extremo su salud. Por favor inténtelo nuevamente por favor.',
        '¡Muy bien!, es necesario seguir las indicaciones de su médico ya que es la persona más indicada para autorizarle cualquier tipo de actividad física.',
        'En ocasiones el sentirse mejor no asegura que su salud sea la adecuada para realizar actividad física e incluso podría ser contraproducente y empeorar drásticamente su condición. Por favor inténtelo nuevamente.'
    ],
    '5-p2' : [
        '#',
        'El trotar de inmediato podría causarle lesiones de importancia. Por favor inténtelo nuevamente.',
        'Caminar aceleradamente es una actividad física que requiere mucho esfuerzo, el iniciar la actividad física de esta manera podría causarle alguna lesión. Por favor inténtelo nuevamente.',
        'Las sentadillas requieren un gran esfuerzo de flexión, recuerde que sus músculos necesitan prepararse unos minutos antes de la actividad física. Por favor inténtelo nuevamente.',
        '¡Muy bien!, ha respondido correctamente. El calentamiento es muy importante antes de iniciar cualquier tipo de actividad física y evitará en buena medida el riesgo de lesiones musculares.'
    ],
    '5-p3' : [
        '#',
        'Esperar 30 minutos después de una abundante comida no es suficiente para que el organismo digiera adecuadamente los alimentos. Inténtelo nuevamente por favor.',
        'Esperar 1 hora después de una abundante comida no es suficiente para que el organismo digiera adecuadamente los alimentos. Inténtelo nuevamente por favor',
        '¡Correcto!, es recomendable esperar por lo menos tres horas después de una abundante comida; su cuerpo está listo para iniciar la actividad física. ¡Adelante!',
        'Después de 5 horas de haber ingerido una abundante comida su cuerpo está listo, pero ¿no será mucha la espera? Inténtelo nuevamente por favor.'
    ],
    '5-p4' : [
        '#',
        '¡Correcto!, es la opción más adecuada y debe considerarla en caso de cualquier respuesta inusual de su cuerpo.',
        'Podría resultar muy peligroso para su salud. Por favor inténtelo nuevamente.',
        'Sería una decisión un tanto drástica, el ejercicio es necesario y debe conocer la causa de su malestar. Por favor inténtelo nuevamente.',
        'En ocasiones después de un malestar podemos sentirnos mejor, pero es recomendable estar seguros de que nuestro estado de salud es el adecuado para continuar con la actividad física. Por favor inténtelo nuevamente.'
    ],
    '5-p5' : [
        '#',
        'No es necesario llegar al grado de sofocarse, esta situación podría ser dañina para su salud. Inténtelo nuevamente por favor.',
        'Su esfuerzo difícilmente será excesivo sin llegar al grado de sofocarse. Por favor inténtelo de nuevo.',
        '¡Correcto!, el no sofocarse es un buen indicador de que nuestro cuerpo está funcionando correctamente.',
        'Su esfuerzo difícilmente será poco excesivo sin llegar al grado de sofocarse. Por favor inténtelo de nuevo.'
    ],
    '5-p6' : [
        '#',
        'El parar y descansar de inmediato podría causarle una seria lesión. Por favor inténtelo de nuevo.',
        'El bañarse inmediatamente con agua caliente no resulta la mejor opción después de hacer ejercicio. Por favor inténtelo de nuevo.',
        '¡Muy bien!, recuerde que su cuerpo es una compleja maquinaria y requiere acostumbrarse a los cambios de actividad, este hábito le evitará de posibles lesiones.',
        'Usted puede beber agua pero no acostarse de inmediato, sus músculos y articulaciones podrían resultar lesionados si detiene por completo y de inmediato sus movimientos físicos. Por favor inténtelo de nuevo.'
    ],
    '7-p1' : [
        '#',
        '¡Muchas Felicidades! En tanto se esté mejor acondicionado físicamente, la mayoría de las personas se sienten físicamente activas, les proporciona más energía que antes.',
        'Incorrecto, recuerde que en tanto se esté mejor acondicionado físicamente, la mayoría de las personas se sienten físicamente activas, les proporciona más energía que antes.'
    ],
    '7-p2' : [
        '#',
        '¡Muchas Felicidades! Para poner en buena condición su corazón y pulmones, el ejercicio regular no tiene que invertir más de 30 a 60 minutos, de tres a cuatro veces a la semana.',
        'Incorrecto, recuerde que para poner en buena condición su corazón y pulmones, el ejercicio regular no tiene que invertir más de 30 a 60 minutos, de tres a cuatro veces a la semana.'
    ],
    '7-p3' : [
        '#',
        '¡Muchas Felicidades! Solamente los ejercicios regularmente, vigorosos y sostenidos, como caminar vigorosamente, correr o nadar mejoraran la eficiencia de su corazón y pulmones y quemara calorías extras. Otras actividades posiblemente, le proporcionen otros beneficios tales como aumentar la flexibilidad o fuerza muscular, dependiendo del tipo de actividad.',
        'Incorrecto, recuerde que solamente los ejercicios regularmente, vigorosos y sostenidos, como caminar vigorosamente, correr o nadar mejoraran la eficiencia de su corazón y pulmones y quemara calorías extras. Otras actividades posiblemente, le proporcionen otros beneficios tales como aumentar la flexibilidad o fuerza muscular, dependiendo del tipo de actividad.'
    ],
    '7-p4' : [
        '#',
        '¡Muchas Felicidades! La actividad física regular en las personas mayores hace que aumente su capacidad para llevar a cabo las actividades de su vida diaria. Lo que es importante, a cualquier edad que tenga, es diseñar un programa de actividad para su nivel de acondicionamiento.',
        'Incorrecto, recuerde que la actividad física regular en las personas mayores hace que aumente su capacidad para llevar a cabo las actividades de su vida diaria. Lo que es importante, a cualquier edad que tenga, es diseñar un programa de actividad para su nivel de acondicionamiento.'
    ],
    '7-p5' : [
        '#',
        '¡Muchas Felicidades! La mayoría de las actividades físicas no requieren de ninguna habilidad atlética en especial. Un ejemplo perfecto es caminar, una actividad que no requiere ningún talento especial, habilidad atlética o equipo.',
        'Incorrecto, recuerde que la mayoría de las actividades físicas no requieren de ninguna habilidad atlética en especial. Un ejemplo perfecto es caminar, una actividad que no requiere ningún talento especial, habilidad atlética o equipo.',
    ],
    '11-p1' : [
        'falso',
        '¡Muy bien!, es recomendable trabajar 30 minutos diarios y es conveniente que usted divida en 2 ó 3 períodos su tiempo de ejercicio si así se le facilita; por ejemplo, 10 ó 15 minutos en la mañana y 10 ó 15 minutos en la tarde, y 10 ó 15 minutos en la noche; incluyendo el tiempo de los ejercicios de calentamiento y para la recuperación. Nunca deberá excederse.',
        'Incorrecto, recuerde que es recomendable trabajar 30 minutos diarios y es conveniente que usted divida en 2 ó 3 períodos su tiempo de ejercicio si así se le facilita; por ejemplo, 10 ó 15 minutos en la mañana y 10 ó 15 minutos en la tarde, y 10 ó 15 minutos en la noche; incluyendo el tiempo de los ejercicios de calentamiento y para la recuperación. Nunca deberá excederse.'
    ],
    '11-p2' : [
        'verdadero',
        '¡Muy bien!, es importante estar en compañía de otra persona, así la actividad resultará más placentera y segura en caso de algún imprevisto.',
        'Incorrecto, recuerde que es importante estar en compañía de otra persona, así la actividad resultará más placentera y segura en caso de algún imprevisto.'
    ],
    '11-p3' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, recuerde que es recomendable tener un horario establecido para practicar una actividad física, así el organismo responderá mejor y obtendrá mejores resultados.'
    ],
    '11-p4' : [
        'verdadero',
        '¡Muy bien!, antes de iniciar la sesión de ejercicio, deje transcurrir al menos tres horas después de una comida abundante, o bien, realícela en ayunas.',
        'Incorrecto, recuerde que todos pueden llevar a cabo actividades físicas, sólo debe tener presente que cada persona tiene características físicas y psicológicas diferentes por lo tanto necesita un programa especializado a su condición.'
    ],
    '11-p5' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, recuerde que todos pueden llevar a cabo actividades físicas, sólo debe tener presente que cada persona tiene características físicas y psicológicas diferentes por lo tanto necesita un programa especializado a su condición.',
    ],
    '11-p6' : [
        'falso',
        '¡Muy bien! Podemos hacer ejercicio siempre y cuando siga los pasos de un programa adecuado a las características que se acomoden a sus condiciones físicas.',
        'Incorrecto, recuerde que todos pueden llevar a cabo actividades físicas, sólo debe tener presente que cada persona tiene características físicas y psicológicas diferentes por lo tanto necesita un programa especializado a su condición.',
    ],
    '11-p7' : [
        'falso',
        '¡Gracias por su respuesta!',
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

