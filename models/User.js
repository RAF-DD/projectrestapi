const mongoose=require('mongoose');
const schema=mongoose.Schema;
const Schema= new schema(
  {
      name:{
          type: String,
          require: true,
      },
      age:{
          type: Number,
      },
      favoriteFoods:{
          type: [String],
      },
  }
)
const Person=mongoose.model("user",Schema)
module.exports=Person;