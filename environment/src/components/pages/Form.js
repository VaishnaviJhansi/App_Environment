import React, { useState } from 'react';
import axios from 'axios';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Paper, Container, Grid } from "@mui/material";
import { Card, CardContent } from "@material-ui/core";
// import { Dropdown, Selection } from 'react-dropdown-now';
// import 'react-dropdown-now/style.css';


function Form() {

  const [Appln, setAppln] = useState('');
  const [Sl, setSl] = useState('');
  const [Env_Level, setEnv_Level] = useState('');
  const [Infrastructure, setInfrastructure] = useState('');
  const [Infra_Type, setInfra_Type] = useState('');
  const [Server_Name, setServer_Name] = useState('');
  const [Location, setLocation] = useState('');
  const [Updated_By, setUpdated_By] = useState('');
  const [Updated_on, setUpdated_on] = useState('');
  const [Inserted_by, setInserted_by] = useState('');
  const [Inserted_On, setInserted_On] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://127.0.0.1:5000/post', 
        { Appln, Sl, Env_Level, Infrastructure, Infra_Type, Server_Name, Location, Updated_By, Updated_on, Inserted_by, Inserted_On });
     setGreeting(response.data.greeting);
    } catch (error) {
      console.error('Error:', error);
    } 
  };


  const paperStyle={padding :0,height:'85vh',width:550,margin:"5px auto", overflow: "auto"}
//   const btnstyle={margin:'8px 0'}

  return (
    <>
    {/* <Box sx={{ display: 'flex', flexDirection: 'row', border: 0.5, borderColor: "text.secondary" }} /> */}
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
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}

          <form onSubmit={handleSubmit}>

          {/* <Typography component="h1" variant="h5">
            Environment Details
          </Typography> */}
          
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
            <Card  style={{maxWidth:450, margin:"0 auto", paddingbottom:12}}>
            <CardContent style={{paddingbottom:0}} >


            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="appln_name"
                  value={Appln}
                  placeholder="Appln_Name" 
                  required
                  fullWidth
                  id="Appln_Name"
                  label="Appln_Name"
                  // type="Appln_Name"
                  autoFocus
                  onChange={(e) => setAppln(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Sl"
                  value={Sl}
                  placeholder="Sl"
                  required
                  fullWidth
                  id="Sl"
                  label="Sl"
                  // type="Sl"
                autoFocus
                onChange={(e) => setSl(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Env_Level"
                  value={Env_Level}
                  placeholder="Env_Level"
                  required
                  fullWidth
                  id="Env_Level"
                  label="Env_Level"
                  // type="Env_Leve"
                  autoFocus
                  onChange={(e) => setEnv_Level(e.target.value)}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <Dropdown
                  autoComplete="given-name"
                  type="text"
                  name="Env_Level"
                  value="Env_Level"
                //   value="Env_Level"
                  placeholder="Select an option"
                  options={['Env_Level', 'Dev', 'Test', 'Stagging', 'Prod']}
                  onChange={(value) => console.log('change!', value)}
                  onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                  onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                  onOpen={() => console.log('open!')}
                  required
                  fullWidth
                  id="Env_Level"
                  label="Env_Level"
                  // type="Env_Level"
                  autoFocus
                //   onChange={(e) => setEnv_Level(e.target.value)}
                />;
                <Selection
                   options={['Env_Level', 'Dev', 'Test', 'Stagging', 'Prod']}
                   value="Env_Level"
                   onChange={(value) => console.log('change!', value)}
                />;
              </Grid> */}

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Infrastructure"
                  value={Infrastructure}
                  placeholder="Infrastructure"
                  required
                  fullWidth
                  id="Infrastructure"
                  label="Infrastructure"
                  // type="Infrastructure"
                  autoFocus
                  onChange={(e) => setInfrastructure(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Infra_Type"
                  type="text"
                  value={Infra_Type}
                  placeholder="Infra_Type"
                  required
                  fullWidth
                  id="Infra_Type"
                  label="Infra_Type"
                  // type="Infra_Type"
                  autoFocus
                  onChange={(e) => setInfra_Type(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Server_Name"
                  type="text"
                  value={Server_Name}
                  placeholder="Server_Name"
                  required
                  fullWidth
                  id="Server_Name"
                  label="Server_Name"
                  // type="Server_Name"
                  autoFocus
                  onChange={(e) => setServer_Name(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Location"
                  type="text"
                  value={Location}
                  placeholder="Location"
                  required
                  fullWidth
                  id="Location"
                  label="Location"
                  // type="Location"
                  autoFocus
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Updated_By"
                  type="text"
                  value={Updated_By}
                  placeholder="Updated_By"
                  required
                  fullWidth
                  id="Updated_By"
                  label="Updated_By"
                  autoFocus
                  onChange={(e) => setUpdated_By(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Updated_on"
                  type="date"
                  value={Updated_on}
                  placeholder="Updated_on"
                  required
                  fullWidth
                  id="Updated_on"
                  label="Choose the Date"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setUpdated_on(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Inserted_by"
                  type="text"
                  value={Inserted_by}
                  placeholder="Inserted_by"
                  required
                  fullWidth
                  id="Inserted_by"
                  label="Inserted_by"
                  autoFocus
                  onChange={(e) => setInserted_by(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Inserted_On"
                  type="date"
                  value={Inserted_On}
                  placeholder="Inserted_On"
                  required
                  fullWidth
                  id="Inserted_On"
                  label="Choose the Date"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setInserted_On(e.target.value)}
                />
              </Grid>

            </Grid>
            
            </CardContent>
            </Card>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
        
          {/* </Box> */}
          </form>
          {greeting && <p>{greeting}</p>}
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </Paper>
    </Box>
    </>
  );
}

export default Form;