const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
const LoginPage = require('../pageObjects/login.page');
const HomePage = require('../pageObjects/home.page');
const PagesPage = require('../pageObjects/page.page');
const PageEditorPage = require('../pageObjects/page-editor.page');
const TagsPage = require('../pageObjects/tag.page');
const TagsEditorPage = require('../pageObjects/tag-editor.page');
const PostPage = require('../pageObjects/post.page');
const PostEditorPage = require('../pageObjects/post-editor.page');
const StaffEditorPage = require('../pageObjects/staff-editor.page');
const StaffPage = require('../pageObjects/staff.page');


//ready
//login steps
When('I login with {kraken-string} and {kraken-string}', async function (email, password) {
    const loginPage = new LoginPage(this.driver);
    const emailField = loginPage.eleEmailAddressTextField;
    const passwordField= loginPage.elePasswordTextField;
    const button = loginPage.eleLoginBtn;
    await emailField.setValue(email);
    await passwordField.setValue(password);
    await button.click();
});

//pages steps
When('I click on pages in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const pages = homePage.elePagesLink;
    return await pages.click();
});

When('I click on new page', async function(){
    const pagesPage = new PagesPage(this.driver);
    const newPageBtn = pagesPage.eleNewPageLink;
    return newPageBtn.click();
});

When('I enter page title {string}', async function(title){
    const pageEditorPage = new PageEditorPage(this.driver);
    const pageTitle = pageEditorPage.eleTitle;
    return await pageTitle.setValue(title);
});

When('I begin writing page description {string}', async function(description){
    const pageEditorPage = new PageEditorPage(this.driver);
    const pageDescription = pageEditorPage.eleDescription;
    return await pageDescription.setValue(description);
});

When('I click on pubish page link', async function (){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishLink = pageEditorPage.elePublishLink;
    return await publishLink.click();
});

When('I click on update page link', async function (){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishLink = pageEditorPage.eleUpdateLink;
    return await publishLink.click();
});

When('I click on schedule page publish it for later', async function (){
    const pageEditorPage = new PageEditorPage(this.driver);
    const scheduleRadioBtn = pageEditorPage.eleScheduleRadioBtn;
    return await scheduleRadioBtn.click();
});

When('I click on schedule page button', async function(){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishBtn = pageEditorPage.elePublishBtn;
    return await publishBtn.click();
});

//post steps

When('I click on posts in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const pages = homePage.elePostsLink;
    return await pages.click();
});

When('I begin writing post description {string}', async function(description){
    const elements = new PostEditorPage(this.driver);
    const postDescription = elements.eleDescription;
    return await postDescription.setValue(description);
});


When('I click on post settings', async function(){
    const elements = new PostEditorPage(this.driver);
    const postSettings = elements.elePostSettings;
    return await postSettings.click();
});

When('I select post tag {string}', async function(tag){
    const elements = new PostEditorPage(this.driver);
    const menu = elements.elePostTagsMenu;
    return await menu.setValue(tag);
});

When('I click on post tag element', async function(){
    const elements = new PostEditorPage(this.driver);
    const listElement = elements.eleTagElement;
    return await listElement.click();
});


When('I click on close post settings button', async function(){
    const elements = new PostEditorPage(this.driver);
    const closePostSettings = elements.eleClosePostSettings;
    return await closePostSettings.click();
});

When('I click on view post', async function(){
    const elements = new PostEditorPage(this.driver);
    const viewPost = elements.eleViewPost;
    return await viewPost.click();
});


//tags steps


When('I enter tag color {string}', async function(color){
    const tagsPage = new TagsPage(this.driver);
    const tagColor = tagsPage.eleTagColor;
    return tagColor.setValue(color);
});

When('I click on save tag', async function(){
    const tagsPage = new TagsPage(this.driver);
    const saveBtn = tagsPage.eleSavenBtn;
    return saveBtn.click();
});

When('I click in delete tag', async function(){
    const elements = new TagsPage(this.driver);
    const deleteTag = elements.eleDeleteTagBtn;
    return deleteTag.click();
});

When('I click on delete button', async function(){
    const elements = new TagsPage(this.driver);
    const deleteBtn = elements.eleDeleteBtn;
    return deleteBtn.click();
});


Then('I expect tag created with name {string}', async function (text) {
    let element = await this.driver.$(`//a[contains(.,'${text}')]`);
    console.log(JSON.stringify(element));
    if(element.getAttribute('href') === null) {
        throw new TypeError(`Text ${text} does not exist.`);
    }
});

Then('I expect to go back to tag list', async function () {
    return await this.driver.$(`//h2[contains(.,'Tags')]`);
});


When('I click on publish page button', async function(){
    const pageEditorPage = new PageEditorPage(this.driver);
    const publishBtn = pageEditorPage.elePublishBtn;
    return await publishBtn.click();
})

Then('I found the page has been created {string}', async function(title){
    const listPages = new PagesPage(this.driver);
    const list = listPages.listPages(title);
    if(list === null) {
        throw new TypeError(`Text ${title} does not exist.`);
    }
})
Then('I found the page has been created {string} click', async function(title){
    const listPages = new PagesPage(this.driver);
    const list = listPages.listPages(title);
    if(list === null) {
        throw new TypeError(`Text ${title} does not exist.`);
    }
    return await list.click()
})
When('I click on one page', async function(){
    const pagesPage = new PagesPage(this.driver);
    const newPageBtn = pagesPage.eleOnePageLink;
    return newPageBtn.click();
})
When('I click on config page', async function(){
    const pagesPage = new PageEditorPage(this.driver);
    const newPageBtn = pagesPage.eleConfigPage;
    return newPageBtn.click();
})
When('I click on delete page', async function(){
    const pagesPage = new PageEditorPage(this.driver);
    const newPageBtn = pagesPage.eleDetelePage;
    return newPageBtn.click();
})
When('I click on confrim delete page', async function(){
    const pagesPage = new PageEditorPage(this.driver);
    const newPageBtn = pagesPage.eleDeteleConfirmPage;
    return newPageBtn.click();
})
// Tags
When('I click on tags in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const tags = homePage.eleTagsLink;
    return await tags.click();
})
When('I click on new tag', async function(){
    const tagsPage = new TagsPage(this.driver);
    const newTagBtn = tagsPage.eleNewTagLink;
    return newTagBtn.click();
})
When('I enter tag title {string}', async function(title){
    const tagEditorPage = new TagsEditorPage(this.driver);
    const pageTitle = tagEditorPage.eleTitle;
    return await pageTitle.setValue(title);
});

When('I enter tag description {string}', async function(description){
    const tagEditorPage = new TagsEditorPage(this.driver);
    const pageDescription = tagEditorPage.eleDescription;
    return await pageDescription.setValue(description);
});
When('I click on save page link', async function(){
    const tagsPage = new TagsEditorPage(this.driver);
    const saveTagBtn = tagsPage.saveBtn;
    return saveTagBtn.click();
})
Then('I found the tag has been created {string}', async function(title){
    const listPages = new TagsPage(this.driver);
    const list = listPages.listPages(title);
    if(list === null) {
        throw new TypeError(`Text ${title} does not exist.`);
    }
})

//Posts
When('I click on post in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const post = homePage.elePostsLink;
    return await post.click();
})
When('I click on new post', async function(){
    const pagesPage = new PostPage(this.driver);
    const newPageBtn = pagesPage.eleNewPostLink;
    return newPageBtn.click();
})
When('I enter post title {string}', async function(title){
    const postEditorPage = new PostEditorPage(this.driver);
    const pageTitle = postEditorPage.eleTitle;
    return await pageTitle.setValue(title);
});
When('I enter post description {string}', async function(description){
    const postEditorPage = new PostEditorPage(this.driver);
    const pageDescription = postEditorPage.eleDescription;
    return await pageDescription.setValue(description);
});
When('I click on config post', async function(){
    const pagesPage = new PostEditorPage(this.driver);
    const newPageBtn = pagesPage.eleConfig;
    return newPageBtn.click();
})
When('I click on one post', async function(){
    const pagesPage = new PostPage(this.driver);
    const newPageBtn = pagesPage.eleOnePostLink;
    return newPageBtn.click();
})
When('I enter tag on post {string}', async function(tag){
    const pagesPage = new PostEditorPage(this.driver);
    const inputTag = pagesPage.eleTag;
    const selectedTag = pagesPage.eleSelectedTag;
    await inputTag.setValue(tag);
    return await selectedTag.click();
})
When('I click on close config post', async function(){
    const pagesPage = new PostEditorPage(this.driver);
    const newPageBtn = pagesPage.eleCloseConfig;
    return newPageBtn.click();
})
When('I click on update post link', async function(){
    const pageEditorPage = new PostEditorPage(this.driver);
    const publishBtn = pageEditorPage.eleUpdateLink;
    return await publishBtn.click();
})
When('I click on pubish post link', async function (){
    const postEditorPage = new PostEditorPage(this.driver);
    const publishLink = postEditorPage.elePublishLink;
    return await publishLink.click();
});
When('I click on publish post button', async function(){
    const postEditorPage = new PostEditorPage(this.driver);
    const publishBtn = postEditorPage.elePublishBtn;
    return await publishBtn.click();
})
When('I click on unpublish post option', async function(){
    const postEditorPage = new PostEditorPage(this.driver);
    const publishBtn = postEditorPage.eleUnpublishOption;
    return await publishBtn.click();
})
Then('I found the post has been created {string} click', async function(title){
    const listPosts = new PostPage(this.driver);
    const list = listPosts.listPosts(title);
    if(list === null) {
        throw new TypeError(`Text ${title} does not exist.`);
    }
    return await list.click();
})
//helpers
Then('I should see text {string}', async function (text) {
    let element = await this.driver.$(`//*[contains(text(), '${text}')]`);
    if(element === null) {
        throw new TypeError(`Text ${text} does not exist.`);
    }
});

Then('I should see text in post list {string}', async function (text) {
    let element = await this.driver.$(`//a[contains(.,'${text}')]`);
    console.log(JSON.stringify(element));
    if(element.getAttribute('href') === null) {
        throw new TypeError(`Text ${text} does not exist.`);
    }
});

Then('I expect that url contain {string}', async function (urlFragment) {
    const puppeteerBrowser = await this.driver.getPuppeteer();
    let pages = await puppeteerBrowser.pages();
    console.log("Url after login: " + JSON.stringify(pages[0].url()));
    if(!pages[0].url().includes(urlFragment)) {
        throw new TypeError(`Url does not contain ${urlFragment}`);
    }
});

// Staff
When('I click on staff in the navbar', async function (){
    const homePage = new HomePage(this.driver);
    const post = homePage.eleStaffLink;
    return await post.click();
})

When('I click on new user', async function(){
    const pagesPage = new StaffPage(this.driver);
    const newPageBtn = pagesPage.eleNewStaffLink;
    return newPageBtn.click();
})

When('I click on one user', async function(){
    const pagesPage = new StaffPage(this.driver);
    const newPageBtn = pagesPage.eleOnePageLink;
    return newPageBtn.click();
})

When('I change email user {string}', async function(email){
    const staffEditor = new StaffEditorPage(this.driver);
    const emailField = staffEditor.eleEmail;
    await emailField.setValue(email);
})

When('I change password old password user {kraken-string} to {string}', async function(oldPassword, eleNewPassword){
    const staffEditor = new StaffEditorPage(this.driver);
    const passwordOldField = staffEditor.eleOldPassword;
    const passwordNewField = staffEditor.eleNewPassword;
    const passwordVerifyField = staffEditor.eleVerifyPassword;
    await passwordOldField.setValue(oldPassword);
    await passwordNewField.setValue(eleNewPassword);
    await passwordVerifyField.setValue(eleNewPassword);
})

When('I change password original password user {string} to {kraken-string}', async function(oldPassword, eleNewPassword){
    const staffEditor = new StaffEditorPage(this.driver);
    const passwordOldField = staffEditor.eleOldPassword;
    const passwordNewField = staffEditor.eleNewPassword;
    const passwordVerifyField = staffEditor.eleVerifyPassword;
    await passwordOldField.setValue(oldPassword);
    await passwordNewField.setValue(eleNewPassword);
    await passwordVerifyField.setValue(eleNewPassword);
})

When('I change email original user {kraken-string}', async function(email){
    const staffEditor = new StaffEditorPage(this.driver);
    const emailField = staffEditor.eleEmail;
    await emailField.setValue(email);
})

When('I click on save button', async function(){
    const staffEditor = new StaffEditorPage(this.driver);
    const saveBtn = staffEditor.eleSaveBtn;
    return await saveBtn.click();
})
When('I click on config user link', async function(){
    const staffEditor = new HomePage(this.driver);
    const userConfigBtn = staffEditor.eleUserConfigLink;
    return await userConfigBtn.click()
})
When('I click on logout link', async function(){
    const staffEditor = new HomePage(this.driver);
    const userConfigBtn = staffEditor.eleSignOutLink;
    return await userConfigBtn.click()
})
When('I click on change password button', async function(){
    const staffEditor = new StaffEditorPage(this.driver);
    const userConfigBtn = staffEditor.eleChangePasswordBtn;
    return await userConfigBtn.click()
})
When('I login with new email {string} and {kraken-string}', async function (email, password) {
    const loginPage = new LoginPage(this.driver);
    const emailField = loginPage.eleEmailAddressTextField;
    const passwordField= loginPage.elePasswordTextField;
    const button = loginPage.eleLoginBtn;
    await emailField.setValue(email);
    await passwordField.setValue(password);
    await button.click();
});

When('I login with new password {kraken-string} and {string}', async function (email, password) {
    const loginPage = new LoginPage(this.driver);
    const emailField = loginPage.eleEmailAddressTextField;
    const passwordField= loginPage.elePasswordTextField;
    const button = loginPage.eleLoginBtn;
    await emailField.setValue(email);
    await passwordField.setValue(password);
    await button.click();
});
//need modifications


When('I enter {kraken-string} into input field having name attribute {string}', async function (text, selector) {
    let element = await this.driver.$(`input[name=${selector}]`);
    return await element.setValue(text);
});


When('I enter {string} into input field having css selector {string}', async function (text, selector) {
    let element = await this.driver.$(selector);
    return await element.setValue(text);
});

When('I click on button having css selector {string}', async function (selector) {
    let element = await this.driver.$(`//button[contains(@class,'${selector}')]`);
    return await element.click();
});

When('I click on element having css selector {string}', async function (selector) {
    let element = await this.driver.$(selector);
    return await element.click();
});

When('I click on link having href {string}', async function (href) {
    let element = await this.driver.$(`a[href="${href}"]`);
    return await element.click();
});

When('I enter tag name {string}', async function(name){
    const tagsPage = new TagsPage(this.driver);
    const tagName = tagsPage.eleTagName;
    return tagName.setValue(name);
});
When('I return to tags list', async function(){
    const tagsPage = new TagsPage(this.driver);
    const returnLink = tagsPage.eleReturnTagLink;
    return returnLink.click();
});
