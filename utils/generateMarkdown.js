//renderLicenseBadge returns a license badge based on which license is passed in, and includes a link to the license next to the badge image
function renderLicenseBadge(data) {
  const licenseType = data.license;
  //if there is no license, return an empty string
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)
    
    https://opensource.org/licenses/MIT`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

    https://opensource.org/licenses/Apache-2.0`
  };
  if (licenseType === "GNU General Public License 3.0") {
    licenseString = `![License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)
    
    http://www.gnu.org/licenses/gpl-3.0`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License-GNU Public](https://img.shields.io/badge/License-GPL%20v2-blue.svg)
    
    https://img.shields.io/badge/License-GPL%20v2-blue.svg`
  };

return licenseString;
};

// license badge url taken from https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500


// Function that generates the markdown for README
function generateMarkdown(data) {
  var grabLicenseString = renderLicenseBadge(data);
  return `
# ${data.title}

### Table of Contents:

I. [Description](#description)

II. [Installation](#installation)

III. [Usage](#usage)

IV. [License](#license)

V. [Contributing](#contributing)

VI. [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${grabLicenseString}

## Contributing
${data.contributing}


## Questions
${data.questions}`
};

module.exports = generateMarkdown;
