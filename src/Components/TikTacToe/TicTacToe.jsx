import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["","","","","","","","","",];

const TicTacToe = () => {
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock || data[num] !== ""){
      return;
    }

    //player move (x)
    e.target.innerHTML = `<img src='${cross_icon}'>`;
    data[num] = "x";

    if (checkWin()){
      return;
    }

    setTimeout(computerMove, 500);
  };

  const computerMove = () => {
    let bestMove = findBestMove();
    if (bestMove !== -1){
      let box = box_array[bestMove].current;
      box.innerHTML = `<img src='${circle_icon}'>`;
      data[bestMove] = 'o';
    }

    checkWin();
  };

  const findBestMove = () => {
    let bestVal = -Infinity;
    let bestMove = -1;

    for (let i=0; i<9; i++){
      if (data[i] === ""){
        //make the move
        data[i] = "o";

        //compute the minimax value for this move
        let moveVal = minimax(0, false);

        //undo the move
        data[i] = "";

        //if the value of the current move is greater than the best value, update bestMove
        if (moveVal > bestVal){
          bestMove = i;
          bestVal = moveVal;
        }
      }
    }
    return bestMove;
  }

  const minimax = (depth, isMaximizing) => {
    let score = evaluate();

    //if the computer (o) has won
    if (score === 10) return score - depth;

    //if player(x) has won
    if (score===-10) return score + depth;

    //if its a draw
    if (!data.includes("")) return 0;

    if (isMaximizing){
      let best = -Infinity;

      for (let i=0; i<9; i++){
        if (data[i] === ""){
          data[i] = "o";
          best = Math.max(best, minimax(depth +1, false));
          data[i] = "";
        }
      }
      return best;
    }
    else{
      let best = Infinity;

      for (let i=0; i<9; i++){
        if (data[i] === ""){
          data[i] = "x";
          best = Math.min(best, minimax(depth +1, true));
          data[i] = "";
        }
      }
      return best;
    }
  }

  const evaluate = () => {
    //winning patterns
    const winPatterns =[
      [0,1,2], [3,4,5], [6,7,8], //Rows
      [0,3,6], [1,4,7], [2,5,8], //Columns
      [0,4,8], [2,4,6], //Diagonals
    ];

    //check if someone won
    for (let pattern of winPatterns){
      const [a,b,c] = pattern;
      if (data[a] === data[b] && data[b] === data[c] && data[a]!== ""){
        if (data[a] === "o") return 10; //Computer wins
        if (data[a] === "x") return -10; //Player wins
      }
    }

    return 0; //No winner
  }

  const checkWin = () => {
    let result = evaluate();

    if (result ===10){
      titleRef.current.innerHTML = "Computer wins!";
      setLock(true);
      return true;
    }
    else if (result ===-10){
      titleRef.current.innerHTML = "Player wins";
      setLock(true);
      return true;
    }
    else if (!data.includes("")){
      titleRef.current.innerHTML = "It's a draw!";
      setLock(true);
      return true;
    }
    return false;
  }

  const reset = () => {
    setLock(false);
    data = ["","","","","","","","","",];
    titleRef.current.innerHTML = "The Unbeatable Game of Tic-Tac-Toe In <span>React</span>";
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    })
  }

  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>The Unbeatable Game of Tic-Tac-Toe In <span>React</span></h1>
      <div className="board">
        <div className="row1">
            <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
            <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
            <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>  
      <button className='reset' onClick={() => {reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe
