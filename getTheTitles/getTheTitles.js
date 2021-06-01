const getTheTitles = function(books) {
    let arr = books.map (book => book.title);
    return arr;
};

module.exports = getTheTitles;
