import Env from "../util/environment";

export default class Utilities {

    public screenshotPath: string;

    constructor() {
        this.screenshotPath = "";
    }

    public generateScreenshotPath(testScenarioName: string, screenshotId:number) : string {
        //const postsLink = this.page.$("section.post-full-tags");
        if(testScenarioName != null && screenshotId != null) {
            return Env.SCREENSHOT_FOLDER + testScenarioName + "/" + screenshotId+".png";
        } else {
            throw new Error("No valid parameters");
        }
    }

}