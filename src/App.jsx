import "./App.scss";
import questions from "./questions.js";
import Game from "./components/Game";
import Result from "./components/Result";
import { useState, useEffect } from "react";

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const maxStep = questions.length;
  const progress = `${~~(((step + 1) * 100) / maxStep)}%`;
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onClickVariant = (res) => {
    setStep((prev) => prev + 1);
    res && setResult((prev) => prev + 1);
  };

  function newGame() {
    setStep(0);
    setResult(0);
  }

  return (
    <div className="App">
      <h1 className={`start ${loading || "start__loaded"}`}>QUIZ</h1>

      {(step < maxStep && (
        <Game {...question} onClick={onClickVariant} progress={progress} />
      )) || <Result result={result} maxStep={maxStep} onClick={newGame} />}
    </div>
  );
}

export default App;
