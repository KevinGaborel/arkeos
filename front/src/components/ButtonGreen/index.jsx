import './style.css';
import { Fragment, useState, useEffect } from 'react';

function ButtonGreen({value, disabled}) {
  return (
    <button type="submit" className="modal-btn-submit" disabled={disabled}>{value}</button>
  );
}

export default ButtonGreen;