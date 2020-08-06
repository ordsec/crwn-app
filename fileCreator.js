const fs = require('fs');

// ARGS[0] is where the folder needs to be created 
// e.g. redux or components

// ARGS[1] is the name of the folder to create

// ARGS[2] is the possible '--camelize' option
const ARGS = process.argv.slice(2);

const createDir = (loc, name) => {
  const currDir = process.cwd(),
        path = currDir.concat(`/src/${loc}/${name}`);

  fs.mkdir(path, (err) => {
    if (err) console.error(`Operation FAILED: ${err}`);
  });
};

const createReduxFiles = name => {
  let fileName = name;

  const path = process.cwd().concat(`/src/redux/${name}`);

  if (ARGS[2] === '--camelize') fileName = toCamelCase(fileName);

  fs.closeSync(fs.openSync(`${path}/${fileName}.actions.js`, 'w'));
  fs.closeSync(fs.openSync(`${path}/${fileName}.reducer.js`, 'w'));
  fs.closeSync(fs.openSync(`${path}/${fileName}.types.js`, 'w'));
};

const createComponentFiles = name => {
  let fileName = name;

  const path = process.cwd().concat(`/src/components/${name}`);

  if (ARGS[2] === '--camelize') fileName = toCamelCase(fileName);

  const reactBoilerplate = (
    `import React from 'react';
    
import './${fileName}.styles.scss';`
    );

  fs.writeFile(
    `${path}/${fileName}.component.jsx`, 
    reactBoilerplate,
    (err) => {
      if (err) console.error(err);
    }
  );
  fs.closeSync(fs.openSync(`${path}/${fileName}.styles.scss`, 'w'));
};

const toCamelCase = str => {
  return str.replace(/-\w/g, c => c.toUpperCase()).replace(/-/g, '');
}

const readMe = `
Usage: 

1. Place the fileCreator.js file in the root directory of your app
2. Type the following in your terminal:

node fileCreator.js [folder] [name] [--camelize]

'folder' is required and can only be 'redux' or 'components'.
'name' is required and can be anything you want.

'--camelize' is optional if you prefer to use camelCase for file names.
`

//////////////// MAIN /////////////////

if (ARGS.length >= 2 || ARGS[0] === 'redux' || ARGS[0] === 'components') {
  createDir(ARGS[0], ARGS[1]);

  if (ARGS[0] === 'components') {
    createComponentFiles(ARGS[1]);
  } else {
    createReduxFiles(ARGS[1]);
  }
} else {
  console.log(readMe);
}