const campaigns = require('./models/campaigns')
const db = require('./config/database')
const campaignObj = db.campaigns
console.log(typeof campaigns)
console.log(campaigns)


const express = require('express');
const { sequelize } = require('./config/database');

const app = express();

const port = 4080

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Welcome to express server!');
})

// post campaigns
app.post('/campaigns', async (req, res) => {
    try {
        const {id, title, target, endDate} = req.body;
        const newCampaign = await campaignObj.create({
            id,
            title,
            target,
            endDate
        });
        res.status(200).json({message: 'campaign created', newCampaign})
    } catch (err) {
        console.log(err, err.message)
    }
})



// get campaigns
app.get('/campaigns', async (req, res) => {
    try {
        const campgn = await campaignObj.findAll();
        res.status(200).json({campgn}) 
        
    } catch (err) {
        console.log(err, err.message)
    }
})



// update campaign (update campaign endDate identified by id in the request)
app.patch('/campaigns/:id', async (req, res) => {

    const id = req.params.id
    const {endDate} = req.body;
    
    try {
        await campaignObj.update({endDate}, {
            where: {
                id: id
            }
        });
        res.status(200).json({message: 'endDate updated successfully'})
    } catch (error) {
        console.log(error, err.message)
    }

});




const runApp = async () => {
   try {
     // check database connection
     await db.sequelize.authenticate();
     console.log('db connection established');
 
     // sync all models
     await db.sequelize.sync();
     await console.log(sequelize.models)

 
     // run server
     app.listen(port, ()=> {
        console.log('listening on port ' + port);
    });
    
   } catch (err) {
    console.log(err.message)
   } 
}

runApp();


