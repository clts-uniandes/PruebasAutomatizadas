const { faker } = require("@faker-js/faker");

module.exports = class RandomElement {
  constructor(string) {
    this.valorRevisar = string;
  }
  get validateTypeParam() {
    if (this.valorRevisar.startsWith("#")) {
      return this.useFaker(this.valorRevisar);
    }
    return this.valorRevisar;
  }
  useFaker(string) {
    const type = string.split("-")[0]
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
};
