import './style.css';

function ButtonGreen({value, disabled}) {
  return (
    <button type="submit" className="modal-btn-submit" disabled={disabled}>{value}</button>
  );
}

export default ButtonGreen;