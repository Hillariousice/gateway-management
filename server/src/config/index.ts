
import mongoose from 'mongoose';

import dbConfig from './db.config';




export const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(`${dbConfig.URL!}?authSource=admin`, { ...dbConfig.CONNECT_OPTIONS });
        console.log("DB connection successful");
        // Optionally, you can access the 'connection' object for additional configuration or handling.
    } catch (err) {
        console.error("DB connection error:", err);
    }
}

