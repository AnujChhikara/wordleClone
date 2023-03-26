import "./App.css";
import { useState, createContext } from "react";
import { boardDefault } from "./Words";
import Keyboard from "./Components/Keyboard";
import Board from "./Components/Board";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  return (
    <div className="flex flex-col items-center justify-center w-screen space-y-6 text-xl">
      <h1 className="text-5xl font-bold text-center mt-2 underline">Wordle</h1>
      <AppContext.Provider
        value={{ board, setBoard, currentAttempt, setCurrentAttempt }}
      >
        <Board board={board} setBoard={setBoard} />
        <Keyboard board={board} setBoard={setBoard} />
      </AppContext.Provider>{" "}
    </div>
  );
}

export default App;
