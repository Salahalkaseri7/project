import React from 'react'
import "../css/DataStyle.css"
const logs = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      fetch("/api_logs")
        .then((res) => res.json())
        .then((data) => {
  
          setData(data)
        });
    }
      , []);
  return (
    <div>
        
  <table>
    <thead>
      <tr>        
        <th>Date</th>
        <th>Patient's Name</th>
        <th>Patient's Age</th>
        <th>Type of bed</th>
      </tr>
    </thead>
    {data.map((d, index) =>
    
    <tbody>
      <tr>
        <td>{d.date}</td>
        <td>{d.Name}</td>
        <td>{d.Age}</td>
        <td>{d.type_bed}</td>
      </tr>

    </tbody>
    
    )}
  </table>
    </div>
  )
}

export default logs