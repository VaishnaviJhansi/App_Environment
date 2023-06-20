// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const GetUser = () => {
//     // // let history = useHistory();
//     // const navigate = useNavigate();
//     // // const [apiData, setApiData] = useState("");
//     // const [apiData, setApiData ] = useState({
//     //     appln_name: "",
//     // });

//     // const { appln_name } = apiData;
//     // const onInputChange = e => {
//     //     setApiData({...apiData, [e.target.appln_name]: e.target.value });
//     // };

//     // const onSubmit = async e => {
//     //     e.preventDefault();
//     //     await axios.get("https://6422dc0077e7062b3e24982a.mockapi.io/userData",{
//     //         headers:{"content-type":"application/json"},
//     //         body:JSON.stringify(apiData)
//     //     }).then(()=>{
//     //         alert("Saved successfully.")
//     //         navigate("/");
//     //     }).catch((err)=>{
//     //         console.log(err.message)
//     //     });
//     //     // history.push("/home");
//     //     // navigate("/");
//     // };

//     const [ apiData, setApiData ] = useState([]);

//     function getData() {
//         axios.get('')
//         .then((response) => {
//             setApiData(response.data.reverse());
//         }).catch((err) => {
//             console.log(err)
//         });
//     }

//     return (
//       <div className= "container bg-light">
//         <div className= "w-75 mx-auto shadow p-5">
//           <h2 className= "text-center mb-4">Get A User</h2>
//           <form>
//             <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg"
//                   placeholder="Enter Your Appln_Name"
//                   name="appln_name"
//                   // value={appln_name}
//                   onChange={e => onInputChange(e)}
//                 />
//             </div> <br/>
//             <button className="btn btn-primary btn-block">Submit</button>
//           </form>
//         </div>
//       </div>
//     );
// };

// export default GetUser;




import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  SxProps,
  TextField,
  Modal,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  CssBaseline
} from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";

function GetUser() {
  const [Appln_Name, setAppln_Name] = useState("");
  const [greeting, setGreeting] = useState("");
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [Appln, setAppln] = useState("");
  const [Sl, setSl] = useState("");
  const [Env_Level, setEnv_Level] = useState("");
  const [Infrastructure, setInfrastructure] = useState("");
  const [Infra_Type, setInfra_Type] = useState("");
  const [Server_Name, setServer_Name] = useState("");
  const [Location, setLocation] = useState("");
  const [Updated_By, setUpdated_By] = useState("");
  const [Updated_on, setUpdated_on] = useState("");
  const [Inserted_by, setInserted_by] = useState("");
  const [Inserted_On, setInserted_On] = useState("");
  //   const { state } = useLocation();
  //   const [isView, setIsView] = useState(state && state.isView ? true : state ? false : null);
  //   const [isClose, setIsClose] = useState(false);
  //   const [isSave, setIsSave] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/view", {
        Appln_Name,
      });
      //   setGreeting(response.data);
      setApiData(response.data);
      console.log(Appln_Name);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  // const paperStyle={padding :0,height:'85vh',width:550,margin:"5px auto", overflow: "auto"}
  const paperStyle={padding :20,height:'85vh',width:550,margin:"5px auto", overflow: "auto",marginTop: "3vh"}

  return (
    //     <>
    //     <div className="App">
    //     <form onSubmit={handleSubmit}>
    //       <label>
    //         Name:
    //         <input type="text" value={Appln_Name} onChange={(e) => setAppln_Name(e.target.value)} />
    //      </label>
    //       <button type="submit">Search</button>
    //     </form>
    //     {greeting && <p>{greeting}</p>}

    //   </div>

    // {/*
    //   <h5 style={{marginLeft:"100px",   marginTop:"-35px", marginBottom:"-10px", justifyContent:"center"}}>
    //                 <Box style={{paddingRight:"23px"}}>
    //                     <TablePagination
    //                         rowsPerPageOptions={[10, 25, 100]}
    //                         component="div"
    //                         count={apiData.length}
    //                         rowsPerPage={rowsPerPage}
    //                         page={page}
    //                         onPageChange={handleChangePage}
    //                         onRowsPerPageChange={handleChangeRowsPerPage}
    //                     />
    //                 </Box>
    //             </h5>
    //  */}

    //   <Box sx={{ display: 'flex', flexDirection: 'row', border: 0.5, borderColor: "text.secondary" }} />
    //         <Box p={15} sx={{ display: 'flex', flexDirection: 'column' }}>
    //         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //         <div className="container">
    //         <div className="py-4">
    //             <TableContainer sx={{ height: '75vh',marginTop:5 }} >
    //                 <table class="table border shadow" >
    //                     <thead class="table-dark">
    //                         <tr>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>Appln_Name</th>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>Appln_Description</th>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>OS</th>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>OS_Version</th>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>Appln_Type</th>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>Front_End</th>
    //                             <th scope="col" align="left" style={{ fontSize:"0.8rem",fontWeight:"bold", paddingRight:"0px", backgroundColor:"ButtonShadow"}}>Act</th>

    //                             {/* <th>Action</th>  */}
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                       {apiData
    //                       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //                        .map(item => (
    //                         <tr key={item.experiment_id}>
    //                             {/* <th scope="row">{index + 1}</th> */}
    //                             <td>{item.Appln_Name}</td>
    //                             <td>{item.Appln_Description}</td>
    //                             <td>{item.OS}</td>
    //                             <td>{item.OS_Version}</td>
    //                             <td>{item.Appln_Type}</td>
    //                             <td>{item.Front_End}</td>
    //                             <td>   <span><Link className='text-decoration-none btn-sm btn-success'
    //                             to= {'/Update/${item.Appln_Name}'} >Update</Link></span></td>

    //                             {/* <td >
    //                                 <Link class="btn btn-primary mr-2" >View</Link>
    //                                 <Link class="btn btn-outline-primary mr-2" >Edit</Link>
    //                                 <Link class="btn btn-danger">Delete</Link>
    //                             </td> */}
    //                         </tr>
    //                         ))
    //                       }
    //                     </tbody>
    //                 </table>
    //             </TableContainer>
    //         </div>
    //         </div>
    //         </Paper>
    //         </Box>

    //   </>
    <>
    <Box p={0} sx={{ display: 'flex', flexDirection: 'column' }} >
    <Paper elevation={10} style={paperStyle} sx={{ width: '50%', overflow: 'hidden'}}>   
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              // value={Appln_Name}
              // onChange={(e) => setAppln_Name(e.target.value)}
            />            
          </label>
          <br/>
          <button type="submit">Search</button>
        </form>
        {greeting && <p>{greeting}</p>}
      </div> */}

      <Grid>
        <form onSubmit={handleSubmit}>
        {/* <Typography component="h4"> Name </Typography> */}
        <TextField               
            autoComplete="given-name"
            type="text"
            name="appln_name"
            placeholder="Appln_Name"
            required
            fullWidth
            id="Appln_Name"
            label="Appln_Name"
            // input type="text" 
            value={Appln_Name}
            autoFocus
            onChange={(e) => setAppln_Name(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Search
        </Button>
        </form>
        {greeting && <p>{greeting}</p>}
      </Grid>

      {/* <Container component="main" maxWidth="xs"> */}
      {/* <CssBaseline /> */}
        {apiData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item) => (
            <Box
              sx={{
                marginTop: 1, //option
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* <Typography component="h1" variant="h5">
                    Register
                  </Typography> */}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 0, alignItems: "left" }}
              >

                <Card  style={{maxWidth:450, margin:"0 auto", paddingbottom:12}}>
                <CardContent style={{paddingbottom:0}} >


                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    {/* <Typography component="h4">Application Name</Typography> */}
                    <TextField               
                        autoComplete="given-name"
                        type="text"
                        name="appln_name"
                        placeholder="Appln_Name"
                        required
                        fullWidth
                        id="Appln_Name"
                        label="Appln_Name"
                        // input type="text" 
                        // readOnly={false}
                        value={item.Appln_Name}
                        autoFocus
                        onChange={(e) => setAppln(e.target.value)}
                    />

                    {/* <div className="form-group">
                      <label>Enter Email: </label>
                      <input
                        type="text"
                        value={item.Appln_Name}
                        contentEditable="true"
                        onChange={(e) => setAppln(e.target.value)}
                        className="form-control"
                      />
                    </div> */}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      type="text"
                      name="Sl"
                      value={item.Sl}
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
                      value={item.Env_Level}
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

                  <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  type="text"
                  name="Infrastructure"
                  value={item.Infrastructure}
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
                  value={item.Infra_Type}
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
                  value={item.Server_Name}
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
                  value={item.Location}
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
                  value={item.Updated_By}
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
                  // type="date"
                  type="text"
                  value={item.Updated_on}
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
                  value={item.Inserted_by}
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
                  type="text"
                  // type="date"
                  value={item.Inserted_On}
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
                  {/* <div className="form-column" style={{ "padding": "10px", "padding-top":"7px"}}>
            <Grid item contentEditable="true">
              <Box sx={{ flexDirection: 'column', display: 'flex',marginTop:0.5}} contentEditable="true">
                <Typography fontSize={15}>
                  Description 
                </Typography>
                <TextareaAutosize name="Appln_Description" 
                    style={{ width: '35.1vw', height: '25.4vh' }}
                    id="Appln_Description"
                    //type="text"
                    disabled={isView ? isSave : isClose ? true : false}
                    //contentEditable="true"
                    value={item.Appln_Description}
                    onChange={(e) => setAppln_Description(e.target.value)}
                >
                </TextareaAutosize>                                            
              </Box>
            </Grid>
            </div>

            <Grid item xs={12} sm={3} sx={{marginTop:-14}} >
            <Typography component="h6">
               OS
            </Typography>
              <TextField
                autoComplete="given-name"
                name="OS"
                required
                fullWidth
                id="OS"
                autoFocus
                input type="text"
                value={item.OS} 
                onChange={(e) => setOS(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={3} sx={{marginTop:-14}} >
            <Typography component="h6">
               OS_Version
            </Typography>
              <TextField
                autoComplete="given-name"
                name="OS_Version"
                required
                fullWidth
                id="OS_Version"
                autoFocus
                input type="text"
                value={item.OS_Version} 
                onChange={(e) => setOS_Version(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
            <Typography component="h6">
              Application Type
            </Typography>
              <TextField
                autoComplete="given-name"
                name="Appln_Type"
                required
                fullWidth
                id="Appln_Type"
                autoFocus
                input type="text" 
                value={item.Appln_Type} 
                onChange={(e) => setAppln_Type(e.target.value)}
              />
            </Grid>


            <Grid item xs={12} sm={4} >
            <Typography component="h6">
               Front_End  
            </Typography>
              <TextField
                autoComplete="given-name"
                name="Front_End"
                required
                fullWidth
                id="Front_End"
                autoFocus
                input type="text" 
                value={item.Front_End} 
                onChange={(e) => setFront_End(e.target.value)}
              />
            </Grid> */}

              </Grid>
              </CardContent>
              </Card>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update
                </Button>
              </Box>
            </Box>
            // {greeting && <p>{greeting}</p>}
          ))}
      </Container>
    </Paper>  
    </Box>
    </>
  );
}

export default GetUser;
