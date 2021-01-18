/**
 * Generate .d.ts file for each tsx
 */
const fs = require('fs');
const { exec } = require('child_process');

const generateDeclarations = () => {
  const packagesDirectory = `${process.cwd()}/packages`;
  const dirs = fs.readdirSync(packagesDirectory);
  dirs.forEach((currentDirectory) => {
    if (currentDirectory !== 'w3css-builder') {
      const filesDirectory = `${packagesDirectory}/${currentDirectory}/lib`;
      const fileNames = fs.readdirSync(filesDirectory);
      fileNames.forEach((fileName) => {
        if (fileName.includes('.tsx')) {
          exec(
            `tsc --declaration --jsx react --allowSyntheticDefaultImports  ${filesDirectory}/${fileName} --declarationDir ${filesDirectory}/../dist && rm -rf ${filesDirectory}/${fileName.replace(
              '.tsx',
              '.js',
            )}`,
            (error, stdout, stderr) => {
              if (error) {
                // eslint-disable-next-line no-console
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                // eslint-disable-next-line no-console
                console.log(`stderr: ${stderr}`);
                return;
              }
              // eslint-disable-next-line no-console
              console.log(`Declaration generated for : ${fileName}\nstdout: ${stdout}`);
            },
          );
        }
      });
    }
  });
};
// eslint-disable-next-line no-console
console.log('Generating declarations now...');
generateDeclarations();
