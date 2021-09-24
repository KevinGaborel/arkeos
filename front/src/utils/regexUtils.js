const RegexUtils = {    
    controlForm: (input, value) => {
        const email = /^[a-z0-9][a-z._\-0-9]+@[a-z]+\.[a-z]+$/,
        username =  /^([a-zA-Z-'\-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ ]+){4,40}$/,
        password = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?,;.:/§£!@$ %^&*-]).{8,30}$/;

        if(input === "email" && email.exec(value)){
            return true;
        } else if(input === "username" && username.exec(value)){
            return true;
        } else if(input === 'password' && password.exec(value)){
            return true;
        }
        return false;
    }
};

export default RegexUtils;