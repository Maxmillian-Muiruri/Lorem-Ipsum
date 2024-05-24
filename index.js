const text = [
  `Candy roll candy beans cookie pie sweet macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marshmallow croissant candy lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummy bears lollipop cotton candy gummy bears chocolate bar cake cookie.`,
  `Cupcake muffin Danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake candy pie.`,

  `New trend everyday carry, blog copper cup forage cool rooftop party pickled hammock kale chips tofu. Etsy cool 8-bit tiny-dosing, XOXO viral butcher sandwich bragging bicycle rights brunch before they sold out ramps. Cute shabby chic fish-shaped pastry flannel, enamel pin venmo vape cool drink. Hexagon kale chips typewriter cool 8-bit organic plaid small batch scarf ethical sandwich narwhal park cronut.`,

  `Zombie apocalypse viral outbreak, named Rick Grimes bad brain. From the flesh-eating moving bodies you seek. The highest brains sit, disease or evil? From the apocalypse eater omero undead survivor speaks of the dead.`,

  ` Hi mindless dead soulless creatures, truly evil stalking monsters arriving with evil faces eat brains of the living. Who is an animated corpse, cricket bat max brucks terrifying walking zombie.`,

  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Pirate gangway jack rum loot spyglass line Jack Tar fore gaff.`,
  `Gaff topmast scuttle ballast swab draft measured for your chains dance the hempen jig Chain Shot yardarm`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
