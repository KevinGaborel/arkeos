exports.firstCharacterUpperCase = (string) => {
    const firstCharacter = string.substr(0, 1).toUpperCase();
    const secondPart = string.substr(1, string.length).toLowerCase();
    const newString = firstCharacter + secondPart;
    return newString;
};

exports.getOptionsSearch = ({category, theme, date, rating, search}) => {
    let options = {};

    if (category !== undefined && category !== "false") {
      options.category = category;
    }

    if (theme !== undefined && theme !== "false") {
      options.theme = theme;
    }

    if (
      rating !== undefined &&
      rating !== "false" &&
      (date === undefined || date === "false")
    ) {
      options.orderByFields = "rating";
      options.order = "ASC";
      
    } else{
        options.orderByFields = "created_at";
        //todoo à implémenter coté front
        //permet de passer d'un classement croissant à décroissant.
        //options.order = date;
        options.order = "ASC"
    }

    if (search !== undefined) {
      options.search = search;
    }

    // nombre d'article à afficher pour le moment
    options.nbArticles = 20;

    return options;
};