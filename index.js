import express from "express";
import axios from "axios";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
let cityl
let api;

app.post("/getTemp", async(req, res) => { 

    city = req.body.city;
    api="place your api from weatherapi.com";

 try{
    const data = await axios.get(api);
    
 }catch(error)
 {
    console.log('error occured: ', error);
 }



   })


  
   function displayValues()
   {
    document.getElementById("city").innerHTML = city;
    document.getElementById("temp").innerHTML = data.current.temp_c;
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("icon").src = data.current.condition.icon;
   }
