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
            case FakerCategories.URL:
                return faker.internet.url();
            case FakerCategories.NAME:
                return faker.name.findName();
            case FakerCategories.FIRST_NAME:
                return faker.name.firstName();
            case FakerCategories.EMAIL:
                return faker.internet.email();
            case FakerCategories.CITY:
                return faker.address.cityName();
            case FakerCategories.PAGE_URL:
                return faker.internet.url();
            case FakerCategories.FB_PROFILE:
                return 'https://www.facebook.com/' + faker.name.firstName();
            case FakerCategories.TWITTER_PROFILE:
                return 'https://twitter.com/' + faker.name.firstName();
            case FakerCategories.EMPTY:
                return "";
            default:
                return "";
        }
    }
}