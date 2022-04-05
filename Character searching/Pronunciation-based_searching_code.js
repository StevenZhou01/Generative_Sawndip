let zhuang;
let chinese;
let input = {
  pos: "name",
  word: "Bouxcuengh",
  sound: "/pou˦˨ ɕuːŋ˧/",
  meaning: ["the Zhuang people"],
};

function preload() {
  zhuang = loadJSON("zhuang.json");
  chinese = loadJSON("chineseDictionary.json");
}

function setup() {
  createCanvas(2000, 2000);
  textFont("courier");

  let characters = chinese.characters;

  // find "keywords"
  let string = input.meaning[0];
  const rawKeyword = string.split(/[,;\s\.!()]+/);
  const keyword = rawKeyword.filter((k) => {
    if (
      k != "the" &&
      k != "of" &&
      k != "a" &&
      k != "to" &&
      k != "for" &&
      k != "at" &&
      k != "in" &&
      k != "on" &&
      k != "by"
    ) {
      return k;
    }
  });
  console.log("Keyword: " + keyword);
  textSize(15);
  text("Keyword: " + keyword, 10, 30);

  for (let i = 0; i < keyword.length; i++) {
    let regex = keyword[i];
    let selected = characters.filter((chr) => {
      let m = match(chr.definition, regex);
      if (m != null) {
        return chr;
      }
    });
    console.log("Selected characters: " + regex, selected);
    textSize(14);
    text("Selected characters: ", 10, 80);
    text(regex, 10 + i * 200, 100);
    for (let j = 0; j < selected.length; j++) {
      textSize(14);
      text(selected[j].character, 10 + i * 200, 125 + j * 40);
      textSize(8);
      text(
        selected[j].definition,
        35 + i * 200,
        110 + j * 40,
        30 + i * 170,
        130 + i * 40
      );
    }
  }
}
