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
    ('Amphibiens'),
    ('Serpents'),
    ('Tortues');

INSERT INTO "user" ("username", "email", "password", "city", "presentation" , "profile_picture") VALUES
    ('Kévin', 'kev@gmail.com', 'kevpass', 'Dieppe', 'J''adore les pogonas !', 'imagehomme1.jpeg'),
    ('FloRiLezard', 'flo@gmail.com', 'flopass', 'Nancy', 'J''aime les reptiles <3', 'imagehomme2.jpeg'),
    ('RockyBatLeBoa', 'jean@gmail.fr', 'jeanpass', 'Paris', '', 'imagehomme3.jpeg'),
    ('NicoRobin', 'nico@gmail.fr', 'nicopass', 'Lille', 'Professionnel et éleveur de tortues Agryonemis horsfieldii sur Lille', 'imagehomme5.jpeg'),
    ('Paul', 'paul@gmail.com', 'paulpass', 'Paris', 'Débutant dans la terrariophilie', 'imagehomme13.jpeg'),
    ('Philipe', 'philipe@gmail.com', 'pommepass', 'Lille', '', 'imagehomme4.jpeg'),
    ('Mohamed', 'momo@gmail.fr', 'momopass', 'Rouen', 'Fan de caméléons', 'imagehomme6.jpeg'),
    ('BronzeRaptor', 'bron@gmail.com', 'bronpass', 'Paris', 'Je suis une personne très créative. J''aime faire de la musique et je suis aussi photographe animalier.', 'imagehomme7.jpeg'),
    ('SeverusRogue', 'steack@gmail.com', 'steakpass', 'Marseille', 'J''aime les reptiles, particulièrement les Basiliscus plumifrons', 'imagehomme8.jpeg'),
    ('CrazyRep', 'rep@gmail.fr', 'reppass', 'Paris', 'Fous de reptiles depuis tout petit, je n''en possède pas encore, mes parents n''en veulent pas :/', 'imagefemme22.jpeg'),
    ('FrenchLez', 'french@gmail.fr', 'frenchpass', 'Lille', 'Amateur de reptiles', 'imagehomme12.jpeg'),
    ('LauraDu75', 'laura@gmail.com', 'laurapass', 'Paris', 'Débutant dans la terrariophilie, je cherche actuellement à acquerir un couple de Eublepharis macularius', 'imagefemme8.jpeg'),
    ('Johana', 'johana@gmail.com', 'jopass', 'Nantes', 'J''aimerais apprendre à m''occuper d''un terrarium et de petites tortues aquatiques.', 'imagefemme1.jpeg'),
    ('MattPogonas', 'pogo@gmail.fr', 'pogopass', 'Paris', '10 ans de pratique dans lézards martiaux !', 'imagehomme10.jpeg'),
    ('OliviaVaran', 'oliv@gmail.com', 'olivpass', 'Grenoble', 'Je tiens une association de terariophilie, n''hésitez pas à me contacter en cas de questions !', 'imagefemme9.jpeg'),
    ('SylvieVaran', 'syl@gmail.com', 'sylpass', 'Grenoble', 'Je collectionne les reptiles, et mon chéri m''aide dans cette noble quête', 'imagefemme3.jpeg'),
    ('GodzillaGren', 'god@gmail.fr', 'godpass', 'Paris', '', 'imagehomme11.jpeg'),
    ('DCGecko', 'geck@gmail.fr', 'geckpass', 'Marseille', 'Professionnel dans la vente d''animaux', 'imagehomme14.jpeg'),
    ('SalazarSerpentard', 'pierre@gmail.com', 'pierrepass', 'Bordeaux', 'Débutant dans la terariophilie, depuis cet été', 'imagehomme15.jpeg'),
    ('LauRaptor', 'laurap@gmail.com', 'laurapass', 'Lille', '', 'imagefemme4.jpeg'),
    ('RepVador', 'vador@gmail.fr', 'vadorpass', 'Rouen', 'Venez découvrir le coté obscur de la force reptilienne !', 'imagefemme6.jpeg'),
    ('Lila', 'lila@gmail.com', 'lilapass', 'Paris', 'Éleveuse de Tarentola chazaliae dans le 16ème','imagefemme2.jpeg');

INSERT INTO "marketplace" ("scientific_name", "born_captivity", "price", "url_picture", "native_country", "birth_date", "content", "author_id", "category_id") VALUES
    ('Python regius', true, 245.50, 'Pythonregius.jpg' , 'France', '1998-06-03',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 1, 3),

    ('Lampropeltis triangulum', false, 999.99, 'Lampropeltistriangulum.jpg', 'Papouasie-Nouvelle-Guinée', '2001-04-18', 
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 2, 3),

    ('Pantherophis guttatus', true, 445.50,'pantherophisguttatus.jpg', 'France', '2016-08-03',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 4, 3),

    ('Correlophus ciliatus', true, 599.99, 'correlophusciliatus.jpg','Papouasie-Nouvelle-Guinée', '2008-03-28',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 5, 1),

    ('Varanus acanthurus', true, 50, 'varanusacanthurus.jpg', 'Italie', '2021-01-18',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 6, 1),

    ('Ambystoma mexicanum', true, 75, 'ambystomamexicanum.jpg', 'France', '2019-05-23',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 7, 2),

    ('Chlamydosaurus kingii', false, 150, 'chlamydosauruskingii.jpg', 'Espagne', '2021-04-18',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 8, 1),

    ('Ceratophrys cranwelli', true, 22, 'ceratophryscranwelli.jpg', 'France', '2020-12-10',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 9, 2),

    ('Pelomedusa subrufa', true, 24504.50, 'pelomedusasubrufa.jpg', 'Afrique Du Sud', '2005-07-27',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 10, 4),

    ('Basiliscus plumifrons', false, 1269.45, 'basiliscusplumifrons.jpg', ' Paraguay', '2009-01-17',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 11, 1),

    ('Furcifer pardalis', true, 540, 'furciferpardalis.jpg' ,'États-Unis', '2018-03-10',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 12, 1),

    ('Pogona vitticeps', true, 780, 'pogonavitticeps.jpg', 'Mexique', '2017-06-10',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 3, 1),

    ('Morelia boeleni', true, 925.50, 'moreliaboeleni.jpg', 'France', '2018-08-03',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 4, 3);

    
INSERT INTO "badge" ("name", "picture") VALUES
    ('Débutant', './img/badge/debutant.png'),
    ('Maître', './img/badge/master.png'),
    ('Pro', './img/badge/pro.png'),
    ('Amateur', './img/badge/amateur.png');

INSERT INTO "question" ("title", "content", "author_id", "theme_id", "category_id") VALUES
    ('Comment faire :/', 'Help me please !!!!', 1, 1, 1),
    ('Oh non pas ma tortue :(', 'Je crois que blablabla', 2, 2, 2),
    ('Bonjour jai une question', 'Bravo le seeding qui a merder parce que j avais oublier celle-ci :/',1, 1, 1);

INSERT INTO "response" ("content", "author_id", "question_id") VALUES
    ('Je crois que peut-être non', 3, 1),
    ('Elle est vivante du coup ?', 2, 2),
    ('Il faut faire comme ça !', 1, 1),
    ('je rêve ou je répond à ma propre question o_O', 1, 1);

INSERT INTO "article" ("title", "content", "breeding_sheet", "url_picture", "author_id", "category_id", "theme_id") VALUES
    ('Le biotope de l'' iguane vert', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar arcu et libero finibus, a sollicitudin nibh iaculis. 
    Maecenas sed purus pharetra, mollis nibh at, egestas sapien. Suspendisse in eros eget sapien finibus tristique nec consequat velit. 
    Nam cursus volutpat dignissim. Integer id elementum enim, in malesuada lectus. Nulla nec tempus dui. Ut sit amet vulputate felis, vel condimentum nibh. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Ut ornare justo vulputate mauris bibendum, ornare fringilla odio vehicula. Fusce at interdum sapien. 
    Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.

    Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'biotope_iguane.jpeg', 4, 1, 7),


    ('Le squelette des serpents', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'squelette_serpent.jpg',1, 3, 5),


    ('La stomatite chez les serpents', 'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'stomatite.jpg', 4, 3, 1),


    ('Testudo hermanni, une tortue en danger', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'testudo_hermanni.jpg',1, 4, 7),


    ('Comprendre la législation', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'comprendre_legislation.jpg', 1, null, 6),


    ('Le cyclage des Morelia viridis', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'morelia_viridis.jpg', 4, 3, 1),


    ('L''alimentation des tortues terrestres', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'alimentation_tortues.jpeg', 10, 4, 3),


    ('Les bases de la génétique', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'bases_genetique.jpg',4, null, 4),


    ('Construire son terrarium', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'construire_terrarium.jpg', 2, null, 2),


    ('La communication chez les agames', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'communication_agames.jpg', 4, 1, 5),


    ('L'' hibernation chez les tortues', 
    'Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'hibernation_tortue.jpg', 6, 4, 5),


    ('La respiration cutanée', 
    'Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'respiration_cutanee.jpg',2, 2, 5),


    ('Nourrir les jeunes grenouilles', 'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'nourrir_grenouilles.jpeg', 2, 3, null),


    ('Les phases de Python regius', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'python_regius.jpg', 2, 3, 4),


    ('La Trachemys scripta elegans', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '', 4, 4, null),


    ('L''Eublepharis macularius', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '', 1, 1, null),


    ('l''Oedodera marmorata', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, '', 8, 1, null),


    ('Faut-il manipuler ses animaux ?', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 'manipuler_animaux.jpeg', 9, 1, 7);

INSERT INTO "photo" ("location", "url_picture", "article_id", "author_id") VALUES
    ('article', './img/article/img1.png', 1, 1),
    ('article', './img/article/img2.png', 1, 1),
    ('article', './img/article/img3.png', 2, 2),
    ('article', './img/article/img4.png', 2, 2),
    ('article', './img/article/img5.png', 3, 3),
    ('article', './img/article/img6.png', 2, 2),
    ('article', './img/article/img7.png', 3, 3);

INSERT INTO "message" ("content", "receiver_id", "sender_id") VALUES
    ('Salut mec !', 1, 2),
    ('Salut ça va ?', 2, 1),
    ('Nikel et toi ?', 1, 2),
    ('La forme ouais', 2, 1),
    ('Bonjour bonjour !', 4, 1),
    ('La forme nico ?', 4, 1),
    ('La grande forme ouais', 1, 4),
    ('Et toi ?', 1, 4),
    ('Salut flo !', 2, 4),
    ('Tu es là ?', 2, 4);

INSERT INTO "comment" ("content", "author_id", "article_id") VALUES
    ('Pas mal ton article !', 10, 1),
    ('Moi je le trouve pas ouf du tout :/', 15, 1),
    ('Ton article est original :p', 4, 1),
    ('Super ton article !', 5, 1),
    ('Pas mal ton article !', 9, 2),
    ('Moi je le trouve pas ouf du tout, enfin j''ai vu mieux en tout cas  :/', 14, 2),
    ('Ton article est original :p', 1, 2),
    ('Super bien ton article !', 5, 2),
    ('Pas mal ton article !', 8, 3),
    ('Moi je le trouve pas ouf du tout :/', 13, 3),
    ('Ton article est original :p', 4, 3),
    ('Pas mal ton article !', 7, 4),
    ('Moi je le trouve pas ouf du tout :/', 12, 4),
    ('Ton article est original :p', 1, 4),
    ('Pas mal ton article !', 6, 5),
    ('Ton article est original :p', 2, 5),
    ('Super ton article !', 15, 5),
    ('Pas mal ton article !', 5, 6),
    ('Super ton article !', 13, 6),
    ('Ton article est original :p', 3, 6),
    ('Pas mal ton article !', 3, 7),
    ('J aime beaucoup le titre de ton article, c est original :p', 2, 7),
    ('Ton article est original :p', 1, 7),
    ('J aime beaucoup le titre de ton article, c est original :p', 2, 8),
    ('Ton article est original :p', 8, 8),
    ('J aime beaucoup le titre de ton article, c est original :p', 5, 9),
    ('Ton article est original :p', 10, 9),
    ('Moi je le trouve terrible, il y a quelques soucis d''incohérences !', 12, 10),
    ('Ton article est original :p', 4, 10),
    ('Moi je le trouve terrible, il y a quelques soucis d''incohérences !', 2, 11),
    ('Moi je le trouve terrible, il y a quelques soucis d''incohérences !', 8, 12),
    ('Moi je le trouve terrible, il y a quelques soucis d''incohérences !', 1, 13);

-- Tables de liaison --

INSERT INTO "article_rating" ("article_id", "user_id", "rating") VALUES
    (3, 1, 1),
    (1, 2, 1),
    (1, 3, 1),
    (1, 4, 1),
    (1, 1, 1),
    (3, 2, 1),
    (3, 3, 1),
    (2, 4, 1),
    (4, 8, 1),
    (4, 9, 1),
    (4, 10, 1),
    (4, 11, 1),
    (6, 2, 1),
    (9, 3, 1),
    (8, 4, 1),
    (7, 1, 1);

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