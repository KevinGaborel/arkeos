BEGIN;

INSERT INTO "theme" ("name", "color") VALUES 
    ('Soins et pathologies', '#FFAEBC'),
    ('Terrarium', '#FFE9E4'),
    ('Alimentation', '#FBE7C6'),
    ('Génétique', '#A0E7E5'),
    ('Anatomie et biologie', '#F51720'),
    ('Législation', '#FFB067'),
    ('Biotope et histoire naturelle', '#FA26A0');

INSERT INTO "category" ("name") VALUES
    ('Lézards'),
    ('Grenouilles'),
    ('Serpents'),
    ('Tortues');

INSERT INTO "user" ("username", "email", "password") VALUES
    ('Kév', 'kev@gmail.com', 'kevpass'),
    ('Flo', 'flo@gmail.com', 'flopass'),
    ('Jean', 'jean@gmail.fr', 'jeanpass'),
    ('Nico', 'nico@gmail.fr', 'nicopass');


INSERT INTO "species" ("number", "genre", "species", "user_id") VALUES
    ('0.2.1', 'Boa', 'Teng', 1),
    ('1.2.3', 'Tortue', 'Ninja', 1),
    ('8.0.5', 'Sala', 'Mèche', 4);

INSERT INTO "marketplace" ("scientific_name", "born_captivity", "price", "native_country", "birth_date", "author_id", "category_id") VALUES
    ('Boa constructeur', true, 2.50, 'France', '1991-06-03', 1, 3),
    ('Tortue ninjago', false, 999.99, 'Papouasie-Nouvelle-Guinée', '2001-04-18', 2, 4),
    ('Grenouilles de la muerte', true, 50, 'Mexique', '2021-06-10', 3, 2),
    ('Agame Barbu', false, 5000.5050, 'Japon', '2025-09-25', 4, 1);
    
INSERT INTO "badge" ("name", "picture") VALUES
    ('Noob', './img/noob.png'),
    ('Master', './img/master.jpeg'),
    ('Fronteux', './img/fronteux.png'),
    ('Backeux', './img/backeux.png');

INSERT INTO "question" ("title", "content", "author_id", "theme_id", "category_id") VALUES
    ('Comment faire :/', 'Help me please !!!!', 1, 1, 1),
    ('Oh non pas ma tortue :(', 'Je crois que blablabla', 2, 2, 2),
    ('Bonjour jai une question', 'Bravo le seeding qui a merder parce que j avais oublier celle-ci :/',1, 1, 1);

INSERT INTO "response" ("content", "author_id", "question_id") VALUES
    ('Je crois que peut-être non', 3, 1),
    ('Elle est vivante du coup ?', 2, 2),
    ('Il faut faire comme ça !', 1, 1),
    ('je rêve ou je répond à ma propre question o_O', 1, 1);

INSERT INTO "article" ("title", "content", "type", "author_id", "category_id", "theme_id") VALUES
    ('Mon titre', 'mon contenu', 'Fiche élevage', 1, 1, 1),
    ('Mon titre 2', 'mon contenu 2', 'Article', 1, 1, 1),
    ('Titre article', 'contenu pas bien grand', 'Article', 4, 1, 1);

INSERT INTO "photo" ("location", "url_picture", "article_id", "author_id") VALUES
    ('article', './img/article/img1.png', 1, 1),
    ('article', './img/article/img2.png', 1, 1),
    ('article', './img/article/img3.png', 2, 2),
    ('article', './img/article/img4.png', 3, 3);

INSERT INTO "message" ("content", "receiver_id", "sender_id") VALUES
    ('Salut mec !', 1, 2),
    ('Bonjour bonjour !', 2, 4),
    ('La forme nico ?', 2, 4),
    ('Hello word', 1, 4);

INSERT INTO "comment" ("content", "author_id", "article_id") VALUES
    ('Pas mal ton article !', 3, 1),
    ('Moi je le trouve pas ouf du tout :/', 2, 1),
    ('J aime beaucoup le titre de ton article, c est original :p', 1, 3);

-- Tables de liaison --

INSERT INTO "article_rating" ("article_id", "user_id", "rating") VALUES
    (3, 1, -1),
    (1, 2, 1),
    (1, 3, -1),
    (1, 4, 1),
    (1, 1, 1),
    (3, 2, -1),
    (3, 3, 1),
    (2, 4, -1),
    (2, 1, 1);

INSERT INTO "response_rating" ("response_id", "user_id", "rating") VALUES
    (1, 2, -1),
    (1, 3, -1),
    (2, 1, 1);

INSERT INTO "wishlist" ("marketplace_id", "user_id") VALUES
    (1, 2),
    (1, 3),
    (2, 1);

INSERT INTO "user_has_badge" ("user_id", "badge_id") VALUES
    (1, 4),
    (2, 3),
    (3, 3),
    (4, 3);

-- fin des tables de liaisons --

COMMIT;