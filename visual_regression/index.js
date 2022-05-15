const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");
const path = require("path");

const { baseVersion, compareVersion, options } = config;

// let baseVersion = `../Kraken/screenshots/ghost3`;
// let compareVersion = `../Kraken/screenshots/ghost4`;

const directoryPath = path.join(__dirname, baseVersion);
const directoryPathCompare = path.join(__dirname, compareVersion);

async function executeTest() {
  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");

  if (!fs.existsSync(`./results/${datetime}`)) {
    fs.mkdirSync(`./results/${datetime}`, { recursive: true });
  }

  const testList = fs.readdirSync(directoryPath);

  await testList.forEach( async (file) => {
    const currentTest = file;
    resultInfo[currentTest] = {};
    const fileList = fs.readdirSync(directoryPath + "/" + file);
    await fileList.forEach(async (file) => {
      const data = await compareImages(
        fs.readFileSync(directoryPath + "/" + currentTest + "/" + file),
        fs.readFileSync(directoryPathCompare + "/" + currentTest + "/" + file),
        options
      );

      resultInfo[currentTest][file.replace(/\.[^/.]+$/, "")] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };

      if (!fs.existsSync(`./results/${datetime}/${currentTest}`)) {
        fs.mkdirSync(`./results/${datetime}/${currentTest}`, {
          recursive: true,
        });
      }

      fs.writeFileSync(
        `./results/${datetime}/${currentTest}/compare-${file}`,
        data.getBuffer()
      );
    });
  });

  await console.log(resultInfo);
  await fs.writeFileSync(
    `./results/${datetime}/report.html`,
    createReport(datetime, resultInfo, baseVersion, compareVersion)
  );
  fs.copyFileSync("./index.css", `./results/${datetime}/index.css`);

  await console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}

(async () => console.log(await executeTest()))();

function testScenario(b, info, before, after) {
  const images = Object.keys(info).map((value) => {
    return `
    <h3>Step: ${value}</h3>
    <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="../../${before}/${b}/${value}.png" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="../../${after}/${b}/${value}.png" id="testImage" label="Test">
    </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./${b}/compare-${value}.png" id="diffImage" label="Diff">
      </div>
    </div>`;
  });

  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Scenario: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    ${images}
  </div>`;
}

function createReport(datetime, resInfo, before, after) {
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
                ${Object.keys(resInfo).map((b) =>
                  testScenario(b, resInfo[b], before, after)
                )}
            </div>
        </body>
    </html>`;
}
