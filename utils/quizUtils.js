function checkAnswersSubmit(correctAns, userAns){
    let total = 0;
    Object.keys(correctAns).forEach(key => {
        if (correctAns[key] === userAns[key]) {
            total++
        }
        });
    return total;
}


function gradeScore(score) {
    let message;
    if (score === 0 || score === 1) {
        message = "You can do better next time!";
    } else if (score === 2) {
        message = "Not bad!";
    } else {
        message = "All correct?! Outstanding!";
    }
    return message;
}

export { checkAnswersSubmit, gradeScore };