const path = require('path')
const express = require('express')
const app = express()
const PORT =  5000;
const hbs = require('hbs')
const fs = require('fs')
const load_data = require('./utils/load_data')


// Define paths for Express config
const PublicDirectoryPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname, './views')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(PublicDirectoryPath))


app.get('', (req, res) => {
   res.render('index')
})
app.get('/index', (req, res) => {
   res.render('index')
})

app.get('/get_collegedunia_data', async(req, res) => {
    const data = await load_data()
    // console.log(data['colleges'].length)
    return res.send({
        data: data['colleges']
      
     })
   
 })

app.get('*', (req, res) => {
   res.render('index')
})
 app.listen(PORT, () => {
     console.log('Server is up on port!' + PORT)
 })