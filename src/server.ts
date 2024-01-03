import * as express from "express"
import * as bodyParser from "body-parser"

const app = express()
const healthRoutes = require("./routes/healthRoutes");


    // create express app

    app.use(bodyParser.json())
    app.use(healthRoutes);

    // start express server
    app.listen(3333)
    console.log("Express server has started on port 3333.")
