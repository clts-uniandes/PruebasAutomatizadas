const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "dataPoolApriori.json");
const rawdata = fs.readFileSync(directoryPath);
const posts = JSON.parse(rawdata);

module.exports = class RandomElement {
  constructor(string) {
    this.valorRevisar = string;
  }
  get validateTypeParam() {
    if (this.valorRevisar.startsWith("#")) {
      return this.useFaker(this.valorRevisar);
    }
    if (this.valorRevisar.startsWith("$")) {
      return this.usePoolApriori(this.valorRevisar);
    }
    return this.valorRevisar;
  }
  useFaker(string) {
    const type = string.split("-")[0];
    const cantidad = string.split("-")[1] || faker.random.numeric(1);
    switch (type) {
      case "#words":
        return faker.random.words(cantidad);
      case "#paragraph":
        return faker.lorem.paragraphs(cantidad);
      case "#numbers":
        return faker.random.numeric(cantidad);
      case "#chars":
        return faker.datatype.string(cantidad);
      case "#vacio":
        return "";
      default:
        return string;
    }
  }
  usePoolApriori(string) {
    const type = string.split("-")[0];
    const random = Math.floor(Math.random() * 100);
    switch (type) {
      case "$words":
        return posts[random].words;
      case "$paragraph":
        return posts[random].paragraph;
      case "$numbers":
        return posts[random].numbers;
      case "$chars":
        return posts[random].chars;
      case "$vacio":
        return "";
      default:
        return string;
    }
  }
};
