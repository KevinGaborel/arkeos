import React from 'react';
import './style.css';

const Legislation = () => (

  <div className="Law_page">

    <div className="Law_description">
      <h1 className="L1"> En France, le commerce et la détention d'animaux d'espèces non domestiques sont réglementés.</h1>
      <p className="L2">Il existe trois niveaux de réglementation :</p>
     
        <p className="L3">La réglementation internationale</p>
        <div className="L5">
        <p className="L4">La convention de Washigton, aussi connue sous le nom de CITES, est un accord intergouvernemental signé en 1973.</p>
         <p className="L4"> Il a pour objectif de garantir que le commerce des espèces inscrites dans ses annexes ne nuit pas à la conservation de la biodiversité.
        </p>
        </div>
        <p className="L3">la réglementation européenne</p>
        <p className="L2">Il s'agit d'une adaptatin de la CITES par l'Union Européenne.
        </p>
        <p className="L3">la réglementation française</p>

        <p className="L3 L7"> ⚠ Il est interdit de poster une annonce dans la Marketplace si elle concerne une espèce soumise au certificat de capacité dès le premier individu. ⚠</p>
    </div>

    <div className="Law_container">



      <div className="Law_card">
        <div className="Law_card_picture">
          <img
            className="Law_picture"
            src="https://bibliotheques.icp.fr/medias/photo/legifrance_1469025559353-jpg"
            alt="Image de l'article"
          ></img>
        </div>
        <div className="Law_card_body">
          <h1  className="L6" >La convention de Washington</h1>
          <hr className="divider"></hr>
          <p className="Article_body">
          <p className="L5"><a target="_blank" href="https://cites.org/fra/disc/text.php">La CITES </a></p>
          </p>
        </div>
      </div>

      <div className="Law_card">
        <div className="Law_card_picture">
          <img
            className="Law_picture"
            src="https://bibliotheques.icp.fr/medias/photo/legifrance_1469025559353-jpg"
            alt="Image de l'article"
          ></img>
        </div>
        <div className="Law_card_body">
          <h1 className="L6">la réglementation européenne</h1>
          <hr className="divider"></hr>
          <p className="Article_body">
          <p className="L5"><a target="_blank" href="https://www.lafermetropicale.com/documents/legislation/RCE-318-08.pdf">Le réglement CE </a></p>
          </p>
        </div>
      </div>

      <div className="Law_card">
        <div className="Law_card_picture">
          <img
            className="Law_picture"
            src="https://bibliotheques.icp.fr/medias/photo/legifrance_1469025559353-jpg"
            alt="Image de l'article"
          ></img>
        </div>
        <div className="Law_card_body">
          <h1 className="L6">la réglementation française</h1>
          <hr className="divider"></hr>
          <div className="Law_article_body">

          <p className="L5"><a target="_blank" href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000037491137/">L'arrêté du 8 octobre 2018</a></p>
          
          <p className="L5"><a target="_blank" href="https://www.lafermetropicale.com/documents/legislation/ListeSpDangereuses.pdf">Arrêté du 21 novembre 1997</a></p>

          <p className="L5"><a target="_blank" href="https://www.lafermetropicale.com/documents/legislation/guyane.pdf">Arrêté "Guyane" (arrêté du 15 mai 1986)</a></p>

          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Legislation
