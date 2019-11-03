const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL , {useNewUrlParser : true , useUnifiedTopology:true}, (error, client)=>{
    if(error){
        return console.log('Error occured')
    }    

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name : 'Ujjawal',
    //     age : 20
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Cannot insert user')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: 'Nish',
            age : 22
        },
        {
            name : 'Deepak',
            age : 20
        }
    ],(error, result)=>{
        if(error){
            return console.log('Cannot insert user')
        }
        console.log(result.ops)
    })
})