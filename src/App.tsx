import { useEffect, useState } from "react";

// Which player's version is this? Decided by the URL: /#/player1 or /#/player2
const player = window.location.hash === "#/player2" ? 2 : 1;
const SAVE_KEY = `escape-poc-p${player}`;
const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}`;

window.addEventListener("hashchange", () => window.location.reload());

export default function App() {
  const [lampOn, setLampOn] = useState<boolean>(
    () => localStorage.getItem(SAVE_KEY) === "on"
  );

  useEffect(() => {
    localStorage.setItem(SAVE_KEY, lampOn ? "on" : "off");
  }, [lampOn]);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Player {player}</h1>
      <img
        src={img(lampOn ? "lamp_on.svg" : "lamp_off.svg")}
        alt="lamp"
        width={200}
        style={{ cursor: "pointer" }}
        onClick={() => setLampOn((v) => !v)}
      />
      <p>
        <a href="#/player1">Player 1</a> | <a href="#/player2">Player 2</a>
      </p>
    </div>
  );
}
