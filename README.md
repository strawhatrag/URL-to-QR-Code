# URL-to-QR-Code
This Node.js script prompts the user to enter a URL, converts the URL into a QR code image, and saves it as `qr_img.png`. It also saves the entered URL in a text file named `URL.txt`.

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository or download the code files.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the required dependencies:

```shell
npm install
```
## Usage
In the project directory, run the following command to start the script:
```
node index.js
```

1. You will be prompted to enter a URL.
2. After entering the URL, the script will generate a QR code image and save it as qr_img.png in the project directory.
3. It will also save the entered URL in a text file named URL.txt.
4. Once the script finishes running, you will see the following messages:

```
QR code image saved!
URL saved!
```

**The QR code image (qr_img.png) and the text file (URL.txt) will be available in the project directory.**


## Dependencies

The following dependencies are used in this project:

- **inquirer**: A collection of common interactive command line user interfaces for Node.js, used for prompting user input.
- **qr-image**: A QR code image generator library for Node.js, used to generate the QR code image.
- **fs**: A built-in Node.js module for file system operations, used to create and write files.

Please make sure to install these dependencies before running the script.
