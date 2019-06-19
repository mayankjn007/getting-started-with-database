var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app",{ useNewUrlParser: true });

var catSchema = new mongoose.Schema({
   name : String,
   age: Number,
});
var Cat = mongoose.model("cat", catSchema);


// var billy = new Cat({
//    name: "Billy",
//    age: 10
// });
// billy.save(function(err,cat){
//    if(err){
//        console.log("Something went wrong");
//    }else{
//        console.log("Cat is added to database");
//        console.log(cat);
//    }
// });
// Cat.create({
//    name: "nyi biilyy",
//    age: 13
// },function(err,cat){
//    if(err)
//       console.log("Error",err);
//    else
//       console.log("Wrking",cat);
// });

Cat.find({},function(err,cats){
   console.log(cats);
});