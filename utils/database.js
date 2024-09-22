import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('moongoDB is connected');
        return;
    }

    

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewParser: true,
            useUnifiedTopology: true,
        })
        
        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}