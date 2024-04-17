array = [];
let gameOver = false;
let level = 1;

// generate random number between 1-4

let headingh1 = document.querySelector("h1");
let heading = document.querySelector("h2");
console.log(heading);

let div1 = document.getElementById("1");
let div2 = document.getElementById("2");
let div3 = document.getElementById("3");
let div4 = document.getElementById("4");


const keyValue = {
    1 : div1,
    2 : div2,
    3 : div3,
    4 : div4
}

let div1Color = "#D37676";
let div2Color = "#891652";
let div3Color = "#EABE6C";
let div4Color = "#FFEDD8";

generateNumber();

    function generateNumber(){
        let randomNumber = Math.floor(Math.random() * (5-1) + 1);
        array.push(randomNumber);
        console.log(array)
        
    switch (randomNumber) {
        case 1:
            flash(div1,div1Color);
            break;
    
        case 2:
            flash(div2,div2Color);
            break;
    
        case 3:
            flash(div3,div3Color);
            break;
    
        case 4:
            flash(div4,div4Color);
            break;
    }
    }
    
    
    let times = 0;
    //after level up 
    
    div1.onclick = () => {
        if(array[times] == 1){
            times++;
            console.log("Correct Choice !")
            console.log(times);
            if(array.length == times){
                times = 0;
                level++;
                console.log("Level Up");
                heading.innerText = `Level ${level}`
                console.log(array);
                generateNumber();
            }
        }
        else {
            gameOver = true;
            console.log("Wrong Choice !")
            console.log(times);
            headingh1.innerText = "GAME OVER your score is : "+level;
            heading.innerText = "Reload to restart the game";
        }
    }
    
    div2.onclick = () => {
        if(array[times] == 2){
            times++;
            console.log("Correct Choice !")
            console.log(times);
            if(array.length == times){
                times = 0;
                level++;
                console.log("Level Up");
                heading.innerText = `Level ${level}`
                console.log(array);
                generateNumber();
            }
        }
        else {
            gameOver = true;
            console.log("Wrong Choice !")
            console.log(times);
            headingh1.innerText = "GAME OVER your score is : "+level;
            heading.innerText = "Reload to restart the game";
        }
    }
    
    div3.onclick = () => {
        if(array[times] == 3){
            times++;
            console.log("Correct Choice !")
            console.log(times);
            if(array.length == times){
                times = 0;
                level++;
                console.log("Level Up");
                heading.innerText = `Level ${level}`
                console.log(array);
                generateNumber();
            }
        }
        else {
            gameOver = true;
            console.log("Wrong Choice !")
            console.log(times);
            headingh1.innerText = "GAME OVER your score is : "+level;
            heading.innerText = "Reload to restart the game";
        }
    }
    
    div4.onclick = () => {
        if(array[times] == 4){  
            times++;
            console.log("Correct Choice !")
            console.log(times);
            
            if(array.length == times){
                level +=1;
                times = 0;
                console.log("Level Up !")
                console.log(times);
                heading.innerText = `Level ${level}`
                console.log(array);
                generateNumber();
            }
        }
        else{
            gameOver = true;
            console.log("Wrong Choice !")
            console.log(times);
            headingh1.innerText = "GAME OVER your score is : "+level;
            heading.innerText = "Reload to restart the game";
        }
    }
    
    
    
    function flash(whichDiv, whichcolor){
            setTimeout(() =>{
                whichDiv.style.background = "white";
            },3500)
             setTimeout(()=>{
                whichDiv.style.background = whichcolor;
            },3700);
    }
    
    console.log("answers here :")
    console.log(array)
