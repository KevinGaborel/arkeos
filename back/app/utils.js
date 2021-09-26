exports.firstCharacterUpperCase = (string) => {
  const firstCharacter = string.substr(0, 1).toUpperCase();
  const secondPart = string.substr(1, string.length).toLowerCase();
  const newString = firstCharacter + secondPart;
  return newString;
};

exports.getOptionsSearch = ({category, theme, order, sort, search, page}) => {
  let options = {};
  
  // nombre d'article à afficher pour le moment
  options.nbArticles = 10;
    
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

  if (options.page === 1){
    options.page = 0;
  } else{
    options.page = (options.page - 1) * options.nbArticles;
  }
    
  return options;
};
   
exports.controlForm = (input, value) => {
      const email = /^[a-z0-9][a-z._\-0-9]+@[a-z]+\.[a-z]{2,}$/,
      username =  /^([a-zA-Z-'\-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ ]+){5,40}$/,
      password = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?,;.:/§£!@$ %^&*-]).{8,40}$/;

      if(input === "email" && email.exec(value)){
          return true;
      } else if(input === "username" && username.exec(value)){
          return true;
      } else if(input === 'password' && password.exec(value)){
          return true;
      }
      return false;
  };