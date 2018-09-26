$(document).ready(function () {

    var myQuestions = [
        {
            question: "Who directed 'The Thing'?",
            answers: {
                a: "Wes Craven",
                b: "John Carpenter",
                c: "Stanley Kubrick",
                d: "Dario Argento",
            },
            correctAnswer: "b"
        },

        {
            question: "Who created 'Nightmare on Elm Street'?",
            answers: {
                a: "George A. Romero",
                b: "Peter Jackson",
                c: "Wes Craven",
                d: "None of the above",
            },
            correctAnswer: "c"
        },

        {
            question: "What year did 'Friday the 13th' release in theaters?",
            answers: {
                a: "1980",
                b: "1981",
                c: "1982",
                d: "1983",
            },
            correctAnswer: "a"
        },

        {
            question: "Which of these actors played the role of Jack Torrance in 'The Shining'?",
            answers: {
                a: "Jack Nicholson",
                b: "Tom Hanks",
                c: "Colin Firth",
                d: "Stephen King",
            },
            correctAnswer: "a"
        },

        {
            question: "Which one of these movies did NOT star Bruce Campbell?",
            answers: {
                a: "Evil Dead (1981)",
                b: "Evil Dead 2 (1987)",
                c: "Bubba Ho-Tep (2002)",
                d: "Drag me to Hell (2009)",
            },
            correctAnswer: "d"
        },

        {
            question: "What Oscar nominated actor appeared in the original 'Nightmare on Elm Street'?",
            answers: {
                a: "Kevin Bacon",
                b: "Johnny Depp",
                c: "Christian Slater",
                d: "Judd Nelson",
            },
            correctAnswer: "b"
        },

        {
            question: "What 1973 horror-thriller film is based on William Peter Blatty's terrifying novel?",
            answers: {
                a: "The Wicker Man",
                b: "Night of the Living Dead",
                c: "The Exorcist",
                d: "Texas Chainsaw Massacre",
            },
            correctAnswer: "c"
        },

        {
            question: "What famous horror actor did Martin Landau play in 1994's 'Ed Wood'?",
            answers: {
                a: "Bela Lugosi",
                b: "Lon Chaney",
                c: "Boris Karloff",
                d: "Chris Hansen",
            },
            correctAnswer: "a"
        },

        {
            question: "What 1990s horror franchise was adapted into a TV series for MTV? ",
            answers: {
                a: "Scary Movie",
                b: "Scream",
                c: "Teen Wolf",
                d: "None of the Above",
            },
            correctAnswer: "b"
        },

        {
            question: "Which one of these Stephen King film adaptations was NOT nominated for an Oscar?",
            answers: {
                a: "Misery",
                b: "Christine",
                c: "Carrie",
                d: "Shawshank Redemption",
            },
            correctAnswer: "b"
        },



    ];

//was having trouble getting jquery to work, so I just used getElement to avoid stress and frustration 

var quizDiv = document.getElementById('quiz');
var resultsDiv = document.getElementById('results');
var submitButton = document.getElementById('submit');




start(myQuestions, quizDiv, resultsDiv, submitButton);

function start(questions, quizDiv, resultsDiv, submitButton){

    function displayQuestions(questions, quizDiv){
        var output = [];
        var answers;

        for(var i = 0; i < questions.length; i++){
            
            answers = [];

            for(letter in questions[i].answers){

                answers.push(
                    '<label>' + '<input type="radio" name="question'+i+'" value="'+letter+'">'+ 
                    letter + ': '+ questions[i].answers[letter]+ 
                    '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizDiv.innerHTML = output.join('');

    }

    // Had to look up for help on the above, it was really tricky to understand. Looked up how to use radio, but I think I'm good now. 
    // Definietely going to review and learn more on this.

    //from here on down, I understood it a lot easier and faster


    function showResults(questions, quizDiv, resultsDiv){
        
        var answerContainers = quizDiv.querySelectorAll('.answers');
        
        var userInput = '';
        var correct = 0;
        
        for(var i=0; i < questions.length; i++){

            userInput = (answerContainers[i].querySelector('input[name = question'+i+']:checked')||{}).value;
            
            if(userInput === questions[i].correctAnswer){
                correct++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsDiv.innerHTML = correct + ' out of ' + questions.length;
    }

    displayQuestions(questions, quizDiv);
    
    submitButton.onclick = function(){
        showResults(questions, quizDiv, resultsDiv);
    }

}
});