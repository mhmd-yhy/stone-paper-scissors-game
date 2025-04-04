import Header from "./components/Header";
import Comp from "./components/Comp";
import You from "./components/You";
import Score from "./components/Score";
import MssageAlert from "./components/MssageAlert";
import Logic from "./Logic";

function App() {
  const [compChoose, onChoose_You, score, alertMessage] = Logic();
  return (
    <div className="App">
      <Header />
      <Comp compChoose={compChoose} />
      <You onChoose_You={onChoose_You} />
      <Score score={score} />
      <MssageAlert alertMessage={alertMessage} />
      <div className="flex justify-center mt-5">
        <button className="py-2 w-52 border border-yellow-700 rounded-lg shadow-md shadow-yellow-700 text-center m-auto">إعادة اللعب</button>
      </div>
    </div>
  );
}

export default App;
