import "./Result.scss";
function Result({ result, maxStep, onClick }) {
  return (
    <div className="result">
      <img className="result__image" src="./static/image/result.png" />
      <h2>
        {result} из {maxStep} правильно
      </h2>
      <button onClick={onClick}>Попробовать снова</button>
    </div>
  );
}

export default Result;
