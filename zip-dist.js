const zipFolder = require('zip-folder');

console.log('Beginning dist.zip creation');

zipFolder('dist', 'dist.zip', (err) => {
  if (err) {
    console.error('Failed to generate dist.zip. Error as follows:', err);
  } else {
    console.log('dist.zip file successfully generated');
  }
});
