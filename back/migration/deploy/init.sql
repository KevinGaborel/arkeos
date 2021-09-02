-- Deploy arkeos:init to pg

BEGIN;

CREATE TABLE "theme" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL UNIQUE,
    "color" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "username" text NOT NULL UNIQUE,
    "email" text NOT NULL UNIQUE,
    "password" text NOT NULL,
    "city" text,
    "country" text,
    "presentation" text,
    "species" text,
    "profile_picture" text DEFAULT 'avatar.png',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "marketplace" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "scientific_name" text NOT NULL,
    "locality" text,
    "phase" text,
    "born_captivity" boolean NOT NULL,
    "price" real NOT NULL,
    "url_picture" text DEFAULT 'cameleon.png',
    "native_country" text NOT NULL,
    "birth_date" date NOT NULL,
    "content" text,
    "author_id" integer NOT NULL REFERENCES "user" ("id"),
    "category_id" integer NOT NULL REFERENCES "category" ("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "badge" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "picture" text NOT NULL
);

CREATE TABLE "question" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL,
    "content" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ,
    "deleted_at" TIMESTAMPTZ,
    "author_id" integer NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "theme_id" integer NOT NULL REFERENCES "theme" ("id") ON DELETE CASCADE,
    "category_id" integer NOT NULL REFERENCES "category" ("id") ON DELETE CASCADE
);

CREATE TABLE "response" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ,
    "deleted_at" TIMESTAMPTZ,
    "author_id" integer NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "question_id" integer NOT NULL REFERENCES "question" ("id") ON DELETE CASCADE
);

CREATE TABLE "article" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" text NOT NULL UNIQUE,
    "content" text NOT NULL,
    "breeding_sheet" boolean NOT NULL,
    "url_picture" text DEFAULT 'frog.jpg',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ,
    "deleted_at" TIMESTAMPTZ,
    "author_id" integer NOT NULL REFERENCES "user" ("id"),
    "category_id" integer REFERENCES "category" ("id"),
    "theme_id" integer REFERENCES "theme" ("id")
);

CREATE TABLE "photo" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "location" text NOT NULL,
    "url_picture" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "article_id" integer REFERENCES "article" ("id") ON DELETE CASCADE,
    "marketplace_id" integer REFERENCES "marketplace" ("id") ON DELETE CASCADE,
    "response_id" integer REFERENCES "response" ("id") ON DELETE CASCADE,
    "question_id" integer REFERENCES "question" ("id") ON DELETE CASCADE,
    "author_id" integer NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);

CREATE TABLE "comment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ,
    "author_id" integer NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "article_id" integer NOT NULL REFERENCES "article" ("id") ON DELETE CASCADE
);

CREATE TABLE "discussion" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "created_by" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "delete_by" text
);

CREATE TABLE "message" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "discussion_id" integer REFERENCES "discussion" ("id") ON DELETE CASCADE,
    "receiver_id" integer NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
    "sender_id" integer NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);


-- Tables de liaison --


CREATE TABLE "article_rating" (
    "article_id" INT NOT NULL REFERENCES "article"("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "rating" int NOT NULL,
    PRIMARY KEY ("article_id", "user_id")
);

CREATE TABLE "response_rating" (
    "response_id" INT NOT NULL REFERENCES "response"("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "rating" int NOT NULL,
    PRIMARY KEY ("response_id", "user_id")
);

CREATE TABLE "wishlist" (
    "marketplace_id" INT NOT NULL REFERENCES "marketplace"("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    PRIMARY KEY ("marketplace_id", "user_id")
);

CREATE TABLE "user_has_badge" (
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
    "badge_id" INT NOT NULL REFERENCES "badge"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY ("badge_id", "user_id")
);

-- fin des tables de liaisons --

COMMIT;
