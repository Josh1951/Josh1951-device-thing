//Import express for server, mongoose for database
const express = require('express'),
      mongoose = require('mongoose');

//Initialize express
const app = express();

//Connect to database
mongoose.connect('mongodb://localhost:27017/smartdevice', {useNewUrlParser: true, useUnifiedTopology: true });

//Define what reading looks like
const readingSchema = new mongoose.Schema({
    temperature: String,
    humidity: String,
    soiltemp: String
});

const Reading = mongoose.model("Reading", readingSchema);

//Get all Readings
app.get('/all', (req, res) => {
    Recipe.find({}, function(err, allRecipes){
        if(err) {
            console.log(err);
        } else {
            res.send(allRecipes);
        }
    });
});

//Create new reading
app.get('/:temperature/:humidity/:soiltemp', function(req, res) {
    const newReading =
        {
            temparature: req.params.temparature,
            humidity: req.params.humidity,
            soiltemp: req.params.soiltemp,
        };

    Reading.create(newReading, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.send(newlyCreated);
        }
    });
});

//Listen for requests
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started...");
});