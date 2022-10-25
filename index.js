const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const placeCategories = require('./data/caategories.json');
app.get('/placeCategories', (req, res) => {
    res.send(placeCategories)
})

app.get('/place/:id', (req, res) => {
    const id = req.params.id;
    const getSinglePlace = placeCategories?.find((p) => p.id == id);
    //res.send(getSinglePlace);
    //condition
    if (!getSinglePlace) {
        res.send("Can not find any place");
    }
    res.send(getSinglePlace);
})

app.get("/type/:name", (req, res) => {
    const name = req.params.name;
    const getType = placeCategories?.filter((p) => p.types == name);
    res.send(getType);
});


app.get('/', (req, res) => {
    res.send('Travel guru is running')
})

app.listen(port, () => {
    console.log(`Travel Guru running on port ${port}`)
})
module.exports = app;