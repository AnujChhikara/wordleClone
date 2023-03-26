import Key from "./Key";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {keys1.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="flex">
        {keys2.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>
      <div className="flex">
        <Key keyValue={"ENTER"} bigKey />
        {keys3.map((key) => {
          return <Key keyValue={key} />;
        })}
        <Key keyValue={"DELETE"} bigKey />
      </div>
    </div>
  );
}
export default Keyboard;
