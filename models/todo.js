const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
  title:String,
  year: Number,
  time: Number,
  language:String,
  date:String,
  country:String,
  director:[
    {
      name:String,
      lastname:String
    }
  ],
  genres:[
    {
      kind:String
    }
  ],
  actor: [
    {
        name:String,
        lastname:String,
        gender:String
    }
  ],
});

module.exports=mongoose.model("Movie",TodoSchema);
