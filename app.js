const correctAnswers = ['A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const span = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];



    let i = 0;
    for (i = 0; i < 4; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score += 25;
        }
    }
    scrollTo(0, 0);
    result.classList.remove('d-none');


    //console.log(score);
    let output = 0;
    const timer = setInterval(
        () => {
            span.textContent = `${output}%`;
            if (output === score) {
                clearInterval(timer);
            }
            else {
                output++;
            }
        }, 20
    );

});