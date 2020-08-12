const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/students-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const studentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
  active: Boolean
});

const Student = mongoose.model("Student", studentSchema);
