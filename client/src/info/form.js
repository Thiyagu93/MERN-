import { useEffect, useState } from "react";

const InfoForm = (props) => {
  const [id, setid] = useState("");
  const [Name, setName] = useState("");
  const [Course, setCourse] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [Fees, setFees] = useState("");
  const [isEdit, setEdit] = useState(false);

  const infoSubmit = (event) => {
    if (!isEdit) {
      const data = {
        isEdit: isEdit,
        Name: Name,
        Course: Course,
        Email: Email,
        Contact: Contact,
        Fees: Fees,
      };
      props.mydata(data);
    } else {
      const data = {
        isEdit: isEdit,
        _id: id,
        Name: Name,
        Course: Course,
        Email: Email,
        Contact: Contact,
        Fees: Fees,
      };
      props.mydata(data);
    }
  };

  useEffect(() => {
    if (props.setform._id != null) {
      setid(props.setform._id);
      setName(props.setform.Name);
      setCourse(props.setform.Course);
      setEmail(props.setform.Email);
      setContact(props.setform.Contact);
      setFees(props.setform.Fees);
      setEdit(true);
    }
  }, [props]);
  return (
    <form onSubmit={infoSubmit}>
      <div className="form-group-dark">
        <label>Name:</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={Name}
        />
      </div>
      <div className="">
        <lable>Course:</lable>
        <input
          type="text"
          class="form-control"
          onChange={(e) => {
            setCourse(e.target.value);
          }}
          value={Course}
        />
      </div>
      <div>
        <lable>Email :</lable>
        <input
          type="text"
          class="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={Email}
        />
      </div>
      <div>
        <label>Contact</label>
        <input
          type="number"
          class="form-control"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={Contact}
        />
      </div>
      <div>
        <label>Fees</label>
        <input
          type="number"
          class="form-control"
          onChange={(e) => {
            setFees(e.target.value);
          }}
          value={Fees}
        />
      </div>
      <br></br>
      <button type="submit" className="btn btn-success">
        {isEdit ? "update" : "create"}
      </button>
    </form>
  );
};

export default InfoForm;
