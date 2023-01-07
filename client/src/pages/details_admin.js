import "../css/DetailsStyles.css"
import { useLocation } from 'react-router-dom';

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';

const details_admin = () => {
    const location = useLocation();
    console.log(location.state.id.name)
    const hostname = location.state.id.name;
    const temp1 = {hostname}
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(temp1)
    };
    fetch("/api_logs", requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const total_data = [
        { name: 'Regular Beds', value: parseInt(location.state.id.general_bed) },
        { name: 'Oxygen Beds', value: parseInt(location.state.id.oxygen_bed) },
        { name: 'ICU Beds', value: parseInt(location.state.id.icu_bed) },
        { name: 'Ventilator Beds', value: parseInt(location.state.id.v_bed) },

    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const data = [
        {
            name: 'Regular Beds',
            Total: parseInt(location.state.id.general_bed),
            Available: parseInt(location.state.id.general_bed_av),

        },
        {
            name: 'Oxygen Beds',
            Total: parseInt(location.state.id.oxygen_bed),
            Available: parseInt(location.state.id.oxygen_bed_av),

        },
        {
            name: 'ICU Beds',
            Total: parseInt(location.state.id.icu_bed),
            Available: parseInt(location.state.id.icu_bed_av),

        },
        {
            name: 'Ventilator Beds',
            Total: parseInt(location.state.id.v_bed),
            Available: parseInt(location.state.id.v_bed_av),

        }

    ];

    const [data1, setData1] = React.useState([]);
    React.useEffect(() => {
        fetch("/api_logs")
            .then((res) => res.json())
            .then((data1) => {

                setData1(data1)
            });
    }
        , []);

    return (
        <>
            <br />
            <br />

            <center>
                <h1>Welcome to {location.state.id.name}</h1>
            </center>
            <hr style={{ height: "10px" }} />
            <br />

            <center>
                <h3>Update Bed Occupation Details</h3>
            </center>

            <br />


            <div className="types_charts">

                <div className="diff_charts">
                    <br />
                    <br />

                    <h3>Regular Beds</h3>
                    <br />
                    <p>Current vacancy :- {location.state.id.general_bed}</p>

                    <form class="form-container" method="post" action="/general_update">
                        <input type="hidden" placeholder="Enter Name" id="name" name="name" value={location.state.id.name} required />
                        <input type="number" placeholder="New Vacancy" id="vacancy" name="vacancy" required />

                        <button type="submit" class="btn">Change</button>

                    </form>


                </div>

                <div className="diff_charts">
                    <br />

                    <br />
                    <h3>Oxygen Beds</h3>
                    <br />
                    <p>Current vacancy :- {location.state.id.oxygen_bed}</p>
                    <form class="form-container" method="post" action="/oxygen_update">
                        <input type="hidden" placeholder="Enter Name" id="name" name="name" value={location.state.id.name} required />
                        <input type="number" placeholder="New Vacancy" id="vacancy" name="vacancy" required />

                        <button type="submit" class="btn">Change</button>

                    </form>



                </div>
                <div className="diff_charts">
                    <br />
                    <br />

                    <h3>ICU Beds</h3>
                    <br />
                    <p>Current vacancy :- {location.state.id.icu_bed}</p>
                    <form class="form-container" method="post" action="/icu_update">
                        <input type="hidden" placeholder="Enter Name" id="name" name="name" value={location.state.id.name} required />
                        <input type="number" placeholder="New Vacancy" id="vacancy" name="vacancy" required />

                        <button type="submit" class="btn">Change</button>

                    </form>



                </div>
                <div className="diff_charts">
                    <br />
                    <br />

                    <h3>Ventilator Beds</h3>
                    <br />
                    <p>Current vacancy :- {location.state.id.v_bed}</p>
                    <form class="form-container" method="post" action="/ventilator_update">
                        <input type="hidden" placeholder="Enter Name" id="name" name="name" value={location.state.id.name} required />
                        <input type="number" placeholder="New Vacancy" id="vacancy" name="vacancy" required />

                        <button type="submit" class="btn">Change</button>

                    </form>



                </div>

            </div>
            <hr style={{ height: "10px" }} />
            <br />
            <center>
                <h3>Charts</h3>
            </center>

            <br />
            <div className="total_charts">
                <div className="chart1">
                    <br />
                    <h4>Chart for all types of bed Available</h4>
                    <PieChart width={1000} height={600}>
                        <Pie
                            data={total_data}
                            cx="30%"
                            cy="35%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {total_data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>

                </div>
                <div className="chart2">
                    <br />
                    <h4>Chart for Availabilty for individual beds</h4>


                    <br />


                    <ResponsiveContainer width="100%" height="80%">
                        <BarChart
                            width={300}
                            height={200}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Total" fill="lightblue" />
                            <Bar dataKey="Available" fill="lightgreen" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>


            </div>

            <hr style={{ height: "10px" }} />
            <center>

                <h2>Patient Logs</h2>
                <table>

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Patient's Name</th>
                            <th>Patient's Age</th>
                            
                        </tr>
                    </thead>
                    {data1.map((d, index) =>
                    

                        <tbody>
                            <tr>
                                <td>{d.date}</td>
                                <td>{d.Name}</td>
                                <td>{d.Age}</td>
                                
                            </tr>

                        </tbody>

                    )}
                </table>


            </center>

        </>
    )
}

export default details_admin