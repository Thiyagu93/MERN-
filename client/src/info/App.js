import axios from "axios";
import React, { useEffect, useState } from "react";
import InfoForm from "./form.js";
import InfoTable from "./table.js";

const App = () => {
  const [editdata, editdatafun] = useState([]);
  const [editupdate, updataedit] = useState([]);

  const create = (data) => {
    if (data.isEdit === false) {
      axios
        .post("http://localhost:3001/info/createstudent", data)
        .then((res) => {
          console.log("created");
          getAll();
        });
    } else {
      axios.put("http://localhost:3001/info/update", data).then((res) => {
        console.log("updated");
        getAll();
      });
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios.get("http://localhost:3001/info/get").then((res) => {
      editdatafun(res.data);
    });
  };

  const update = (data) => {
    updataedit(data);
  };

  const del = (data) => {
    axios
      .delete(`http://localhost:3001/info/delete/${data._id}`)
      .then((res) => {
        getAll();
      });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <InfoForm mydata={create} setform={editupdate} />
        </div>
        <div className="col-9">
          <InfoTable getData={editdata} setedit={update} del={del} />
        </div>
      </div>
    </div>
  );
};

export default App;
