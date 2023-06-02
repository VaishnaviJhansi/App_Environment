import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser () {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([{
        "Appln_Name":"",
        "Sl":"",
        "Env_Level":"",
        "Infrastructure":"",
        "Infra_Type":"",
        "Server_Name":"",
        "Location":"",
        "Updated_By":"",
        "Updated_on":"",
        "Inserted_by":"",
        "Inserted_On":"",
    }]);
    const { Appln_Name } = useParams();
  

    useEffect(() => {
      getUser();
    }, []);
  

    function getUser() {
      axios.get(`http://127.0.0.1:5000/api/data/${Appln_Name}`).then(function (response) {
        console.log(response.data);
        setInputs(response.data);
      });
    }
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.put(`http://127.0.0.1:5000/update/${Appln_Name}`, inputs).then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  
    }  
    
    
    return (
    <div>
        <div className="container h-100">
           <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <h1>Create user</h1>
                <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Appln_Name</label>
                <input type="text" value={inputs.Appln_Name} className="form-control" name="Appln_Name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>'Sl</label>
                <input type="text" value={inputs.Sl} className="form-control" name="Sl" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Env_Level</label>
                <input type="text" value={inputs.Env_Level} className="form-control" name="Env_Level" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Infrastructure</label>
                <input type="text" value={inputs.Infrastructure} className="form-control" name="Infrastructure" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Infra_Type</label>
                <input type="text" value={inputs.Infra_Type} className="form-control" name="Infra_Type" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Server_Name</label>
                <input type="text" value={inputs.Server_Name} className="form-control" name="Server_Name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Location</label>
                <input type="text" value={inputs.Location} className="form-control" name="Location" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Updated_By</label>
                <input type="text" value={inputs.Updated_By} className="form-control" name="Updated_By" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Updated_on</label>
                <input type="text" value={inputs.Updated_on} className="form-control" name="Updated_on" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Inserted_by</label>
                <input type="text" value={inputs.Inserted_by} className="form-control" name="Inserted_by" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Inserted_On</label>
                <input type="text" value={inputs.Inserted_On} className="form-control" name="Inserted_On" onChange={handleChange} />
              </div>

              <button type="submit" name="update" className="btn btn-primary"> Save </button>
            </form>
          {/* </div> */}
            </div>
            <div className="col-2"></div>
           </div>
        </div>
    </div>
    );
}