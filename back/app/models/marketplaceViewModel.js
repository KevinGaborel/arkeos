const CoreModel = require('./coreModel');
const client = require('../client');
const {firstCharacterUpperCase} = require('../utils');

class MarketplaceViewModel extends CoreModel {

    static tableName = 'marketplace_view';
    static fields = [
        'id',
        'scientific_name',
        'locality',
        'phase',
        'born_captivity',
        'price',
        'url_picture',
        'native_country',
        'birth_date',
        'content',
        'created_at',
        'updated_at',
        'author',
        'author_id',
        'profile_picture',
        'category_name'
    ];

    constructor(obj){
        super(obj);
    }

    static async findAsc(options) {
        console.log("dans le asc");
        let result;
        if (options.search === undefined){

            if (options.category === undefined){
                // si il n'y a ni filtre de catégories, ni de themes
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                ORDER BY "created_at" DESC LIMIT $1`, 
                [options.nbArticles]);
            } else if (options.category !== undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                WHERE category_name=$1 
                ORDER BY "created_at" DESC LIMIT $2`, 
                [options.category , options.nbArticles]);
            }

        } else {
            options.search2 = firstCharacterUpperCase(options.search);
            if (options.category === undefined){
                // si il n'y a ni filtre de catégories, ni de themes, mais une recherche de l'user
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%' 
                ORDER BY $3 ASC LIMIT $4`, 
                [options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                WHERE category_name=$1 AND LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' 
                ORDER BY $5 ASC LIMIT $5`, 
                [options.category , options.search, options.search2, options.orderByFields, options.nbArticles]);
            }

        }
        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }

        return instanceList;
    };


    static async findDesc(options) {
        console.log("dans le desc");
        console.log(options.orderByFields, options.order);

        let result;
        if (options.search === undefined){

            if (options.category === undefined){
                // si il n'y a ni filtre de catégories, ni de themes
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                ORDER BY $1 DESC LIMIT $2`, 
                [options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                WHERE category_name=$1 
                ORDER BY $2 DESC LIMIT $3`, 
                [options.category ,options.orderByFields, options.nbArticles]);
            }
        } else {
            options.search2 = firstCharacterUpperCase(options.search);
            if (options.category === undefined){
                // si il n'y a ni filtre de catégories, ni de themes, mais une recherche de l'user
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%' 
                ORDER BY $3 DESC LIMIT $4`, 
                [options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT *
                FROM ${this.tableName} 
                WHERE category_name=$1 AND LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' 
                ORDER BY $5 DESC LIMIT $5`, 
                [options.category , options.search, options.search2, options.orderByFields, options.nbArticles]);
            }

        }

        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }

        return instanceList;
    };
};

module.exports = MarketplaceViewModel;