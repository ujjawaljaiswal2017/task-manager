// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectID } = require('mongodb')

const connectionURL= 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL , {useNewUrlParser : true , useUnifiedTopology:true}, (error, client)=>{
    if(error){
        return console.log('Error occured')
    }    

    const db = client.db(databaseName)

    db.collection('users').findOne({name : 'Nish'},(error,user)=>{
        if(error){
            return console.log('Error in finding')
        }

        console.log(user)
    })
})