// Mongo db commands 
// --------------------Insertion----------------------------------------------------------------------------CREATE

// db.student.insertOne({name:"shubham ranjane",marks:100,city:"pune"})

// db.student.insertMany({name:"shubham ranjane",marks:100,city:"pune"},{name:"pavan",marks:89,city:"satara"})

// -------------------FIND----------------------------------------------------------------------------------READ

// db.student.find({marks:{$ne:78}}) --------not equal to 

// db.student.find({$and:[{marks:{$gt:50}},{city:"nashik"}]}) -----------and

//  db.student.find({$or:[{marks:{$gt:50}},{"performance.marks":{$gt:50}}]}) ------------or

// db.student.find({name:{$eq:{name:"pavan"}) --------------equl 

//  db.student.find({marks:{$nin:[98,78]}}) --------------NOT IN 

// ----------------UPADATE----------------------------------------------------------------------------------UPDATE

//  db.student.updateOne({name:"shubham ranjane"},{$set:{marks:100}})

// db.student.updateOne({name:"tanmay"},{$set:{"performance.marks":45}})

// db.student.updateMany({marks:{$gt:50}},{$set:{name:"topper"}})

//  db.student.updateMany({name:"topper"},{$set:{name:"we are not a toppers",marks:0}})

// 	------------REPLACE-------------

// db.student.replaceOne({name:"we are not a toppers"},{name:"topper",marks:100,city:"pune"})

// ------------------------NESTING--------------------------------------------------------------------------NESTING OF OBJECTS

//  db.student.insertOne({name:"monali",city:"pune", course:{course_name:"bscNursing",marks:89}})

//  db.student.find({"course.marks":89})


// ----------------------------DELETE--------------------------------------------------------------------------DELETE

//  db.student.deleteOne({$and:[{name:"monali"},{"course.marks":89}]})

//  db.student.deleteMany({$or:[{name:"topper"},{marks:{$gte:0}}]})

//  db.student.deleteMany({}) //to empty the whole connection

//  db.dropDatabase() //to delete the whole database





