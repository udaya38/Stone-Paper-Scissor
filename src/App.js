import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [game, setGame] = useState({ name: "" });
  const [clicked, setClicked] = useState(false);
  const [win, setWin] = useState("Start the game");
  const [client, setClient] = useState(0);
  const [computer, setComputer] = useState(0);

  const getting = (parameter) => {
    //setgame.name("");
    setClicked(true);
    const buttonClicked = parameter.currentTarget.value;

    const arr = ["stone", "paper", "scissor"];
    const num = Math.floor(Math.random() * 3);
    setGame({ name: arr[num] });
    // console.log(arr[num]);
    //console.log(buttonClicked);
    // console.log(game.name);
    //setClicked(true);

    if (buttonClicked === "stone" && arr[num] === "paper") {
      setComputer(computer + 1);
      setWin("Computer wins");
    } else if (buttonClicked === "stone" && arr[num] === "scissor") {
      setClient(client + 1);
      setWin("You wins");
    } else if (buttonClicked === "paper" && arr[num] === "scissor") {
      setComputer(computer + 1);
      setWin("Computer wins");
    } else if (buttonClicked === "paper" && arr[num] === "stone") {
      setClient(client + 1);
      setWin("You wins");
    } else if (buttonClicked === "scissor" && arr[num] === "stone") {
      setComputer(computer + 1);
      setWin("Computer wins");
    } else if (buttonClicked === "scissor" && arr[num] === "paper") {
      setClient(client + 1);
      setWin("You wins");
    } else {
      setClient(client);
      setComputer(computer);
      setWin("Match tied");
    }
  };

  return (
    <div>
      <h2 className="comp">Stone->Paper->Scissor</h2>
      <div className="score-card">
        <div className="your_score">
          <h2>Your Score</h2>
          <p className="count">{client}</p>
        </div>
        <div className="your_score">
          <h2>Computer Score</h2>
          <p className="count">{computer}</p>
        </div>
      </div>
      <div className="comp">
        {clicked && <h3>Computer choosen: {game.name}</h3>}
      </div>
      {(() => {
        if (computer === 10) {
          setClient(0);
          setComputer(0);
          setWin("Computer wins the first set");
          return <div className="final">{win}</div>;
        } else if (client === 10) {
          setClient(0);
          setComputer(0);
          setWin("You wins the first set");
          return <div className="final">{win}</div>;
        } else {
          return (
            <div>
              <p>
                <b className="final">{win}</b>
              </p>
            </div>
          );
        }
      })()}
      <div className="container">
        <div>
          <button onClick={getting} value="stone">
            <img
              src="https://www.pngitem.com/pimgs/m/226-2260873_transparent-rock-paper-scissors-png-png-download.png"
              alt="stone"
              className="stone"
            />
          </button>
        </div>
        <div>
          <button onClick={getting} value="paper">
            <img
              src="https://www.pngitem.com/pimgs/m/266-2667795_rock-paper-scissors-png-transparent-png.png"
              alt="paper"
              className="paper"
            />
          </button>
        </div>
        <div>
          <button onClick={getting} value="scissor">
            <img
              src="https://www.clipartkey.com/mpngs/m/5-54540_rock-paper-scissors-random-rock-paper-scissors-png.png"
              alt="scissors"
              className="scissors"
            />
          </button>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
