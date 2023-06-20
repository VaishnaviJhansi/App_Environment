// import React, { useState, useEffect } from "react";
// import { Box, Paper, TableContainer, Table} from "@mui/material";
// import axios from "axios";
// import { Link } from "react-router-dom";


// const Home = () => {
//     const [apiData, setApiData] = useState([]);

//     function getData() {
//         // Add API
//         axios.get('http://127.0.0.1:5000/viewall')
//             .then((response) => {
//                 setApiData(response.data.reverse());
//             }).catch((err) => {
//                 console.log(err)
//             });
//     }

//     function setDataToStorage(Appln_Name, Sl, Env_Level, Infrastructure, Infra_Type, Server_Name, Location, Updated_By, Updated_on, Inserted_by, Inserted_On ){
//         localStorage.setItem('Appln_Name',Appln_Name);
//         localStorage.setItem('Sl',Sl);
//         localStorage.setItem('Env_Level',Env_Level);
//         localStorage.setItem('Infrastructure',Infrastructure);
//         localStorage.setItem('Infra_Type',Infra_Type)
//         localStorage.setItem('Server_Name',Server_Name)
//         localStorage.setItem('Location',Location) 
//         localStorage.setItem('Updated_By',Updated_By) 
//         localStorage.setItem('Updated_on',Updated_on) 
//         localStorage.setItem('Inserted_by',Inserted_by) 
//         localStorage.setItem('Inserted_On',Inserted_On) 
//     }

//     useEffect(() => {
//         getData();
//     }, []);


//     return (
//         <>
//         <Box sx={{ display: 'flex', flexDirection: 'row', border: 0.5, borderColor: "text.secondary" }} />
//         <Box p={15} sx={{ display: 'flex', flexDirection: 'column' }}>
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}> 
//         <div className="container">
//         <div className="py-4">
//             <TableContainer sx={{ height: '70vh',marginTop:5 }} >
//                 <p> <Link to="/addnewuser" className="btn btn-success">Add New User</Link> </p>
//                 <table class="table border shadow" >
//                     <thead backgroundcolor='black' class="table-dark">
//                         <tr>
//                             <th scope="col">Appln_Name</th>
//                             <th scope="col">Sl</th>
//                             <th scope="col">Env_Level</th>
//                             <th scope="col">Infrastructure</th>
//                             <th scope="col">Infra_Type</th>
//                             <th scope="col">Server_Name</th>
//                             <th scope="col">Location</th>
//                             <th scope="col">Updated_By</th>
//                             <th scope="col">Updated_on</th>
//                             <th scope="col">Inserted_by</th>
//                             <th scope="col">Inserted_On</th>
//                             {/* <th>Action</th>  */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                       {apiData
//                        .map(item => (
//                         <tr key={item.experiment_id}>
//                             {/* <th scope="row">{index + 1}</th> */}
//                             <td>{item.Appln_Name}</td>
//                             <td>{item.Sl}</td>
//                             <td>{item.Env_Level}</td>
//                             <td>{item.Infrastructure}</td>
//                             <td>{item.Infra_Type}</td>
//                             <td>{item.Server_Name}</td>
//                             <td>{item.Location}</td>
//                             <td>{item.Updated_By}</td>
//                             <td>{item.Updated_on}</td>
//                             <td>{item.Inserted_by}</td>
//                             <td>{item.Inserted_On}</td>          
//                             <td >
//                                 {/* <Link class="btn btn-primary mr-2" >View</Link>
//                                 <Link class="btn btn-outline-primary mr-2" >Edit</Link>
//                                 <Link class="btn btn-danger">Delete</Link> */}
//                                 <Link to="" className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
//                                 <button className="btn btn-danger">Delete</button>
//                             </td>
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
//         </>
//     )
// }

// export default Home;





import React, { useState, useEffect } from "react";
import { Box, Paper, TableContainer, Table, Button} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


function Home  ()  {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUsers();
    }, []);


    function getUsers() {
        // Add API
        axios.get('http://127.0.0.1:5000/viewall1')
            .then(function(response) {
            
               console.log(response.data);
               setUsers(response.data);  
            });
    }


    return (
        <>
        <Box sx={{ display: 'flex', flexDirection: 'row', border: 0.5, borderColor: "text.secondary" }} />
        <Box p={21} sx={{ display: "flex", flexDirection: "column" }}>
        {/* <Box p={18} sx={{ display: 'flex', flexDirection: 'column' }}> */}
        <Paper sx={{ display: "flex", width: '100%', overflow: 'hidden' }}> 
        <div className="container">
        <div className="py-4">
            {/* <TableContainer sx={{ height: '70vh',marginTop:5 }} > */}
            <TableContainer sx={{ height: "70vh", marginTop: '-20vh' }}>
                {/* <p> <Link to="/addnewuser" className="btn btn-success">Add New User</Link> </p> */}
                <table class="table border shadow" >
                    <thead backgroundcolor='black' class="table-dark">
                        <tr>
                           <th scope="col"><h4>Appln_Name</h4></th>
                           <th scope="col"><h4>Sl</h4></th>
                           <th scope="col"><h4>Env_Level</h4></th>
                           <th scope="col"><h4>Infrastructure</h4></th>
                           <th scope="col"><h4>Infra_Type</h4></th>
                           <th scope="col"><h4>Server_Name</h4></th>
                           <th scope="col"><h4>Location</h4></th>
                           <th scope="col"><h4>Updated_By</h4></th>
                           <th scope="col"><h4>Updated_on</h4></th>
                           <th scope="col"><h4>Inserted_by</h4></th>
                           <th scope="col"><h4>Inserted_On</h4></th>
                           <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                      {users.map((user, key) =>
                        <tr key={key}>
                            {/* <th scope="row">{index + 1}</th> */}
                            <td>{user.Appln_Name}</td>
                            <td>{user.Sl}</td>
                            <td>{user.Env_Level}</td>
                            <td>{user.Infrastructure}</td>
                            <td>{user.Infra_Type}</td>
                            <td>{user.Server_Name}</td>
                            <td>{user.Location}</td>
                            <td>{user.Updated_By}</td>
                            <td>{user.Updated_on}</td>
                            <td>{user.Inserted_by}</td>
                            <td>{user.Inserted_On}</td>          
                            <td >
                                {/* <Link class="btn btn-primary mr-2" >View</Link>
                                <Link class="btn btn-outline-primary mr-2" >Edit</Link>
                                <Link class="btn btn-danger">Delete</Link> */}
                                {/* <Link to="" className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                                <button className="btn btn-danger">Delete</button> */}
                                {/* <Link to={`user/${user.Appln_Name}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link> */}
                                {/* <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button> */}
                                <Button component={Link} to={`/${user.Appln_Name}/edit`} varient="contained" color="primary" > <BsFillPencilFill /> </Button>
                            </td>
                            <td>
                                <Button onClick={() => deleteUser(user.Appln_Name)} varient="contained" color="primary" sx={{marginLeft:-5}}> <BsFillTrashFill /> </Button>
                            </td>
                        </tr> 
                        )
                      }
                    </tbody>
                </table>
            </TableContainer>
        </div>
        </div>
        </Paper>
        </Box>
        </>
    )
}

export default Home;