import express from 'express';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send(`Node and Express ${PORT}`)
})

routes(app);

app.listen(PORT, ()=>
    console.log(`{PORT}`)
)