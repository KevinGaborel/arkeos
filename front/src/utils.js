const utils = {    
    baseUrl: 'http://localhost:3000/',

    getId(){
        let str = window.location.href;
        const result = str.split('-');
        return result[result.length - 1];
    },
    
    getSlug(title){
        return title.toLowerCase().replaceAll(' ', '-');
    }
};
export default utils;