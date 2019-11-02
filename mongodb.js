const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL= ''
const database = 'task-manager'

MongoClient.connect(connectionURL , {useNewUrlParser : true}, (error, client)=>{
    if(error){
        return console.log('Error occured')
    }    

    console.log('Connection succesful')
})