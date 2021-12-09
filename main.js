//BIG FUNCTION FOR JEOPARDY APPLICATION 
async function main() {

    //JEOPARDY DATA UNDEFINED
    let jeopardyData = undefined;

    //GET JEOPARDY DATA LOG IN DOM
    async function getJeopardyData() {
        if (jeopardyData === undefined) {
            const rawJeopardyData = await fetch('jeopardy.json');
            jeopardyData = await rawJeopardyData.json();
            console.log('What is Jeopardy:', jeopardyData);
        }
        return jeopardyData;
    }
    getJeopardyData();

    //QUERY GRID FOR PLACING QUESTIONS
    const gridItem = document.querySelector('.grid-container');

    //WHEN DOLLAR AMOUNT IS CLICKED ASK QUESTION 
    gridItem.addEventListener('click', function (event) {
        event.preventDefault();

        const gridItem = event.target.innerHTML;
        

        //GET A RANDOM QUESTION
        async function getRandomQuestion() {
            const data = await getJeopardyData();
            const dollarAmount = _.filter(data, { value: gridItem });
            const randomQuestion = _.sample(dollarAmount);
            console.log('Random Question:', randomQuestion.question);
            console.log('Question Value:', randomQuestion.value);
            

            //DISPLAY ON PAGE   
            const question = document.querySelector('#question');

            //CREATED A VARIABLE TO DISPLAY QUESTION ON PAGE 
            //WHEN GETTING RANDOM QUESTION FROM DATA    
            const child = document.createElement('p');
            child.className = 'child';
            child.innerHTML = '<p>' + ' Question: ' + randomQuestion.question + '</p>';
            question.appendChild(child);
            return randomQuestion;
        }
        getRandomQuestion();

        //GET RANDOM QUESTION ANSWER
        async function getAnswer() {
        const data = await getJeopardyData();
        const dollarAmountAnswer = _.filter(data, { value: gridItem } , { answer : gridItem });
        const answerQuestion = _.sample(dollarAmountAnswer); 
        console.log('Question Answer: ', answerQuestion.answer);
        }
        getAnswer();
        
            //HANDLING USER INPUT GUESS
            const answer = document.querySelector('.answer');
            const input = document.querySelector('#input-text');
            const button = document.querySelector('#button'); 
            
            
            answer.addEventListener('submit', function (event) {
                event.preventDefault();
                
                
                //ALERT USER IF CORRECT OR INCORRECT
                let str = 
                'Your Anwer' + ' ' + input.value ;
                
            

                if(input === getAnswer()) {
                    let str = 'Your' + ' ' + input.value + ' ' + 'is' + ' ' + 'Correct'; 

                } else {
                    let str = 'Your' + ' ' + input.value + ' ' + 'is' + ' ' + 'Incorrect'; 
                }
                console.log(str);
                alert(str);
                
                
            }) 
            })
}
main();
