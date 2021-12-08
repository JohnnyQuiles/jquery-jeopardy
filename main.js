//BIG FUNCTION FOR COLUMN && ROWS 
const main = async () => {
    
    //GET JEOPARDY DATA 
    const rawJeopardyData = await fetch('jeopardy.json'); 
    const jeopardyData = await rawJeopardyData.json(); 
    console.log('What is Jeopardy:', jeopardyData);

    //GROUP THE DATA
    const groupedData = _.groupBy(jeopardyData, 'showNumber');
    console.log(groupedData);

    //WHEN MONEY IS CLICKED ASK QUESTION 
    const gridItem = document.querySelector('.grid-container'); 
    
    gridItem.addEventListener('click', (event) => { 
    const gridItem = event.target; 
    console.log('$', gridItem); 

    let gridItems = [];
    for(const gridQuestion of jeopardyData) {
        console.log('Question Asks:', gridQuestion.question);
        gridItems.push(gridQuestion); 
    
    }
    
    })
    
}; 
main();
