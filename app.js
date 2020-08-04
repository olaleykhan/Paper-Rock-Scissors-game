const rulesPopup = document.querySelector('#rules-popup');
const closeIcon= document.querySelector('#close-icon');
// call the game icons
let gameIcons = document.querySelector('#pick-icon-stage');
// call the play again button
const playAgainBtn = document.querySelector('#play-again-btn');

// call the textb that shows if you win or lose
const verdictDisplay = document.querySelector('#verdict-display');
// space for the icon picked by house
let housePickedIcon= document.querySelector('#house-picked-icon');
// the game mode shows the number of icons present in the game. a value of 3 means easy
let gameMode= 3;

document.querySelector('#rules-btn').addEventListener('click', function(){

    // on click, let th rules popup
    rulesPopup.style.display='block';
    closeIcon.style.display='block';

})

// use the close icone to remove the rules from the dom
closeIcon.addEventListener('click', function(){
    // on click, let the rules disapper
    rulesPopup.style.display='none';
    closeIcon.style.display='none';

})


// *********************Use the play again button to reset the game back to the beginning
playAgainBtn.addEventListener('click', playAgain);


gameIcons.addEventListener('click', function(e){


    // give individual icons an ID when picked by player
    let yourPickID;
    // create function to generate what is picked by house
    let houseID = Math.floor((Math.random()*3)+1);
    console.log(houseID);
    // put consitioners to specify icons click
    if(e.target.id==='paper'){
        hideCycle();
        yourPickID=1;
        displayPick('picked-paper','icon-paper.svg');
        housePickIcon(houseID);
        verdict(yourPickID,houseID,gameMode);
    }
     else if(e.target.id==='scissors'){
        hideCycle();
        yourPickID=2;
        displayPick('picked-scissors','icon-scissors.svg');
        housePickIcon(houseID);
        verdict(yourPickID,houseID,gameMode);
        
    } else if(e.target.id==='rock'){
        hideCycle();
        yourPickID=3;
        displayPick('picked-rock','icon-rock.svg');
        housePickIcon(houseID);
        verdict(yourPickID,houseID,gameMode);
    }
    else{ yourPickID=4;
        
    } 
    // console.log(yourPickID)
})


// ****************function to hide the game icons and show the page with selected icon and computer's choice

function hideCycle(){
    document.querySelector('#pick-icon-stage').style.display= 'none';
    document.querySelector('#rules-btn').style.display='none';
    // display the house pick section
    document.querySelector('#house-pick-section').style.display='block';
}

function displayPick(imageID, imageSource){
    let myIconHtml = ` <img id=${imageID} src="./images/${imageSource}" alt="">`;
    let pickedIcon= document.querySelector('#picked-icon');
   
    pickedIcon.innerHTML=myIconHtml;
    // housePickedIcon.innerHTML='';

      

    
    
}

// write a function to pick the icon for house

function housePickIcon(houseID){
    setTimeout(() => {
        let imageID='';
        let imageSource='';
        if(houseID==1){
           imageID= 'picked-paper';
           imageSource='icon-paper.svg';
        }else if(houseID==2){
            imageID= 'picked-scissors';
            imageSource='icon-scissors.svg';

        }else if(houseID==3){
            imageID= 'picked-rock';
            imageSource='icon-rock.svg';
        }

        // ******************************
        let myIconHtml = `<img id=${imageID} src="./images/${imageSource}" alt="">`
        let housePickedIcon= document.querySelector('#house-picked-icon');
       
        housePickedIcon.innerHTML=myIconHtml;
        // housePickedIcon.innerHTML='';

        // display the verdict
        document.querySelector('#verdict-board').style.display='flex';

        
    }, 1000);

}



function playAgain(){
    document.querySelector('#pick-icon-stage').style.display= 'flex';
    document.querySelector('#rules-btn').style.display='flex';
    // hide display of the house pick section the house pick section
    document.querySelector('#house-pick-section').style.display='none';
    // let housePickedIcon= document.querySelector('#house-picked-icon');

    // clear the content of what house picked
     housePickedIcon.innerHTML='';
    //  hide the display of the verdict board
    document.querySelector('#verdict-board').style.display='none';

}


// ********************Function to determine if you win or lose

function verdict(pickedID,houseID, gameMode){
    let scores= parseInt(document.querySelector('#scores').textContent);
    
    setTimeout(() => {
        // if(houseID == 2 && pickedID==3|| houseID==3&&pickedID==1||houseID==1&&pickedID==2){
        //     verdictDisplay.textContent='YOU WIN';
        //     scores+=1;
        //     // document.querySelector('#scores').textContent = 8
    
    
        // }
        if(pickedID>houseID&& houseID!=1||pickedID==1&&houseID==gameMode||houseID==1&&1<pickedID<=gameMode){
            verdictDisplay.textContent='YOU WIN';
            scores+=1;
        }
        // if(pickedID>houseID&& houseID!=1||pickedID>houseID&&pickedID!=2||pickedID==1&&houseID==gameMode){
        //     verdictDisplay.textContent='YOU WIN';
        //     scores+=1;
        // }
        
        else if(houseID==pickedID){
            verdictDisplay.textContent= 'A DRAW';
            scores+=0;
        } else{
            verdictDisplay.textContent= 'YOU LOSE';
            scores-=1;
        }
        document.querySelector('#scores').textContent= scores;
        
    }, 1000);
}

