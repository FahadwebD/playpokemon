const express = require('express');
const app = express ();
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require("mongodb").ObjectId;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ffrgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run (){

    try{
        await client.connect();

        console.log('connected')
        const database = client.db('pokeymonplay');
        const ordersCollection = database.collection('orders');
     
        // app.get('/orders/:email' , async(req ,res)=>{
        //     const email = req.params.email;
        //     const query = {email: email}
        //     const cursor = ordersCollection.find(query);
        //     const orders = await cursor.toArray();
        //     res.json(orders)

        // })
   
        app.post('/orders' , async(req ,res)=>{
            const order = req.body;
            const result = await ordersCollection.insertOne(order)
            
            res.json(result)
        })

     
        


        


   

   

  

    }
    finally{
        // await client.close();
    }


}

run().catch(console.dir);



app.get('/',(req , res)=>{
    res.send('hello hello')
});

app.listen(port ,()=>{
    console.log('kistening' , port)
});