//BIG FUNCTION FOR COLUMN && ROWS 
async function main() {

    //HOLD JEOPARDY DATA
    let jeopardyData = undefined;

    //GET JEOPARDY DATA 
    async function getJeopardyData() {
        if (jeopardyData === undefined) {
            const rawJeopardyData = await fetch('jeopardy.json');
            jeopardyData = await rawJeopardyData.json();
            console.log('What is Jeopardy:', jeopardyData);
        }
        return jeopardyData;
    }
    getJeopardyData();

    //WHEN DOLLAR AMOUNT IS CLICKED ASK QUESTION 
    const gridItem = document.querySelector('.grid-container');

    gridItem.addEventListener('click', function (event) {
        const gridItem = event.target;
        console.log(gridItem);

        //GET A RANDOM QUESTION FOR $100
        async function getRandomQuestion() {
            const data = await getJeopardyData();
            const dollarAmount = _.filter(data, {value: '$100'});
            const randomQuestion = _.sample(dollarAmount);
            console.log('Random Question:', randomQuestion.question);
            console.log('Question Value:', randomQuestion.value);

            //DISPLAY ON PAGE   
            const question = document.querySelector('#question');
            
            const child = document.createElement('p');
            child.className = 'child';
            child.innerHTML = '<p>' + ' Question: ' + randomQuestion.question + '</p>';
            question.appendChild(child);


            return randomQuestion;
        }
        getRandomQuestion();

    
    })

}
main();
