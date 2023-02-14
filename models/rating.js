const mongoose=require("mongoose");

const ReatingSchema=new mongoose.Schema({

  title:String,
  reviwer:String,
  rev_starts: Number,
  num_ratings:Number,
});

module.exports=mongoose.model("Reating",ReatingSchema);
