import Env from "../util/environment";

export default class Utilities {

    public scenarioPath: string;

    constructor(scenarioPath: string) {
        this.scenarioPath = scenarioPath;
    }

    public generateScreenshotPath(screenshotId:number) : string {
        //const postsLink = this.page.$("section.post-full-tags");
        if(screenshotId != null) {
            return Env.SCREENSHOT_FOLDER + this.scenarioPath + "/" + screenshotId+".png";
        } else {
            throw new Error("No valid parameters");
        }
    }

}