const CoreModel = require("./coreModel");
const client = require("../client");
class UserViewModel extends CoreModel {

  static tableName = "user_view";
  static fields = [
    "id",
    "username",
    "city",
    "country",
    "species",
    "presentation",
    "profile_picture",
    "created_at",
    "all_id_market",
    "all_animal_in_market",
    "all_price",
    "name",
    "all_url_badge",
  ];
  constructor(obj) {
    super(obj);
  }

  static async showAllMembers(options) {

    const result = await client.query(
      `
        SELECT *
        FROM ${this.tableName}
        ORDER BY "created_at" DESC LIMIT $1`,
      [options.nbMembers]
    );
    const instanceList = [];
    for (const row of result.rows) {
      instanceList.push(new this(row));
    }
    return instanceList;
  }

  static async searchMembers(options) {
    let result;
    if (options.username && options.city) {
      result = await client.query(
        `
            SELECT *
            FROM ${this.tableName}
            WHERE "username" LIKE '%' || $1 || '%' OR "city" LIKE '%' || $2 || '%'
            ORDER BY "created_at" ASC LIMIT $3`,
        [
          options.username,
          options.city,
          options.nbMembers,
        ]
      );
    } else if (options.username) {
      result = await client.query(
        `
            SELECT *
            FROM ${this.tableName}
            WHERE "username" LIKE '%' || $1 || '%'
            ORDER BY "created_at" ASC LIMIT $2`,
        [options.username, options.nbMembers]
      );
    } else if (options.city) {
      result = await client.query(
        `
            SELECT *
            FROM ${this.tableName}
            WHERE "city" LIKE '%' || $1 || '%'
            ORDER BY "created_at" ASC LIMIT $2`,
        [options.city, options.nbMembers]
      );
    } else {
      return { erreur: "Vous n'utiliser pas le bon input O_o" };
    }
    const instanceList = [];
    for (const row of result.rows) {
      instanceList.push(new this(row));
    }
    return instanceList;
  }

}
module.exports = UserViewModel;
