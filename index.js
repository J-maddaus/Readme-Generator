// include needed packages for this application to run properly
const inquirer = require('inquirer');
const fs = require('fs');
const licenseBadge = require('./licenseBadges').licenseBadge
// An array of questions for the inquirer to ask and revice user input.
inquirer
    .prompt([
        {
            name: 'license',
            message: 'Select what kind of license you would like for this application.',
            type: 'list',
            choices: [
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla",
                "MIT",
                "Apache",
                "Boost",
            ]
        },
        {
            name: 'Title',
            message: 'What is the title of this application?',
            type: 'input'
        },
        {
            name: 'Description',
            message: ' What does this applicaton do?',
            type: 'input'
        },
        {
            name: 'Installation',
            message: 'How do i install this application?',
            type: 'input'
        },
        {
            name: 'Usage',
            message: 'How do i use this application?',
            type: 'input'
        },
        {
            name: 'Github',
            message: 'What is your Github username?',
            type: 'input'
        },
        {
            name: 'Email',
            message: 'What is your email address?',
            tyope: 'input'
        },
        {
            name: 'Contributions',
            message: 'Who/What were the contributers to this application? And how can i also contribute?',
            type: 'input'
        },
        {
            name: 'Testing',
            message: 'How can i test this applicaton?',
            type: 'input'
        }
    ])
    // generates readme content based on user input
    .then((responses) => {

        const readmeContent = `
 # ${responses.Title}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)

## Description
${responses.Description}

## Installation
${responses.Installation}

## Usage
${responses.Usage}

## Questions
### Reach me at:
[${responses.Github}](https://github.com/${responses.Github})
${responses.Email}

## How to contribute
${responses.Contributions}

## Testing
${responses.Testing}

## License
${licenseBadge(responses.license)}
Licensed under the [${responses.license}](LICENSE) license.
`;

        // Write README content to  new file
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md successfully generated!');
            }
        });
    });



