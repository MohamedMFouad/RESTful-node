import express from 'express';
import mongoose from 'mongoose';
import bodyPaser from 'body-parser'
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

//this is monooges connection  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb');


//bodyPaser setup
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(bodyPaser.json());

app.get('/', (req, res)=>{
    res.send(`Node and Express ${PORT}`)
})

routes(app);

//serve stataic files 

app.use(express.static('public'));

app.listen(PORT, ()=>
    console.log(`We are listen to ${PORT}`)
)