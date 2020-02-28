const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
  mode: 'photo',
  output: `${ __dirname }/test.jpg`,
  width: 640,
  height: 480,
  nopreview: true,
});
 
myCamera.snap()
  .then((result) => {
    // Your picture was captured
    console.log('got it');
  })
  .catch((error) => {
     // Handle your error
     console.log('error');
     console.log(error);
  });
