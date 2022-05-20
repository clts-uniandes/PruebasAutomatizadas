import { faker } from "@faker-js/faker";

export default class RandomElement {

    constructor() {
    }

    useFaker(fakerValue: string, cantidad: number) {
        switch (fakerValue) {
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
                return fakerValue;
        }
    }

}