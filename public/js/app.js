let apiRes = { question: '', solution: '' };
const apiUrl = 'https://marcconrad.com/uob/smile/api.php?out=json';
console.log('it is working');
let score = 0;
$(document).ready(function() {
    $('#next-btn').click(function (e) {
        getQuestionFromApi();
    })
    $('.answer-btns').click(function (e) {
        //alert('answer button clicked!');
        console.log(e.target.value);
        const selectedAnswer = parseInt(e.target.value);
        checkAnswer(selectedAnswer)
    })
    getQuestionFromApi();
})

function getQuestionFromApi() {
    $.getJSON({
        url: apiUrl,
        success: function (result) {
            apiRes = result;
            // console.log(apiRes);
            $('#question-img').attr('src', apiRes.question);
        },

    })
}
function checkAnswer(answer) {
    if (answer === apiRes.solution) {
        alert('You got the answer right!');
        alert('Click the "Next Question" button to continue')
        score++;
        document.getElementById("score").innerHTML = "SCORE = " + score;
        return;
    }
    alert('Wrong answer mate, try again!');
}
