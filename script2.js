function calculateResult() {
    let answers = {
        tech: 0, business: 0, arts: 0, helping: 0
    };

    let form = document.getElementById("quizForm");
    let inputs = form.getElementsByTagName("input");

    for (let input of inputs) {
        if (input.checked) {
            answers[input.value]++;
        }
    }

    let highest = Object.keys(answers).reduce((a, b) => answers[a] > answers[b] ? a : b);

    let careerPaths = {
        tech: "Science & Technology, Engineering, Cybersecurity",
        business: "Business & Management, Finance",
        arts: "Arts & Design, Media",
        helping: "Healthcare, Law, Psychology, Social Work"
    };

    document.getElementById("result").innerHTML = 
        `<h2>Your Ideal Career Paths:</h2> <p>${careerPaths[highest]}</p>`;
}
