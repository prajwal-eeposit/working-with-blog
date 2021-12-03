import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchImage = async () => {
  const host = "http://localhost:5001/beta-cn-0518/us-central1/api/v1";
  const { data } = await axios.get(`${host}/account/5xhFxiHjI56QzOA82GF8/companyLogo`, {
    responseType: 'arraybuffer',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNTg1Zjk5MjExMmZmODgxMTEzOTlhMzY5NzU2MTc1YWExYjRjZjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmV0YS1jbi0wNTE4IiwiYXVkIjoiYmV0YS1jbi0wNTE4IiwiYXV0aF90aW1lIjoxNjM4MTU2NTQ4LCJ1c2VyX2lkIjoiQjd6cnQyN1h6Rmc1eXNmWFFscGJnTTRLQ2l3MiIsInN1YiI6IkI3enJ0MjdYekZnNXlzZlhRbHBiZ000S0NpdzIiLCJpYXQiOjE2Mzg1MzQ4MjUsImV4cCI6MTYzODUzODQyNSwicGhvbmVfbnVtYmVyIjoiKzE2MDQ1NTU1NTU2IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMTYwNDU1NTU1NTYiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwaG9uZSJ9fQ.eIxY8sJgA0eHt0CuR2sWzHXFXjrVBGnuyemoAHdswF74s5y33ruAfVXwBExqLdqEzfcGSQJWvV_pqqWf3LpH0QWbYdqZT9C8FYQ8U1eQDTa34V-2Jvj4zzdKwZnyWNW38UkdWSiF2jekef3YInDWIHQ-JgO-lypgDi7wsZxvW-Bf8wfNjtbI0-1_bXsH79z8sq6lj9S-RVOWHD5iOfe0QvYZLnB46L4TXK-esLtOZdgupudsYZ2DluLNXibqwCQqGkcPbv-RsKu0PMbrwwX2pF4KEAZihaUG15HodLwcj1Angnxfg0K3gRy1Q9f0B2Mp2UzK81yBk_LFliHxzNdVRg'
    }
  });
  return 'data:image/*;base64,' + Buffer.from(data, 'binary').toString('base64')
}

const downloadPDF = async () => {
  const host = "http://localhost:5001/beta-cn-0518/us-central1/api/v1";
  const {data} = await axios.get(`${host}/candidates/69c2c778-97b1-42c6-a92f-6ef50e2a4f6c_B7zrt27XzFg5ysfXQlpbgM4KCiw2/screen/report`, {
    responseType: 'arraybuffer',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjgwNTg1Zjk5MjExMmZmODgxMTEzOTlhMzY5NzU2MTc1YWExYjRjZjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmV0YS1jbi0wNTE4IiwiYXVkIjoiYmV0YS1jbi0wNTE4IiwiYXV0aF90aW1lIjoxNjM4MTU2NTQ4LCJ1c2VyX2lkIjoiQjd6cnQyN1h6Rmc1eXNmWFFscGJnTTRLQ2l3MiIsInN1YiI6IkI3enJ0MjdYekZnNXlzZlhRbHBiZ000S0NpdzIiLCJpYXQiOjE2Mzg1Mzg1ODksImV4cCI6MTYzODU0MjE4OSwicGhvbmVfbnVtYmVyIjoiKzE2MDQ1NTU1NTU2IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrMTYwNDU1NTU1NTYiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwaG9uZSJ9fQ.QRpCUeQhaLA0NjnOaJ6d6mZ1o7tyUq9LjvFDrZRQlBQXDtn_1nSRJp5L8wfg7HrP3S-uw7urRzXVOorpzMtCKuxLAplr3Q5isvNultNA4kN4C2DwpCreVLSGiOKIQN_5V8c72pDtC5dpy7jq4G9xDLv_XDdiPt2F3AF3ZJS_KcTXx8WXyPcO6C_5bnnQ23miuyVdhpttZvJ2VOVICMaJpSccz-zYpULKHY5-syMCYrZ6BuUf6utvzoDr0WtafvlrTGuExKTOWJMHI1oXB_YroqEpmj7ZzB5_1p2tMRfY5kwc8ofryaOqJlWgVZavMGCnIy7uBtgSU98EJ6NOFUxB7w'
    }
  });
  
  const url = window.URL.createObjectURL(new Blob([data] ,{type: "application/pdf"}))
  var link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
}



function App() {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchImage().then((base64) => {
      setImage(base64);
    });
  }, [])

  useEffect(() => {

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <button
          className="App-link"
          onClick={downloadPDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download PDF
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
