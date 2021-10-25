import './style.css';

function Score({score, setRating}) {

  return (
  <button className='article-score' onClick={(e) => setRating()}> {score !== null ? score : 0} </button>
  );
}

export default Score;