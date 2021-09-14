import './style.css';
import React from 'react';

function FilterNav({category, theme, search, numberResults}) {

  return (
    <React.Fragment>
      <div id='filter-search'>
        <div id="loupe"></div>
        <input type="search" name="search-bar" id="search-bar" onChange={search}/>
      </div>
        
      <div id='select-container'>
        <select name="category" id="category" onChange={category} >
          <option value='false' >Catégories</option>
          <option value='Lézards' >Lézards</option>
          <option value='Amphibiens' >Amphibiens</option>
          <option value='Serpents' >Serpents</option>
          <option value='Tortues' >Tortues</option>
        </select>

        <select name="theme" id="theme" onChange={theme} >
          <option value='false'>Thèmes</option>
          <option value='Soins et pathologies'>Soins et pathologies</option>
          <option value='Terrarium'>Terrarium</option>
          <option value='Alimentation'>Alimentation</option>
          <option value='Génétique'>Génétique</option>
          <option value='Anatomie et biologie'>Anatomie et biologie</option>
          <option value='Législation'>Législation</option>
          <option value='Biotope et histoire naturelle'>Biotope et histoire naturelle</option>
        </select>
      </div>

      <span id='filter-number-results'>
        Il y a {numberResults} résultat(s)
      </span>
    </React.Fragment>
  );
}

export default FilterNav;
