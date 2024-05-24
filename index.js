const text = [
  `"Candy roll candy beans cookie pie sweet macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marshmallow croissant candy lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummy bears lollipop cotton candy gummy bears chocolate bar cake cookie. Cupcake muffin Danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake candy pie."`,
  `"New trend everyday carry, blog copper cup forage cool rooftop party pickled hammock kale chips tofu. Etsy cool 8-bit tiny-dosing, XOXO viral butcher sandwich bragging bicycle rights brunch before they sold out ramps. Cute shabby chic fish-shaped pastry flannel, enamel pin venmo vape cool drink. Hexagon kale chips typewriter cool 8-bit organic plaid small batch scarf ethical sandwich narwhal park cronut."``"Zombie apocalypse viral outbreak, named Rick Grimes bad brain. From the flesh-eating moving bodies you seek. The highest brains sit, disease or evil? From the apocalypse eater omero undead survivor speaks of the dead. Hi mindless dead soulless creatures, truly evil stalking monsters arriving with evil faces eat brains of the living. Who is an animated corpse, cricket bat max brucks terrifying walking zombie. The voodoo priest flesh eater, raises dead to eat flesh virus. Zombie tattered but only their eyes of the dead glow with brains. I don't know brains or Undead zombies. Like bad rotting voodoo horror. Night of the living dead."
  ``"This play is as bad as it is good! Your lyrics are too obvious. You can't just have your characters say how they feel. That makes me feel angry! Anyway, your net-suits will let you experience Fry's worm-filled insides as if you were actually crawling through them. I just told you! You've killed me! Fry! Stop doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his prompter because he forgot how to say that letter that looks like a man wearing a hat."`,

  `"Man braid gluten-free synth freegan readymade, hipster family salvia vest bitters gentrify four loko. Hipster semiotics post-ironic vegan. Tofu meditation tiny-dosing hashtag semiotics venmo. Flexitarian vape tilde fish-shaped pastry. Prism poutine farm-to-table, messenger bag vegan stuffed animal tattooed stylish squid jean shorts fixed gear trust fund vape."`,
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
