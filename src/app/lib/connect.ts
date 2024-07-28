import mongoose from "mongoose";

async function connect() : Promise<void>{
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Db Connected...");
    } catch (error) {
        console.error(error)
    }
}

export default connect;