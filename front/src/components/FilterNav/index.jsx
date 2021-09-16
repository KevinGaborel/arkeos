import './style.css';
import React from 'react';
import Loader from '../Loader';

function FilterNav({category, theme, search, sort, numberResults, dataLoading}) {

  return (
    <section id="menu-filtre">
      <div className='filter-container_center'>
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

      <div className='filter-container_center'>
        <select name="sort-by" id="sort-by" onChange={sort} >
            <option value='created_at-DESC' >Trier par: Nouveautés</option>
            <option value='created_at-ASC' >Trier par: Plus anciens</option>
            <option value='rating-DESC' >Trier par: Mieux noté</option>
            <option value='rating-ASC' >Trier par: Moins bien notés</option>
        </select>
      </div>

      <span id='filter-number-results'>
        {dataLoading ? `Il y a ${numberResults} résultat(s)` : <Loader />}
      </span>
    </section>
  );
}

export default FilterNav;
