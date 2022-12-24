const studentRoutes = require('./routes');
var express = require("express");
const router = require("./routes");
// var cors = require("cors");
var app = express();
var port = 3050;

var cors = require('cors');
app.use(cors());

// app.use(cors());
app.get('/', (req, res) => {
  res.send("Dummy Node JS API");
});
app.use(express.json());
app.use('/api/v1/students', studentRoutes);

app.listen(port, function(error){
    if(error)
      console.log(error)
    else 
      console.log(`Server running on ${port}`);
} );