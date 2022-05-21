import { faker } from "@faker-js/faker";

import { FakerCategories } from "./faker.enum";

export default class RandomElement {

    constructor() {
    }

    public useFaker(fakerValue: FakerCategories, quantity?: number) {
        switch (fakerValue) {
            case FakerCategories.WORDS:
                return faker.random.words(quantity);
            case FakerCategories.PARAGRAPH:
                return faker.lorem.paragraphs(quantity);
            case FakerCategories.NUMBERS:
                return faker.random.numeric(quantity);
            case FakerCategories.CHARS:
                return faker.datatype.string(quantity);
            case FakerCategories.EMPTY:
                return "";
            default:
                return "";
        }
    }
}