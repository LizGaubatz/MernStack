const express = require('express')
const app = express();
const port = 8000

require("./server/config/config")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require("./server/route/jokes.route")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
