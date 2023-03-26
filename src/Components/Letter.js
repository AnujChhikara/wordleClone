import { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(AppContext);
  console.log(board);
  const letter = board[attemptVal][letterPos];
  return (
    <div className="text-center border h-10 w-10 rounded border-gray-600 p-1 text-lg font-bold">
      {letter}
    </div>
  );
}
export default Letter;
