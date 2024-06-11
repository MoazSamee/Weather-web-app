import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import axios from "axios";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import env from "dotenv";


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);
console.log(__filename);
console.log(__dirname);

const app = express();
env.config();

const port = 3000;
app.use(express.static("views"));
//app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
let city="london",data;
let api;

app.get("/", async (req, res) => {
   
    api=`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`;

 try{
     data = await axios.get(api);
    
 }catch(error)
 {
    console.log('error occured: ', error);
 }

 res.render("index.ejs",data)
   
  
});



app.post("/", async(req, res) => { 

    city = req.body.city;
   res.redirect("/");
   
 });


  

   
   

