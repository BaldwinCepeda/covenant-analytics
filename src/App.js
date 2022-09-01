import './App.css';
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import { request, gql } from 'graphql-request'
import React from 'react';




const url = "https://hub.snapshot.org/graphql";
const query = `
query {
  space(id: "qidao.eth") {
    name
   
  }
}
`;



function App() {

  const [name, setName] = React.useState([]);


  React.useEffect(() => {
    fetch(url, {
      method: 'POST',

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        query: query
      })
    }).then(response => response.json())
      .then(data => setName(data.data.space.name))
    //.then(data => console.log(data.data.space.name))


  }, [])






  return (
    <div className='App' >
      <h1 className='Title'>Covenant-ROI Dashboard</h1>
      <div className='Heading'>

        <body>Farming Incentive Gauge Vote (round X) <br></br>
          Vote Start: Thu, DD MM YYYY 16:00:00 GMT - Vote End: Date DD-MM-YYYY
          Total Votes: $ X USD Total Bribes - $ X USD
        </body>
      </div>


      <body className='BodyApp'>
        <Button variant="contained"
          onClick={() => {
            alert('clicked and will change the view to cards');
          }}> Table View</Button>
        <div className='Cards'>

          <Box className='BoxPool' sx={{
            width: 300,
            height: 300,
            backgroundColor: '#35B0AB;',
            margin: 10,
            font: 'Inter',


          }}>
            <div>
              <h1> {name} </h1>
              <h4>Voting with X Amount of QI Returns</h4>
              <h3>$----.-- USD</h3>
              <Divider></Divider>
            </div>

          </Box>


          <Box className='BoxPool' sx={{
            width: 300,
            height: 300,
            backgroundColor: '#35B0AB;',
            font: 'Inter'

          }}>
            <div>
              <h1>{name} </h1>
              <h4>Voting with X Amount of QI Returns</h4>
              <h3>$----.-- USD</h3>
              <Divider></Divider>

            </div>

          </Box>

        </div>


      </body >



      <h6 className='disclo'>This website is still in BETA. This is 3rd party service independent of Mai Finance and please do your own research. This is not investment advice!</h6>

    </div >


  );
}

export default App;

