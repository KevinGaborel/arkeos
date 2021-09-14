import './style.css';

function Score({score}) {
 

  return (
  <div className='article-score' >Score: {score !== null ? score : 0}</div>
  );
}

export default Score;