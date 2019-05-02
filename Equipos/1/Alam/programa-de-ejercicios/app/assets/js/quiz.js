let correct_template =
    '<div class="popover correct-pop lead" role="tooltip"><div class="arrow"></div><h3 class="popover-header bg-success"></h3><div class="popover-body bg-success overflow-auto"></div></div>';
let incorrect_template =
    '<div class="popover incorrect-pop lead" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body bg-danger overflow-auto"></div></div>';

// correcto : 1, incorrecto : 2, sin responder : 3
function displayFeedback(q_id, code, msg = ' ') {

    switch (code) {
        case 1:
            //alert("correcttt");
            $(q_id).popover('dispose');
            $(q_id).popover({
                html: true,
                template: correct_template,
                title: 'Correcto <span class="fa fa-check"></span>',
                content: msg
            });
            $(q_id).popover("show");
            console.log("  hehey");
            console.log($(q_id));
            break;
        case 2:
            //alert("incorrecttt");
            $(q_id).popover('dispose');
            $(q_id).popover({
                html: true,
                template: incorrect_template,
                title: 'Incorrecto <span class="fa fa-remove"></span>',
                content: msg
            });
            $(q_id).popover("show");
            console.log("  hehey");
            console.log($(q_id));
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
                displayFeedback(q_id, 1, radioAns[id][1]);
                isCorrect = true;
            } else {
                displayFeedback(q_id, 2, radioAns[id][2]);
            }
            answered = true;
        }
    }

    if (!answered) displayFeedback(q_id, 3);

    $(q_id).popover('show');

    return isCorrect;
}

function c_checkRadios(id) {
    let q_id = '#' + id + '-p';
    let radios = document.getElementsByName(id);
    let answered = false,
        isCorrect = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == $(q_id).attr('data-ans')) {
                displayFeedback(q_id, 1, radioAns[id][radios[i].value]);
                isCorrect = true;
            } else {
                displayFeedback(q_id, 2, radioAns[id][radios[i].value]);
            }
            answered = true;
        }
    }

    if (!answered) displayFeedback(q_id, 3);

    $(q_id).popover('show');

    return isCorrect;
}

function checkSelector(id) {
    let ans = document.getElementById(id);
    return (ans.options[ans.selectedIndex].value == $('#' + id).attr('data-ans'));
}

function checkCheckbox(id, start, end) {
    let c_index = 0,
        isCorrect,
        checked = [];
    for (let c_id = 0; c_id < 10; c_id++) {
        let ans = document.getElementById(id + '-' + c_id);
        if (ans.checked) {
            checked.push(ans.value.toString());
        }
    }

    return (checks['1-p1'][0].length === checked.length && checks['1-p1'][0].sort()
        .every(function (value, index) {
            return value === checked.sort()[index]
        }));
}

function showGrade(id, grade, total) {
    let card = document.createElement('div');
    card.className = 'card grade-card lead ' + ((grade == total) ? 'bg-success' : 'bg-danger');
    card.innerHTML = "Calificación: " + grade + " / " + total;
    card.id = "grade";
    document.getElementById(id).insertAdjacentElement('afterend', card);
}