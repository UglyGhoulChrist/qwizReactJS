import "./Game.scss";
function Game({ progress, title, variants, image, correct, onClick }) {
  const PATH = "./static/image/";
  return (
    <>
      <div className="progress">
        <div style={{ width: progress }} className="progress__inner"></div>
      </div>
      <div className="question">
        <img className="question__image" src={PATH + image} alt="Animals" />
        <div>
          <h2 className="question__h2">{title}</h2>
          <ul>
            {variants.map((variant, index) => (
              <li key={index} onClick={() => onClick(index === correct)}>
                {variant}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Game;
