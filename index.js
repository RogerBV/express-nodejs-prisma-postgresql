const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

const corsOptions = {
    origin: "http://localhost:5173"
}


router.use((req, res, next) => {
    console.log("Log: ", Date.now() + " " + req._parsedUrl.pathname)
    next()
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

router.use(require('./src/api/aws'))
router.use(require('./src/api/gender'))
router.use(require('./src/api/editorial'))
router.use(require('./src/api/author'))

app.use(cors(corsOptions));
app.use(router);

const PORT = 3000;
app.listen(PORT);
console.log("Server on port: " + PORT);

module.exports = app;
