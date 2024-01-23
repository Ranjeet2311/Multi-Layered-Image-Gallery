import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { imgJson } from './imageData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.use---makes app from the public folder
app.use(express.static(__dirname + '/public'));

// serving index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// endpoint:  Image-id endpoint
app.get('/api/images', (req, res) => {
  res.send([5, 3, 7, 4, 9, 1, 10, 15, 2, 8]);
});

//endpoint:  Serving image details as per the provided id
app.get('/api/image/:imageId', (req, res) => {
  const randomSeconds = (Math.floor(Math.random() * 4) + 1) * 1000;
  let selectImg;

  imgJson.filter((imgObject) => {
    if (imgObject.id == req.params.imageId) {
      selectImg = imgObject.details;
    }
  });

  setTimeout(function () {
    res.json(selectImg);
  }, randomSeconds);
});

// Images endpoint
// app.get('/api', (req, res) => {
//   res.send(imgJson);
// });

// running the server

app.listen(port, () => {
  console.log(`Server started @ ${port}`);
});
