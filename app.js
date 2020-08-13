const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/students-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const studentSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  schoolName: String,
  active: Boolean
});

const Student = mongoose.model("Student", studentSchema);

let alabi = new Student({
  firstname: "Alabi",
  lastname: "Johnson",
  age: 29,
  schoolName: "St. Gregory",
  active: false
});

alabi.save((err, alabi) => {
  if (err) {
    console.log(err);
  } else {
    console.log(alabi);
  }
});
