var ObjectId = require('mongodb').BSONNative.ObjectID;
var categoriesFixture = require('./categories');

exports.Book = {
    book1: {
        _id: new ObjectId(),
        title:  'Alice in wonderland',
        author: 'Lewis Carroll',
        description: 'In 1865, Charles Lutwidge Dodson composed a fantasy tale for a trio of young sisters. His creative genius and childlike ability to imagine a universe like no other took form in one of the most treasured children s books of all time. Under the pen-name of Lewis Carroll, Dodson s tale of an intrepid little girl who discovers a surreal, beautiful, and dangerous land would has shared its magic with generations of readers. His Cheshire Cat, Mad Hatter, and Queen of Hearts have become cultural icons, to say nothing of the heroic young Alice herself.',
        language: 'en',
        release_date: '1869',
        ISBN_13: '978-1619490222',
        pages_count: 108,
        publisher: 'Carroll Press',
        category: categoriesFixture.Category.cat1._id,
        is_processed: true,
        content_filename: '/books/en/alice_in_wonderland---1396881301.txt',
        image_filename: '/books/en/alice_in_wonderland---1396881301.jpg',
        words_processed: 10,
        lines_processed: 20,
        score: 1,
        is_active: true,
        is_deleted: false
    },
    book2: {
        _id: new ObjectId(),
        title:  'Alice in wonderland 2',
        author: 'Lewis Carroll',
        description: 'In 1865, Charles Lutwidge Dodson composed a fantasy tale for a trio of young sisters. His creative genius and childlike ability to imagine a universe like no other took form in one of the most treasured children s books of all time. Under the pen-name of Lewis Carroll, Dodson s tale of an intrepid little girl who discovers a surreal, beautiful, and dangerous land would has shared its magic with generations of readers. His Cheshire Cat, Mad Hatter, and Queen of Hearts have become cultural icons, to say nothing of the heroic young Alice herself.',
        language: 'en',
        release_date: '1869',
        ISBN_13: '978-1619490222',
        pages_count: 108,
        publisher: 'Carroll Press',
        category: categoriesFixture.Category.cat1._id,
        is_processed: true,
        content_filename: '/books/en/alice_in_wonderland---1396881301.txt',
        image_filename: '/books/en/alice_in_wonderland---1396881301.jpg',
        words_processed: 10,
        lines_processed: 20,
        score: 4,
        is_active: true,
        is_deleted: false
    },
    book3: {
        _id: new ObjectId(),
        title:  'Alice in wonderland 3',
        author: 'Lewis Carroll',
        description: 'In 1865, Charles Lutwidge Dodson composed a fantasy tale for a trio of young sisters. His creative genius and childlike ability to imagine a universe like no other took form in one of the most treasured children s books of all time. Under the pen-name of Lewis Carroll, Dodson s tale of an intrepid little girl who discovers a surreal, beautiful, and dangerous land would has shared its magic with generations of readers. His Cheshire Cat, Mad Hatter, and Queen of Hearts have become cultural icons, to say nothing of the heroic young Alice herself.',
        language: 'en',
        release_date: '1869',
        ISBN_13: '978-1619490222',
        pages_count: 108,
        publisher: 'Carroll Press',
        category: categoriesFixture.Category.cat1._id,
        is_processed: true,
        content_filename: '/books/en/alice_in_wonderland---1396881301.txt',
        image_filename: '/books/en/alice_in_wonderland---1396881301.jpg',
        words_processed: 10,
        lines_processed: 20,
        score: 2,
        is_active: true,
        is_deleted: false
    }
};












