function Animal() {}

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

