const cron = require('node-cron');

const axios = require('axios');



async function timeJob(){
    cron.schedule('* * * * *',async()=>{
    try{
        let resData = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        let response = await resData.data
        console.log(`Cron Fetch Data ${response}`)
    }catch(error){
        console.log(error)
    }
    })
}


async function timeJob2(){
    setInterval(async()=>{
    try{
        let resData = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        let response = await resData.data
        console.log(`Set Interval Fetch Data ${response}`)
    }catch(error){
        console.log(error)
    }
    },60000)
}

timeJob()

timeJob2()
