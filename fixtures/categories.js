var ObjectId = require('mongodb').BSONNative.ObjectID;

exports.Category = {
    cat1: {
        _id: new ObjectId(),
        name_en:  'Classic',
        name_fr:  'Classique',
        slug_en:  'books-classic',
        slug_fr:  'livres-classique',
        is_active: true
    },
    cat2: {
        _id: new ObjectId(),
        name_en:  'Fantastic',
        name_fr:  'Fantastique',
        slug_en:  'books-fantastic',
        slug_fr:  'livres-fantastique',
        is_active: true
    },
    cat3: {
        _id: new ObjectId(),
        name_en:  'Fantasy',
        name_fr:  'Fantasy',
        slug_en:  'books-fantasy',
        slug_fr:  'livres-fantasy',
        is_active: true
    },
    cat4: {
        _id: new ObjectId(),
        name_en:  'Movies and TV shows',
        name_fr:  'Films et Séries TV',
        slug_en:  'books-movies-and-tv-shows',
        slug_fr:  'livres-films-et-series-tv',
        is_active: true
    },
    cat5: {
        _id: new ObjectId(),
        name_en:  'Mystery & crime',
        name_fr:  'Policier',
        slug_en:  'books-mystery-and-crime',
        slug_fr:  'livres-policier',
        is_active: true
    },
    cat7: {
        _id: new ObjectId(),
        name_en:  'Science Fiction',
        name_fr:  'Science-Fiction',
        slug_en:  'books-science-fiction',
        slug_fr:  'livres-science-fiction',
        is_active: true
    },
    cat8: {
        _id: new ObjectId(),
        name_en:  'Horror',
        name_fr:  'Terreur',
        slug_en:  'books-horror',
        slug_fr:  'livres-terreur',
        is_active: true
    },
    cat9: {
        _id: new ObjectId(),
        name_en:  'Thriller',
        name_fr:  'Thriller',
        slug_en:  'books-thriller',
        slug_fr:  'livres-thriller',
        is_active: true
    }
};












