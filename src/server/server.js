import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StarMatch from '../components/StarMatch';
import utils from '../services/utils'

const server = express();

server.use(express.static('dist'));

const initialData = utils.random(1,9);

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<StarMatch  starsInit={initialData}/>);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
        <link href="/styles.css" rel="stylesheet" type="text/css">
        <script type="text/javascript">
          window.__R_DATA = {initialData:${initialData}}
        </script>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(4242, () => console.log('Server is running...'));
