import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Container, Grid, TextField, Button } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Card, CardContent } from "@material-ui/core";

export default function EditUser () {
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
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.put(`http://127.0.0.1:5000/update/${Appln_Name}`, inputs).then(function (response) {
        console.log(response.data);
        navigate('/');
      });
  
    };

    const HandleSave=()=>{
      alert("Data Updated Successfully")
    };

    const paperStyle={padding :0,height:'87vh',width:550,margin:"5px auto", overflow: "auto"}

    return (
    <>
    <Box p={0} sx={{ display: 'flex', flexDirection: 'column' }} >
    <Paper elevation={10} style={paperStyle} sx={{ width: '100%', overflow: 'hidden'}}> 
    <Container component="main" maxWidth="xs">
    <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        
        <form onSubmit={handleSubmit}>

        <Card  style={{maxWidth:450, margin:"0 auto", paddingbottom:12}}>
        <CardContent style={{paddingbottom:0}} >

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Appln_Name"
                  value={inputs.Appln_Name}
                  placeholder="Appln_Name" 
                  required
                  fullWidth
                  id="Appln_Name"
                  // label="Appln_Name"
                  // type="Appln_Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Sl"
                  value={inputs.Sl}
                  placeholder="Sl"
                  required
                  fullWidth
                  id="Sl"
                  // label="Sl"
                  // type="Sl"
                autoFocus
                onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Env_Level"
                  value={inputs.Env_Level}
                  placeholder="Env_Level"
                  required
                  fullWidth
                  id="Env_Level"
                  // label="Env_Level"
                  // type="Env_Leve"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Infrastructure"
                  value={inputs.Infrastructure}
                  placeholder="Infrastructure"
                  required
                  fullWidth
                  id="Infrastructure"
                  // label="Infrastructure"
                  // type="Infrastructure"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Infra_Type"
                  type="text"
                  value={inputs.Infra_Type}
                  placeholder="Infra_Type"
                  required
                  fullWidth
                  id="Infra_Type"
                  // label="Infra_Type"
                  // type="Infra_Type"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Server_Name"
                  type="text"
                  value={inputs.Server_Name}
                  placeholder="Server_Name"
                  required
                  fullWidth
                  id="Server_Name"
                  // label="Server_Name"
                  // type="Server_Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Location"
                  type="text"
                  value={inputs.Location}
                  placeholder="Location"
                  required
                  fullWidth
                  id="Location"
                  // label="Location"
                  // type="Location"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Updated_By"
                  type="text"
                  value={inputs.Updated_By}
                  placeholder="Updated_By"
                  required
                  fullWidth
                  id="Updated_By"
                  // label="Updated_By"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Updated_on"
                //   type="date"
                  type="text"
                  value={inputs.Updated_on}
                  placeholder="Updated_on"
                  required
                  fullWidth
                  id="Updated_on"
                  // label="Choose the Date"
                  autoFocus
                //   InputLabelProps={{
                //     shrink: true,
                //   }}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Inserted_by"
                  type="text"
                  value={inputs.Inserted_by}
                  placeholder="Inserted_by"
                  required
                  fullWidth
                  id="Inserted_by"
                  // label="Inserted_by"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Inserted_On"
                //   type="date"
                  type="text"
                  value={inputs.Inserted_On}
                  placeholder="Inserted_On"
                  required
                  fullWidth
                  id="Inserted_On"
                  // label="Choose the Date"
                  autoFocus
                //   InputLabelProps={{
                //     shrink: true,
                //   }}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>  
        </CardContent>
        </Card>

        <Grid item>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={HandleSave}
            >
              Save
        </Button>
        </Grid>
        
        </form>


    {/* <div>
        <div className="container h-100" style={{marginTop: "20px", marginLeft: "200px"}}>
           <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <h1>Edit user</h1>
                <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Appln_Name</label>
                <input type="text" value={inputs.Appln_Name} className="form-control" name="Appln_Name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label>Sl</label>
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
    
              <button type="submit" name="update" className="btn btn-primary" onClick={HandleSave}> Save </button>
            </form>
          
            </div>
            <div className="col-2"></div>
           </div>
        </div>
    </div> */}

    </Box>
    </Container>
    </Paper>
    </Box>
    </>
    );
}