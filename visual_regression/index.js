const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const path = require("path");

const { viewportHeight, viewportWidth, browsers, options } = config;

let baseVersion = `../Kraken/screenshots/ghost3`;
let compareVersion = `../Kraken/screenshots/ghost4`;
const directoryPath = path.join(__dirname, baseVersion);
const directoryPathCompare = path.join(__dirname, compareVersion);


//------------------------------------------------------------------------------------

// async function executeTest(){
//     if(browsers.length === 0){
//       return;
//     }
//     let resultInfo = {}
//     let datetime = new Date().toISOString().replace(/:/g,".");
//     for(b of browsers){
//         if(!b in ['chromium', 'webkit', 'firefox']){
//             return;
//         }
//         if (!fs.existsSync(`./results/${datetime}`)){
//             fs.mkdirSync(`./results/${datetime}`, { recursive: true });
//         }
//         //Launch the current browser context
//         const browser = await playwright[b].launch({headless: true, viewport: {width:viewportWidth, height:viewportHeight}});
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto(config.url);
//         await page.screenshot({ path: `./results/${datetime}/before-${b}.png` });
//         await page.click('#generate');
//         await page.screenshot({ path: `./results/${datetime}/after-${b}.png` });
//         await browser.close();

//         const data = await compareImages(
//             fs.readFileSync(`./results/${datetime}/before-${b}.png`),
//             fs.readFileSync(`./results/${datetime}/after-${b}.png`),
//             options
//         );
//         resultInfo[b] = {
//             isSameDimensions: data.isSameDimensions,
//             dimensionDifference: data.dimensionDifference,
//             rawMisMatchPercentage: data.rawMisMatchPercentage,
//             misMatchPercentage: data.misMatchPercentage,
//             diffBounds: data.diffBounds,
//             analysisTime: data.analysisTime
//         }
//         fs.writeFileSync(`./results/${datetime}/compare-${b}.png`, data.getBuffer());

//     }

//     fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
//     fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

//     console.log('------------------------------------------------------------------------------------')
//     console.log("Execution finished. Check the report under the results folder")
//     return resultInfo;
//   }
// (async ()=>console.log(await executeTest()))();

async function executeTest() {
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");

  if (!fs.existsSync(`./results/${datetime}`)) {
    fs.mkdirSync(`./results/${datetime}`, { recursive: true });
  }

  const testList = fs.readdirSync(directoryPath);

  testList.forEach((file) => {
    const currentTest = file;
    resultInfo[currentTest] = {};
    const fileList = fs.readdirSync(directoryPath + "/" + file);
    fileList.forEach(async (file) => {
      // resultInfo[currentTest][file.replace(/\.[^/.]+$/, "")] = directoryPath + '/' + currentTest + '/' + file;
      const data = await compareImages(
        fs.readFileSync(directoryPath + "/" + currentTest + "/" + file),
        fs.readFileSync(directoryPath + "/" + currentTest + "/" + file),
        options
      );
      console.log(data);
      resultInfo[currentTest][file.replace(/\.[^/.]+$/, "")] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };

      if (!fs.existsSync(`./results/${datetime}/${currentTest}`)) {
        fs.mkdirSync(`./results/${datetime}/${currentTest}`, { recursive: true });
      }

      fs.writeFileSync(
        `./results/${datetime}/${currentTest}/compare-${file}`,
        data.getBuffer()
      );
    });
  });

  await console.log(resultInfo);

  await console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}

(async () => console.log(await executeTest()))();

function testScenario(b, info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Scenario: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, resInfo) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map((b) => browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`;
}
