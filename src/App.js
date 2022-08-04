import './App.css';
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='App' >

      <h1>Covenant-ROI Dashboard</h1>
      <body>Farming Incentive Gauge Vote (round X) <br></br>
        Vote Start: Thu, DD MM YYYY 16:00:00 GMT - Vote End: Date DD-MM-YYYY
        Total Votes: $ X USD Total Bribes - $ X USD
      </body>

      <body className='BodyApp'>
        <Button variant="contained"
          onClick={() => {
            alert('clicked and will change the view to cards');
          }}> Table View</Button>
        <div className='Cards'>

          <Box className='BoxPool' sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            margin: 10,


          }}>
            <div>
              <h1>Title:Example Pool #1 </h1>
              <body>Voting with X Amount of QI Returns</body>
              <h3>$----.-- USD</h3>
              <Divider></Divider>
            </div>

          </Box>


          <Box sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',

          }}>
            <div>
              <h1>Title:Example Pool #2 </h1>
              <body>Voting with X Amount of QI Returns</body>
              <h3>$----.-- USD</h3>
              <Divider></Divider>

            </div>

          </Box>

        </div>


      </body>



      <h6 className='disclo'>This website is still in BETA. This is 3rd party service independent of Mai Finance and please do your own research. This is not investment advice!</h6>

    </div>


  );
}

export default App;
