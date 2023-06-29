/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"; // make sure you add "type": "module" in package.json
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter your URL: ",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const qr_svg = qr.image(url);
    const qr_output = fs.createWriteStream("qr_img.png");
    qr_svg.pipe(qr_output);

    qr_output.on("finish", () => {
      console.log("QR code image saved!");
    });

    fs.writeFile("URL.txt", url, (error) => {
      if (error) throw error;
      console.log("URL saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("Something went wrong:", error);
    }
  });
