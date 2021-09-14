const client = require('../client');
const {firstCharacterUpperCase} = require('../utils');

class CoreModel {

    static tableName = null;
    static fields = null;
    dataValues = {};

    constructor(obj) {
        for (const prop in obj) {
            this.dataValues[prop] = obj[prop];
        }
    };

    /**
     * Setter pour les données de l'entité
     */
    set data(values) {
        for (const field of this.contructor.fields) {
            if (values[field]) {
                this.dataValues[field] = values[field];
            }
        }
    }

    static async find(options) {
        if (options.search){
            options.search2 = firstCharacterUpperCase(options.search);
        }

        let preparedQuery = {
            query : options.search ? 
                `SELECT * FROM ${this.tableName} WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%' 
                ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $3`
                : `SELECT * FROM ${this.tableName} ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $1`,
                
            valueQuery: options.search ?
                [options.search, options.search2, options.nbArticles]
                : [options.nbArticles],

            count: options.search ? 
            `SELECT COUNT(*) FROM ${this.tableName} WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%'`
            : `SELECT COUNT(*) FROM ${this.tableName}`,

            valueCount: options.search ?
                [options.search, options.search2]
                : []
            
        };
        
        if (!options.category && options.theme && !options.search){
            // si il y a le filtre de theme
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE theme_name=$1 ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $2`;
            preparedQuery.valueQuery = [options.theme, options.nbArticles];

            preparedQuery.count = `SELECT COUNT(*) FROM ${this.tableName} WHERE theme_name=$1`;
            preparedQuery.valueCount = [options.theme];
        } else if (!options.category && options.theme && options.search){
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE theme_name=$1 AND "title" LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' 
            ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $4`;
            preparedQuery.valueQuery = [options.theme, options.search, options.search2, options.nbArticles];

            preparedQuery.count = `SELECT COUNT(*) FROM ${this.tableName} WHERE theme_name=$1 AND "title" LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%'`;
            preparedQuery.valueCount = [options.theme, options.search, options.search2];
        }

        else if (options.category && !options.theme && !options.search){
            // si il ya le filtre de categories
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $2`;
            preparedQuery.valueQuery =  [options.category, options.nbArticles];

            preparedQuery.count = `SELECT COUNT(*) FROM ${this.tableName} WHERE category_name=$1`;
            preparedQuery.valueCount =  [options.category];
        } else if (options.category && !options.theme && options.search){
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 AND "title" LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' 
            ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $4`;
            preparedQuery.valueQuery = [options.category, options.search, options.search2, options.nbArticles];

            preparedQuery.count = `SELECT COUNT(*) FROM ${this.tableName} WHERE category_name=$1 AND "title" LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%'`;
            preparedQuery.valueCount = [options.category, options.search, options.search2];
        }

        else if (options.category && options.theme && !options.search){
            // si il y a les deux filtres
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 
            ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $3`;
            preparedQuery.valueQuery =  [options.category , options.theme, options.nbArticles];

            preparedQuery.count = `SELECT COUNT(*) FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2`;
            preparedQuery.valueCount =  [options.category , options.theme];
        }else if (options.category && options.theme && options.search){
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 
            AND "title" LIKE '%' || $3 || '%' OR "title" LIKE '%' || $4 || '%' ORDER BY ${options.orderByFields} DESC NULLS LAST LIMIT $5`;
            preparedQuery.valueQuery = [options.category, options.theme, options.search, options.search2, options.nbArticles];

            preparedQuery.count = `SELECT COUNT(*) FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 
            AND "title" LIKE '%' || $3 || '%' OR "title" LIKE '%' || $4 || '%'`;
            preparedQuery.valueCount = [options.category, options.theme, options.search, options.search2];
        }

        const articles = await client.query(preparedQuery.query, preparedQuery.valueQuery);
        const numberTotalResult = await client.query(preparedQuery.count, preparedQuery.valueCount);

        const result = {
            articles: articles.rows,
            count: numberTotalResult.rows[0].count
        }

        return result;
    };

    static async findByPk(id) {
        const result = await client.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);

        if (!result.rows[0]) {
            return null;
        }
        return new this(result.rows[0]);
    };

    async update() {

        const preparedQuery = {

            text: `
                SELECT * FROM update_${this.constructor.tableName}($1)
            `,
            values: [this.dataValues]
        };

        const result = await client.query(preparedQuery);
        this.dataValues = result.rows[0];

    };

    static async delete(id) {
        try {
            const result = await client.query(`DELETE FROM "${this.tableName}" WHERE id=$1 RETURNING *`, [id]);
            if (result.rows[0]) {
                return "Delete perform !";
            } else {
                return "Error, could not be deleted";
            }
        } catch (error) {
            console.trace(error);
        }
    }


}

module.exports = CoreModel;