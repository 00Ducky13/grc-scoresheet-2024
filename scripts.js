var score = 0;
const m1p1 = document.getElementById("m1Part1Num");
const m1p2 = document.getElementById("m1Part2Check");
const m2p1 = document.getElementById("m2Part1Check");
const m2p2 = document.getElementById("m2Part2Check");
const m3p1 = document.getElementById("m3Part1Check");
const m3p2 = document.getElementById("m3Part2Check");
const m4p1 = document.getElementById("m4Part1Num");
const m4p2 = document.getElementById("m4Part2Num");
const m4p3 = document.getElementById("m4Part3Check");
const m5p1 = document.getElementById("m5Part1Check");
const m5p2 = document.getElementById("m5Part2Check");
const m5p3 = document.getElementById("m5Part3Check");
const m6p1 = document.getElementById("m6Part1Check");
const m6p2 = document.getElementById("m6Part2Check");
const m6p3 = document.getElementById("m6Part3Check");
const m6p4 = document.getElementById("m6Part4Check");
const m7p1 = document.getElementById("m7Part1Check");
const pen = document.getElementById("penPart1Num");
const reset = document.getElementById("reset");
const error = document.getElementById("error");
const scoreText = document.getElementById("score");

function displayScore(scoreToDisplay){
    scoreText.innerHTML = scoreToDisplay;   
}
document.addEventListener('DOMContentLoaded', (event) => {
            let prevVal = parseInt(m1p1.value);
            m1p1.addEventListener('change', (event) => {
                const currVal = parseInt(event.target.value);
                if (currVal !== prevVal) {
                    
                    // Do something when the value changes
                    if((prevVal == 2) && (m1p2.checked == true)){
                        score = score -10;
                        m1p2.checked = false;
                    }
                    score = score + (currVal-prevVal)*15;
                    prevVal = currVal;
                    console.log(score);
                    displayScore(score)
                }
            });
        })

m1p2.addEventListener("click", function(){
  if (m1p2.checked == true){
    if (m1p1.value != 2){
        error.innerText = "Bonus for both astronauts cannot be scored unless both astronauts are scored";
        displayScore("#");
    }
    else{
        score = score + 10;
        displayScore(score);
    }
  } else {
    if (m1p1.value != 2){
        error.innerText = "";
        displayScore(score);
    }
    else{
        score = score - 10;
        displayScore(score);
    }
  }
  
});

m2p1.addEventListener("click", function(){
  if (m2p1.checked == true){
    if (m2p2.checked == true){
        m2p2.checked = false;
        score = score - 20;
    }
        score = score + 10;
        displayScore(score);
  } else {
        score = score - 10;
        displayScore(score);
  }
  
});

m2p2.addEventListener("click", function(){
  if (m2p2.checked == true){
    if (m2p1.checked == true){
        m2p1.checked = false;
        score = score - 10;
    }
        score = score + 20;
        displayScore(score);
  } else {
        score = score - 20;
        displayScore(score);
  }
  
});

m3p1.addEventListener("click", function(){
  if (m3p1.checked == true){
    if (m3p2.checked == true){
        m3p2.checked = false;
        score = score - 15;
    }
        score = score + 5;
        displayScore(score);
  } else {
        score = score - 5;
        displayScore(score);
  }
  
});
m3p2.addEventListener("click", function(){
  if (m3p2.checked == true){
    if (m3p1.checked == true){
        m3p1.checked = false;
        score = score - 5;
    }
        score = score + 15;
        displayScore(score);
  } else {
        score = score - 15;
        displayScore(score);
  }
  
});

document.addEventListener('DOMContentLoaded', (event) => {
            let prevValp1 = parseInt(m4p1.value);
            let prevValp2 = parseInt(m4p2.value);
            var currValp1 = 0;
            var currValp2 = 0;
            m4p1.addEventListener('change', (event) => {
                currValp1 = parseInt(event.target.value);
                if (currValp1 !== prevValp1) {
                    
                    // Do something when the value changes
                    var temp = currValp1 + currValp2;
                    console.log(temp);
                    if (currValp1 + currValp2 > 5){
                        error.innerText = "Total number of martians cannot exceed 5";
                        displayScore(score); 
                        //prevValp1 = currValp1;
                        m4p1.value = prevValp1;   
                    }
                    else{
                        if((prevValp1 == 5) && (m4p3.checked == true)){
                            score = score - 20;
                            m4p3.checked = false;
                        }
                        score = score + (currValp1-prevValp1)*10;
                        error.innerText = "";
                        prevValp1 = currValp1;
                        console.log(score);
                        displayScore(score);
                    }
                    
                }
            });
            m4p2.addEventListener('change', (event) => {
                currValp2 = parseInt(event.target.value);
                if (currValp2 !== prevValp2) {
                    
                    // Do something when the value changes
                    if (currValp2 + currValp1 > 5){
                        error.innerText = "Total number of martians cannot exceed 5";
                        displayScore(score); 
                        m4p2.value = prevValp2;   
                    }
                    else{
                        score = score + (currValp2-prevValp2)*5;
                        error.innerText = "";
                        prevValp2 = currValp2;
                        console.log(score);
                        displayScore(score);
                    }
                    
                }
            });
        })

m4p3.addEventListener("click", function(){
  if (m4p3.checked == true){
    if (m4p1.value != 5){
        error.innerText = "Bonus for all martians cannot be scored unless all martians are through the portal";
        displayScore("#");
    }
    else{
        score = score + 20;
        displayScore(score);
    }
  } else {
    if (m4p1.value != 5){
        error.innerText = "";
        displayScore(score);
    }
    else{
        score = score - 20;
        displayScore(score);
    }
  }
  
});

m5p1.addEventListener("click", function(){
  if (m5p1.checked == true){
    if (m5p2.checked == true){
        m5p2.checked = false;
        score = score - 15;
    }
        score = score + 30;
        displayScore(score);
  } else {
        score = score - 30;
        displayScore(score);
  }
  
});

m5p2.addEventListener("click", function(){
  if (m5p2.checked == true){
    if (m5p1.checked == true){
        m5p1.checked = false;
        score = score - 30;
    }
        score = score + 15;
        displayScore(score);
  } else {
        score = score - 15;
        displayScore(score);
  }
  
});

m5p3.addEventListener("click", function(){
  if (m5p3.checked == true){
    //if (m3p1.checked == true){
    //    m3p1.checked = false;
    //    score = score - 5;
    //}
        score = score + 30;
        displayScore(score);
  } else {
        score = score - 30;
        displayScore(score);
  }
  
});

m6p1.addEventListener("click", function(){
  if (m6p1.checked == true){
    //if (m3p1.checked == true){
    //    m3p1.checked = false;
    //    score = score - 5;
    //}
        score = score + 15;
        displayScore(score);
  } else {
        score = score - 15;
        displayScore(score);
  }
  
});

m6p2.addEventListener("click", function(){
  if (m6p2.checked == true){
    //if (m3p1.checked == true){
    //    m3p1.checked = false;
    //    score = score - 5;
    //}
        score = score + 20;
        displayScore(score);
  } else {
        score = score - 20;
        displayScore(score);
  }
  
});

m6p3.addEventListener("click", function(){
  if (m6p3.checked == true){
    //if (m3p1.checked == true){
    //    m3p1.checked = false;
    //    score = score - 5;
    //}
        score = score + 20;
        displayScore(score);
  } else {
        score = score - 20;
        displayScore(score);
  }
  
});

m6p4.addEventListener("click", function(){
  if (m6p4.checked == true){
    //if (m3p1.checked == true){
    //    m3p1.checked = false;
    //    score = score - 5;
    //}
        if ((m6p1.checked == false) || (m6p2.checked == false) || (m6p3.checked == false)){
            error.innerText = "Bonus for all planet orbits can only be scored if all planets score";
        displayScore("#");
        }
        else{
            score = score + 20;
            displayScore(score);
        }
        
  } else {
        if ((m6p1.checked == false) || (m6p2.checked == false) || (m6p3.checked == false)){
            error.innerText = "";
            displayScore(score);
        }
        else{
            score = score - 20;
            displayScore(score);
        }

  }
  
});

m7p1.addEventListener("click", function(){
  if (m7p1.checked == true){
    //if (m3p1.checked == true){
    //    m3p1.checked = false;
    //    score = score - 5;
    //}
        score = score + 30;
        displayScore(score);
  } else {
        score = score - 30;
        displayScore(score);
  }
  
});

document.addEventListener('DOMContentLoaded', (event) => {
            let prevVal = parseInt(pen.value);
            pen.addEventListener('change', (event) => {
                const currVal = parseInt(event.target.value);
                if (currVal !== prevVal) {
                    
                    // Do something when the value changes
                    score = score + (currVal-prevVal)*(-5);
                    prevVal = currVal;
                    console.log(score);
                    displayScore(score)
                }
            });
        })

reset.addEventListener("click", function(){
  m1p1.value = 0;
  m1p2.checked = false;

  m2p1.checked = false;
  m2p2.checked = false;

  m3p1.checked = false;
  m3p2.checked = false;

  m4p1.value = 0;
  m4p2.value = 0;
  m4p3.checked = false;

  m5p1.checked = false;
  m5p2.checked = false;
  m5p3.checked = false;

  m6p1.checked = false;
  m6p2.checked = false;
  m6p3.checked = false;
  m6p4.checked = false;

  m7p1.checked = false;

  pen.value = 0;
  
  score = 0;
  displayScore(score);
});
