const Trello = require("trello");
var trello = new Trello("key", "token");
var cardTitle = `card desde fork ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "idLis",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });
