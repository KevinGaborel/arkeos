import './style.css';
import { Fragment, useState, useEffect } from 'react';

function ButtonGreen({value}) {
  return (
    <button type="submit" id="modal-btn-submit">{value}</button>
  );
}

export default ButtonGreen;