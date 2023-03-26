import { AppContext } from "../App";
import { useContext } from "react";
function Key(props) {
  const { board, setBoard } = useContext(AppContext);
  const selectLetter = () => {
    const newBoard = [...board];
    newBoard[0][0] = props.keyValue;
    setBoard(newBoard);
  };
  return (
    <div
      onClick={selectLetter}
      className={`border text-sm font-bold border-gray-600 mx-0.5 my-0.5 bg-gray-200  w-8 h-10  rounded py-2  hover:bg-gray-600 text-center ${
        props.bigKey ? "w-[56px] text-[12px]" : ""
      }`}
    >
      {props.keyValue}
    </div>
  );
}
export default Key;
