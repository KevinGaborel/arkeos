exports.firstCharacterUpperCase = (string) => {
    const firstCharacter = string.substr(0, 1).toUpperCase();
    const secondPart = string.substr(1, string.length).toLowerCase();
    const newString = firstCharacter + secondPart;
    return newString;
};

exports.getOptionsSearch = ({category, theme, order, sort, search, page}) => {
    let options = {};

    
    if (category !== undefined && category !== "false") {
      options.category = category;
    }
    
    if (theme !== undefined && theme !== "false") {
      options.theme = theme;
    }
    
    if (sort !== "created_at") {
      options.orderByFields = "rating";
    } else{
      options.orderByFields = "created_at";
    }
    
    if (order === "DESC"){
      options.order = "DESC";
    } else{
      options.order = "ASC";
    }
    
    if (search !== undefined && search !== 'false') {
      options.search = search;
    }

    options.page = parseInt(page, 10);
    if (typeof options.page !== 'number'){
      options.page = 1
    }
    
    // nombre d'article à afficher pour le moment
    options.nbArticles = 10;
    
    return options;
  };