import { kafkaConsumer } from "../kafka.consumer";


export async function createCustomerConsumer(){
    console.log("ENTROU AQUI CUSTOMER")
     const consumer = await kafkaConsumer("COSTUMER_CREATED")
     await consumer.run({
        eachMessage:async ({message})=>{
           const messageToString = message.value?.toString()
           console.log(messageToString)
        }
     })
}

createCustomerConsumer()