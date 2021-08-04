const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This page was pushed to GitHub, then the it was built, reviewed manually and deployed to Elastic Beanstalk with the use of AWS CodePipeline and AWS CodeBuild'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
