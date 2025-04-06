import mongoose from "mongoose";
export const connectDB =async()=>
{

try {
    const MONGODB_URI=`mongodb+srv://admin:admin@cluster0.xyzcj.mongodb.net/`;

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on("connected",()=>{
    console.log("mongodb connected..");

    });
    mongoose.connection.on("error",(err)=>{
        console.log(err);
});

} catch (error) {
   console.log(error);
}

}