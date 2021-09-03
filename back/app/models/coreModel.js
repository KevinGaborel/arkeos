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
        let result;

        if (options.search){
            options.search2 = firstCharacterUpperCase(options.search);
        }

        let preparedQuery = {
            query : options.search ? 
                `SELECT * FROM ${this.tableName} WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%' ORDER BY $3 ASC LIMIT $4`
                : `SELECT * FROM ${this.tableName} ORDER BY $1 DESC LIMIT $2`,

            value: options.search ?
                [options.search, options.search2, options.orderByFields, options.nbArticles]
                : [options.orderByFields, options.nbArticles]
        };
        
        if (!options.category && options.theme && !options.search){
            // si il y a le filtre de theme
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE theme_name=$1 ORDER BY $2 DESC LIMIT $3`;
            preparedQuery.value = [options.theme, options.orderByFields, options.nbArticles];
        } else if (!options.category && options.theme && options.search){
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE theme_name=$1 AND "title" LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' ORDER BY $4 ASC LIMIT $5`;
            preparedQuery.value = [options.theme, options.search, options.search2, options.orderByFields, options.nbArticles];
        }

        else if (options.category && !options.theme && !options.search){
            // si il ya le filtre de categories
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 ORDER BY $2 DESC LIMIT $3`;
            preparedQuery.value =  [options.category, options.orderByFields, options.nbArticles];
        } else if (options.category && !options.theme && options.search){
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 AND "title" LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' ORDER BY $4 ASC LIMIT $5`;
            preparedQuery.value = [options.category, options.search, options.search2, options.orderByFields, options.nbArticles];
        }

        else if (options.category && options.theme && !options.search){
            // si il y a les deux filtres
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 ORDER BY $3 DESC LIMIT $4`;
            preparedQuery.value =  [options.category , options.theme, options.orderByFields, options.nbArticles];
        }else if (options.category && options.theme && options.search){
            preparedQuery.query = `SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 AND "title" LIKE '%' || $3 || '%' OR "title" LIKE '%' || $4 || '%' ORDER BY $5 ASC LIMIT $6`;
            preparedQuery.value = [options.category, options.theme, options.search, options.search2, options.orderByFields, options.nbArticles];
        }

        result = await client.query(preparedQuery.query, preparedQuery.value);

        return result.rows;
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