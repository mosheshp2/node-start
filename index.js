const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))

app.use('/css', express.static('css'));
app.listen(port, () => console.log(`Shpitz app listening on port ${port}!`))