//variable declarations 
let apiRes = { question: '', solution: '' };
const apiUrl = 'https://marcconrad.com/uob/smile/api.php?out=json';
let score = 0;
// used document.ready to the javascript runs only after the page is fully loaded  
$(document).ready(function() {
    $('#next-btn').click(function (e) {
        getQuestionFromApi();
    })
    $('.answer-btns').click(function (e) {
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
