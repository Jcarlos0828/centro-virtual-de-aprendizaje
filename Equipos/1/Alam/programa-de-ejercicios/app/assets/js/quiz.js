let correct_template =
    '<div class="popover correct-pop lead" role="tooltip"><div class="arrow"></div><h3 class="popover-header bg-success"></h3><div class="popover-body bg-success"></div></div>';
let incorrect_template =
    '<div class="popover incorrect-pop lead" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body bg-danger"></div></div>';

// correcto : 1, incorrecto : 2, sin responder : 3
function displayFeedback(q_id, code) {
    switch (code) {
        case 1:
            $(q_id).popover('dispose');
            $(q_id).popover({
                html: true,
                template: correct_template,
                title: 'Correcto <span class="fa fa-check"></span>',
                content: 'Mensaje'
            });
            break;
        case 2:
            $(q_id).popover('dispose');
            $(q_id).popover({
                html: true,
                template: incorrect_template,
                title: 'Incorrecto <span class="fa fa-remove"></span>',
                content: 'Mensaje'
            });
            break;
        case 3:
            $(q_id).popover('dispose');
            $(q_id).popover({
                html: true,
                template: incorrect_template,
                title: 'Sin responder <span class="fa fa-question"></span>',
                content: 'Proporciona una respuesta.'
            });
            break;
    }
}

function checkRadios(id) {
    let q_id = '#' + id + '-p';
    let radios = document.getElementsByName(id);
    let answered = false,
        isCorrect = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == $(q_id).attr('data-ans')) {
                displayFeedback(q_id, 1);
                isCorrect = true;
            } else {
                displayFeedback(q_id, 2);
            }
            answered = true;
        }
    }

    if (!answered) displayFeedback(q_id, 3);

    $(q_id).popover('show');

    return isCorrect;
}

function showGrade(id, grade, total) {
    let card = document.createElement('div');
    card.className = 'card grade-card lead ' + ((grade == total) ? 'bg-success' : 'bg-danger');
    card.innerHTML = "Calificación: " + grade + " / " + total;
    card.id = "grade";
    document.getElementById(id).insertAdjacentElement('afterend', card);
}