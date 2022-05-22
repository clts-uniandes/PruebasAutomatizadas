import {PageFields} from "./page-fields.enum";
import {FakerCategories} from "./faker.enum";
import RandomElement from "./utilsFaker";

export default class PseudoRandomData {

    private randomElement: RandomElement = new RandomElement();

    constructor() {
    }

    public getPageDataList() {
        let pageDataList: Map<PageFields, any>[] = [];

        let pageData1 = new Map<PageFields, any>();
        pageData1.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 1));
        pageData1.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.CHARS, 3000));
        pageData1.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.CHARS, 15));
        pageData1.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageDataList.push(pageData1);

        let pageData2 = new Map<PageFields, any>();
        pageData2.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData2.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData2.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData2.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData2);

        let pageData3 = new Map<PageFields, any>();
        pageData3.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData3.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData3.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData3.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData3);

        let pageData4 = new Map<PageFields, any>();
        pageData4.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData4.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData4.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData4.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData4);

        let pageData5 = new Map<PageFields, any>();
        pageData5.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData5.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData5.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData5.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData5);

        let pageData6 = new Map<PageFields, any>();
        pageData6.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData6.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData6.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData6.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData6);

        let pageData7 = new Map<PageFields, any>();
        pageData7.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData7.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData7.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData7.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData7);

        let pageData8 = new Map<PageFields, any>();
        pageData8.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData8.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData8.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData8.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData8);

        let pageData9 = new Map<PageFields, any>();
        pageData9.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData9.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData9.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData9.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData9);

        let pageData10 = new Map<PageFields, any>();
        pageData10.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData10.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData10.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData10.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageDataList.push(pageData10);

        return pageDataList;
    }
}