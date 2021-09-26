const RegexUtils = {    
    controlForm: (input, value) => {
        const email = /^[a-z0-9][a-z._\-0-9]+@[a-z]+\.[a-z]{2,}$/,
        username =  /^([0-9a-zA-Z-'\-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+){5,40}$/,
        password = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?,;.:/§£!@$ %^&*-]).{8,40}$/;

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