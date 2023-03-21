import users from "../Model/StudentSchema.js";

export const createStudent = async (req, res) => {
  const data = new users({
    Name: req.body.Name,
    Course: req.body.Course,
    Email: req.body.Email,
    Contact: req.body.Contact,
    Fees: req.body.Fees,
  });
  console.log(data.Name);
  await data.save();
  res.status(200).json(data);
};

export const getStudent = async (req, res) => {
  const getall = await users.find();
  res.status(200).json(getall);
};

export const updateStudent = async (req, res) => {
  const update = await users.findByIdAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        Name: req.body.Name,
        Course: req.body.Course,
        Email: req.body.Email,
        Contact: req.body.Contact,
        Fees: req.body.Fees,
      },
    },
    {
      new: true,
    }
  );
  res.status(200).json(update);
};

export const deleteStudent = async (req, res) => {
  await users.findByIdAndDelete(req.params.id);
  res.status(200).json("Student Deleted Successfully");
};
