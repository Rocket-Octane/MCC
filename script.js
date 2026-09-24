import {dirname} from "path";
import { fileURLToPath } from 'url';
import express from 'express';


const app=express();
const PORT=1000;
const dir=dirname(fileURLToPath(import.meta.url))
app.use(express.json())

app.use('/',express.static(dir+'/home'))
app.use('/resources',express.static(dir+'/Resources'))
app.use('/contact',express.static(dir+'/Contact'))

app.listen(PORT,()=>{
    console.log("Server has started")
})