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
            // values.birthdate ?
            if (values[field]) {
                //this.dataValues.birthdate = values.birthdate
                this.dataValues[field] = values[field];
            }
        }
    }

    static async findAsc(options) {
        console.log("dans le asc");
        let result;
        if (options.search === undefined){

            if (options.category === undefined && options.theme === undefined){
                // si il n'y a ni filtre de catégories, ni de themes
                result = await client.query(`SELECT * FROM ${this.tableName} ORDER BY "created_at" DESC LIMIT $1`, [options.nbArticles]);
            } else if (options.category === undefined && options.theme !== undefined){
                // si il y a le filtre de theme
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE theme_name=$1 ORDER BY "created_at" DESC LIMIT $2`, [options.theme, options.nbArticles]);
            } else if (options.category !== undefined && options.theme === undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 ORDER BY "created_at" DESC LIMIT $2`, [options.category, options.nbArticles]);
            } else if (options.category !== undefined && options.theme !== undefined){
                // si il y a les deux filtres
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 ORDER BY "created_at" DESC LIMIT $3`, [options.category , options.theme, options.nbArticles]);
            }

        } else {
            options.search2 = firstCharacterUpperCase(options.search);
            if (options.category === undefined && options.theme === undefined){
                // si il n'y a ni filtre de catégories, ni de themes, mais une recherche de l'user
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%' ORDER BY $3 ASC LIMIT $4`, [options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category === undefined && options.theme !== undefined){
                // si il y a le filtre de theme
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE theme_name=$1 AND LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' ORDER BY $4 ASC LIMIT $5`, [options.theme , options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined && options.theme === undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 AND LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' ORDER BY $5 ASC LIMIT $5`, [options.category , options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined && options.theme !== undefined){
                // si il y a les deux filtres
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 AND LIKE '%' || $3 || '%' OR "title" LIKE '%' || $4 || '%' ORDER BY $5 ASC LIMIT $6`, [options.category , options.theme, options.search, options.search2, options.orderByFields, options.nbArticles]);
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

            if (options.category === undefined && options.theme === undefined){
                // si il n'y a ni filtre de catégories, ni de themes
                result = await client.query(`SELECT * FROM ${this.tableName} ORDER BY $1 DESC LIMIT $2`, [options.orderByFields, options.nbArticles]);
            } else if (options.category === undefined && options.theme !== undefined){
                // si il y a le filtre de theme
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE theme_name=$1 ORDER BY $2 DESC LIMIT $3`, [options.theme ,options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined && options.theme === undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 ORDER BY $2 DESC LIMIT $3`, [options.category ,options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined && options.theme !== undefined){
                // si il y a les deux filtres
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 ORDER BY $3 DESC LIMIT $4`, [options.category , options.theme, options.orderByFields, options.nbArticles]);
            }
        } else {
            options.search2 = firstCharacterUpperCase(options.search);
            if (options.category === undefined && options.theme === undefined){
                // si il n'y a ni filtre de catégories, ni de themes, mais une recherche de l'user
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE "title" LIKE '%' || $1 || '%' OR "title" LIKE '%' || $2 || '%' ORDER BY $3 DESC LIMIT $4`, [options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category === undefined && options.theme !== undefined){
                // si il y a le filtre de theme
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE theme_name=$1 AND LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' ORDER BY $4 DESC LIMIT $5`, [options.theme , options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined && options.theme === undefined){
                // si il ya le filtre de categories
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 AND LIKE '%' || $2 || '%' OR "title" LIKE '%' || $3 || '%' ORDER BY $5 DESC LIMIT $5`, [options.category , options.search, options.search2, options.orderByFields, options.nbArticles]);
            } else if (options.category !== undefined && options.theme !== undefined){
                // si il y a les deux filtres
                result = await client.query(`SELECT * FROM ${this.tableName} WHERE category_name=$1 AND theme_name=$2 AND LIKE '%' || $3 || '%' OR "title" LIKE '%' || $4 || '%' ORDER BY $5 DESC LIMIT $6`, [options.category , options.theme, options.search, options.search2, options.orderByFields, options.nbArticles]);
            }

        }

        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }

        return instanceList;
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