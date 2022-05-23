import {PageFields} from "./page-fields.enum";
import {ProfileFields} from "../util/profile.enum";
import {FakerCategories} from "./faker.enum";
import RandomElement from "./utilsFaker";

export default class PseudoRandomData {

    private randomElement: RandomElement = new RandomElement();

    constructor() {
    }

    public getPageDataListWithTitleAndContentAndPageUrlAndExcerpt() {
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
        pageData3.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 160));
        pageData3.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.WORDS, 500));
        pageData3.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.WORDS, 100));
        pageData3.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageDataList.push(pageData3);

        return pageDataList;
    }

    public getPageDataListWithTitleAndContentAndPageUrlAndExcerptAndMetadataValues() {
        let pageDataList: Map<PageFields, any>[] = [];

        let pageData1 = new Map<PageFields, any>();
        pageData1.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 1));
        pageData1.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.CHARS, 3000));
        pageData1.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.CHARS, 15));
        pageData1.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData1.set(PageFields.META_DATA_TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 5));
        pageData1.set(PageFields.META_DATA_DESCRIPTION, this.randomElement.useFaker(FakerCategories.WORDS, 10));
        pageData1.set(PageFields.META_DATA_CANONICAL_URL, this.randomElement.useFaker(FakerCategories.URL));
        pageDataList.push(pageData1);

        let pageData2 = new Map<PageFields, any>();
        pageData2.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData2.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData2.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData2.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 50));
        pageData2.set(PageFields.META_DATA_TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 55));
        pageData2.set(PageFields.META_DATA_DESCRIPTION, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData2.set(PageFields.META_DATA_CANONICAL_URL, this.randomElement.useFaker(FakerCategories.URL));
        pageDataList.push(pageData2);

        let pageData3 = new Map<PageFields, any>();
        pageData3.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 160));
        pageData3.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.WORDS, 500));
        pageData3.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.WORDS, 100));
        pageData3.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageData3.set(PageFields.META_DATA_TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 65));
        pageData3.set(PageFields.META_DATA_DESCRIPTION, this.randomElement.useFaker(FakerCategories.WORDS, 25));
        pageData3.set(PageFields.META_DATA_CANONICAL_URL, this.randomElement.useFaker(FakerCategories.URL));
        pageDataList.push(pageData3);

        return pageDataList;
    }

    public getPageDataListWithTitleAndContentAndPageUrlAndExcerptAndTwitterCardData() {
        let pageDataList: Map<PageFields, any>[] = [];

        let pageData1 = new Map<PageFields, any>();
        pageData1.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 1));
        pageData1.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.CHARS, 3000));
        pageData1.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.CHARS, 15));
        pageData1.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData1.set(PageFields.TWITTER_TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 5));
        pageData1.set(PageFields.TWITTER_DESCRIPTION, this.randomElement.useFaker(FakerCategories.WORDS, 20));
        pageDataList.push(pageData1);

        let pageData2 = new Map<PageFields, any>();
        pageData2.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData2.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData2.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData2.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageData2.set(PageFields.TWITTER_TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 20));
        pageData2.set(PageFields.TWITTER_DESCRIPTION, this.randomElement.useFaker(FakerCategories.NUMBERS, 150));
        pageDataList.push(pageData2);

        let pageData3 = new Map<PageFields, any>();
        pageData3.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 160));
        pageData3.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.WORDS, 500));
        pageData3.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.WORDS, 100));
        pageData3.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageData3.set(PageFields.TWITTER_TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 30));
        pageData3.set(PageFields.TWITTER_DESCRIPTION, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageDataList.push(pageData3);

        return pageDataList;
    }

    public getPageDataListWithTitleAndContentAndPageUrlAndExcerptAndFacebookCardData() {
        let pageDataList: Map<PageFields, any>[] = [];

        let pageData1 = new Map<PageFields, any>();
        pageData1.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 1));
        pageData1.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.CHARS, 3000));
        pageData1.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.CHARS, 15));
        pageData1.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData1.set(PageFields.FACEBOOK_TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 30));
        pageData1.set(PageFields.FACEBOOK_DESCRIPTION, this.randomElement.useFaker(FakerCategories.WORDS, 10));
        pageDataList.push(pageData1);

        let pageData2 = new Map<PageFields, any>();
        pageData2.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.CHARS, 160));
        pageData2.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 50));
        pageData2.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.NUMBERS, 100));
        pageData2.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.CHARS, 100));
        pageData2.set(PageFields.FACEBOOK_TITLE, this.randomElement.useFaker(FakerCategories.WORDS, 10));
        pageData2.set(PageFields.FACEBOOK_DESCRIPTION, this.randomElement.useFaker(FakerCategories.NUMBERS, 2));
        pageDataList.push(pageData2);

        let pageData3 = new Map<PageFields, any>();
        pageData3.set(PageFields.TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 160));
        pageData3.set(PageFields.CONTENT, this.randomElement.useFaker(FakerCategories.WORDS, 500));
        pageData3.set(PageFields.PAGE_URL, this.randomElement.useFaker(FakerCategories.WORDS, 100));
        pageData3.set(PageFields.EXCERPT, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageData3.set(PageFields.FACEBOOK_TITLE, this.randomElement.useFaker(FakerCategories.NUMBERS, 50));
        pageData3.set(PageFields.FACEBOOK_DESCRIPTION, this.randomElement.useFaker(FakerCategories.PARAGRAPH, 1));
        pageDataList.push(pageData3);

        return pageDataList;
    }

    public getProfileDataListWithFullData() {
        let profileDataList: Map<ProfileFields, any>[] = [];
        
        for(let i=0;i<50;i++){
            let profileDataRow = new Map<ProfileFields, any>();
            profileDataRow.set(ProfileFields.FULL_NAME, this.randomElement.useFaker(FakerCategories.FULL_NAME));
            profileDataRow.set(ProfileFields.NAME, this.randomElement.useFaker(FakerCategories.FIRST_NAME));
            profileDataRow.set(ProfileFields.E_MAIL, this.randomElement.useFaker(FakerCategories.EMAIL));
            profileDataRow.set(ProfileFields.LOCATION, this.randomElement.useFaker(FakerCategories.CITY));
            profileDataRow.set(ProfileFields.WEBSITE, this.randomElement.useFaker(FakerCategories.PAGE_URL));
            profileDataRow.set(ProfileFields.FACEBOOK_PROFILE, this.randomElement.useFaker(FakerCategories.FB_PROFILE));
            profileDataRow.set(ProfileFields.TWITTER_PROFILE, this.randomElement.useFaker(FakerCategories.TWITTER_PROFILE));
            profileDataRow.set(ProfileFields.BIO_PROFILE, this.randomElement.useFaker(FakerCategories.PARAGRAPH,1).substring(1,200));
            profileDataList.push(profileDataRow);
        }
        return profileDataList;

    }
}