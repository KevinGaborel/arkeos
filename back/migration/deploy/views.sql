-- Deploy arkeos:views to pg

BEGIN;

-- vue qui permet de voir tout les articles sans les fiches d'élevage, avec toutes les infos utile

CREATE VIEW "public"."article_without_breeder" AS
SELECT
    "article"."id",
    "article"."title",
    "article"."content",
    "article"."url_picture",
    TO_CHAR("article"."created_at", 'DD-MM-YYYY HH24:MI') "created_at",
    TO_CHAR("article"."updated_at", 'DD-MM-YYYY HH24:MI') "updated_at",
    "user"."username" AS "author",
    "user"."id" AS "author_id",
    "user"."profile_picture" AS "author_picture",
    "theme"."name" AS "theme_name",
    "theme"."color" AS "theme_color",
    "category"."name" AS "category_name",
    SUM("article_rating"."rating") "rating"

FROM "article"

FULL JOIN "user" ON "user"."id" = "article"."author_id"
FULL JOIN "theme" ON "theme"."id" = "article"."theme_id"
FULL JOIN "category" ON "category"."id" = "article"."category_id"
FULL JOIN "article_rating" ON "article_rating"."article_id" = "article"."id"

WHERE "article"."breeding_sheet"='false'
GROUP BY "article"."id", "user"."id", "theme"."id", "category"."id";

-- vue qui permet de voir tout les articles sans les fiches d'élevage, avec toutes les infos utile

CREATE VIEW "public"."article_breeder" AS
SELECT
    "article"."id",
    "article"."title",
    "article"."content",
    "article"."created_at",
    "article"."updated_at",
    "user"."username" AS "author",
    "category"."name" AS "category_name",
    SUM("article_rating"."rating") "rating"

FROM "article"

FULL JOIN "user" ON "user"."id" = "article"."author_id"
FULL JOIN "category" ON "category"."id" = "article"."category_id"
FULL JOIN "article_rating" ON "article_rating"."article_id" = "article"."id"

WHERE "article"."breeding_sheet"='true'
GROUP BY "article"."id", "user"."id", "category"."id";

-- vue pour la marketplace

CREATE VIEW "public"."marketplace_view" AS
SELECT
    "marketplace"."id",
    "marketplace"."scientific_name",
    "marketplace"."locality",
    "marketplace"."phase",
    "marketplace"."url_picture",
    "marketplace"."born_captivity",
    "marketplace"."price",
    "marketplace"."native_country",
    TO_CHAR("marketplace"."birth_date", 'DD-MM-YYYY HH24:MI') "birth_date",
    "marketplace"."content",
    TO_CHAR("marketplace"."created_at", 'DD-MM-YYYY HH24:MI') "created_at",
    "marketplace"."updated_at",
    "user"."username" AS "author",
    "user"."profile_picture" AS "profile_picture",
    "user"."id" AS "author_id",
    "category"."name" AS "category_name"

FROM "marketplace"

JOIN "user" ON "user"."id" = "marketplace"."author_id"
JOIN "category" ON "category"."id" = "marketplace"."category_id";


-- vue pour les membres (user)

CREATE VIEW "public"."user_view" AS
SELECT "user".*,
    ARRAY_AGG(DISTINCT "marketplace"."id") AS "all_id_market",
    ARRAY_AGG(DISTINCT "marketplace"."scientific_name") AS "all_animal_in_market",
    ARRAY_AGG(DISTINCT "marketplace"."price") AS "all_price",
    ARRAY_AGG(DISTINCT "badge"."name") AS "all_badge",
    ARRAY_AGG(DISTINCT "badge"."picture") AS "all_url_badge"

FROM "user"

FULL JOIN "marketplace" ON "user"."id" = "marketplace"."author_id"
FULL JOIN "user_has_badge" ON "user"."id" = "user_has_badge"."user_id"
FULL JOIN "badge" ON "user_has_badge"."user_id" = "badge"."id"

GROUP BY "user"."id";


-- view pour le chat

CREATE VIEW "public"."chat_view" AS
SELECT  "message".*,
        "user"."username" AS "author"

FROM "message"

FULL JOIN "user" ON "user"."id" = "message"."sender_id";


COMMIT;