"use strict";
function Animal() { }
Animal.prototype = {
    contructor: Animal,
    legs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
};
function Bird(name) {
    this.name = name;
}
Bird.prototype = Object.create(Animal.prototype);
console.log(Bird.prototype);
let duck = new Bird("Pato");
(function () {
    console.log("THis is a function");
})();
let motionModule = (function () {
    return {
        glideMixin: function () {
            console.log("Gliding on the water");
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        },
    };
})();
let funModule = (function () {
    return {
        isCuteMixin: function (Obj) {
            Obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        },
    };
})();
// Saiba mais sobre programação funcional
// desafio 1
const prepareTea = () => "greeTea";
const getTeaOne = (numOfTea) => {
    let cupsTeas = [];
    for (let cup = 1; cup <= numOfTea; cup++) {
        const cupTea = prepareTea();
        cupsTeas.push(cupsTeas);
    }
    return cupsTeas;
};
// desafio 2
const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";
const getTea = (prepareTea, numOfTea) => {
    let teaCups = [];
    for (let cups = 1; cups <= numOfTea; cups++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
console.log(tea4GreenTeamFCC);
// desafio 3
const Window = function (tabs) {
    this.tabs = tabs;
};
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};
Window.prototype.tabOpen = function (tab) {
    this.tabs.push(tab);
    return this;
};
Window.prototype.tabClose = function (index) {
    const tabsBeforeIndex = this.tabs.splice(0, index);
    const tabsAfterIndex = this.tabs.splice(index + 1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
    return this;
};
const workWindow = new Window([
    "GMail",
    "Inbox",
    "Work mail",
    "Docs",
    "freeCodeCamp",
]);
const socialWindow = new Window([
    "FB",
    "Gitter",
    "Reddit",
    "Twitter",
    "Medium",
]);
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]);
const finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
const teste = (func) => {
    const name = func();
    console.log(name);
};
const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae",
];
function add(list, bookName) {
    return [...list, bookName];
}
function remove(list, bookName) {
    return list.filter((book) => book !== bookName);
}
var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
// Dell OptiPlex 3020
const nomes = ["kayke", "anna", "joao0", "maria", "pelé"];
console.log(nomes);
// Only change code below this line
const s = [23, 65, 98, 5];
Array.prototype.myMap = function (callback) {
    const newArray = [];
    this.forEach((item) => {
        const valores = callback(item);
        newArray.push(valores);
    });
    return newArray;
};
const new_s = s.myMap((item) => {
    return item * 2;
});
console.log(new_s);
const users = [
    { name: "Lucas", idade: 16 },
    { name: "joão", idade: 15 },
    { name: "Kalita", idade: 15 },
];
// The global variable
const watchList = [
    {
        Title: "Inception",
        Year: "2010",
        Rated: "PG-13",
        Released: "16 Jul 2010",
        Runtime: "148 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Christopher Nolan",
        Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        Language: "English, Japanese, French",
        Country: "USA, UK",
        Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.8",
        imdbVotes: "1,446,708",
        imdbID: "tt1375666",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "Interstellar",
        Year: "2014",
        Rated: "PG-13",
        Released: "07 Nov 2014",
        Runtime: "169 min",
        Genre: "Adventure, Drama, Sci-Fi",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan, Christopher Nolan",
        Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        Language: "English",
        Country: "USA, UK",
        Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        Metascore: "74",
        imdbRating: "8.6",
        imdbVotes: "910,366",
        imdbID: "tt0816692",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "The Dark Knight",
        Year: "2008",
        Rated: "PG-13",
        Released: "18 Jul 2008",
        Runtime: "152 min",
        Genre: "Action, Adventure, Crime",
        Director: "Christopher Nolan",
        Writer: "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        Language: "English, Mandarin",
        Country: "USA, UK",
        Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        Metascore: "82",
        imdbRating: "9.0",
        imdbVotes: "1,652,832",
        imdbID: "tt0468569",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "Batman Begins",
        Year: "2005",
        Rated: "PG-13",
        Released: "15 Jun 2005",
        Runtime: "140 min",
        Genre: "Action, Adventure",
        Director: "Christopher Nolan",
        Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        Language: "English, Urdu, Mandarin",
        Country: "USA, UK",
        Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        Metascore: "70",
        imdbRating: "8.3",
        imdbVotes: "972,584",
        imdbID: "tt0372784",
        Type: "movie",
        Response: "True",
    },
    {
        Title: "Avatar",
        Year: "2009",
        Rated: "PG-13",
        Released: "18 Dec 2009",
        Runtime: "162 min",
        Genre: "Action, Adventure, Fantasy",
        Director: "James Cameron",
        Writer: "James Cameron",
        Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        Language: "English, Spanish",
        Country: "USA, UK",
        Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
        Poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        Metascore: "83",
        imdbRating: "7.9",
        imdbVotes: "876,575",
        imdbID: "tt0499549",
        Type: "movie",
        Response: "True",
    },
];
// Only change code below this line
let filteredList = "";
filteredList = watchList.filter((item) => {
    return item.imdbRating > 8;
});
const newMovie = filteredList.map((item) => {
    return {
        title: item.Title,
        randing: item.imdbRating,
    };
});
// Only change code above this line
console.log(newMovie);
let things = watchList
    .filter((item) => {
    return Number(item.imdbRating) >= 8;
})
    .map((movie) => {
    return {
        title: movie.Title,
        rating: movie.imdbRating,
    };
});
console.log(things);
const rrai = [23, 65, 98, 5];
Array.prototype.myFilter = function (callback) {
    const newArray = [];
    this.forEach((item) => {
        if (callback(item) == true) {
            newArray.push(item);
        }
    });
    return newArray;
};
const new_rrai = rrai.myFilter((item) => {
    return item % 2 === 1;
});
console.log(new_rrai);
const n = {
    cal(name) {
        const oi = {
            nome: name,
            idade: 17,
        };
        console.table(oi);
    },
};
n.cal();
function getRating(watchList) {
    let averageRating = watchList
        .filter((film) => film.Director === "Christopher Nolan")
        .map((film) => Number(film.imdbRating))
        .reduce((acc, item) => {
        return acc + item;
    }, 0) /
        watchList.filter((film) => film.Director === "Christopher Nolan").length;
    return averageRating;
}
console.log(getRating(watchList));
