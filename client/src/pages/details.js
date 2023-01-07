import "../css/DetailsStyles.css"
import { useLocation } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';


const details = () => {

    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [email, setemail] = useState("");
    const [bed, setbed] = useState("");
    // const [hostname, setHostname] = useState("");
    
    
  
    const onnameChange = e => setname(e.target.value);
    const onageChange = e => setage(e.target.value);
    



    const location = useLocation();
    console.log(location.state.id.name);





    const total_data = [
        { name: 'Regular Beds', value: parseInt(location.state.id.general_bed) },
        { name: 'Oxygen Beds', value: parseInt(location.state.id.oxygen_bed) },
        { name: 'ICU Beds', value: parseInt(location.state.id.icu_bed) },
        { name: 'Ventilator Beds', value: parseInt(location.state.id.v_bed) },

    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const general_bed_num_total = parseInt(location.state.id.general_bed)
    const general_bed_num_unavailable = parseInt(location.state.id.general_bed_av)
    const general_bed_arr = []
    for (var i = 0; i < general_bed_num_total; i++) {
        general_bed_arr.push({ key: i, value: "t" })
    }
    for (var i = 0; i < general_bed_num_unavailable; i++) {
        if (general_bed_arr[i].value === "t") {
            general_bed_arr[i].value = "f"

        }
    }

    const oxygen_bed_num_total = parseInt(location.state.id.oxygen_bed)
    const oxygen_bed_num_unavailable = parseInt(location.state.id.oxygen_bed_av)
    const oxygen_bed_arr = []
    for (var i = 0; i < oxygen_bed_num_total; i++) {
        oxygen_bed_arr.push({ key: i, value: "t" })
    }
    for (var i = 0; i < oxygen_bed_num_unavailable; i++) {
        if (oxygen_bed_arr[i].value === "t") {
            oxygen_bed_arr[i].value = "f"

        }
    }

    const icu_bed_num_total = parseInt(location.state.id.icu_bed)
    const icu_bed_num_unavailable = parseInt(location.state.id.icu_bed_av)
    const icu_bed_arr = []
    for (var i = 0; i < icu_bed_num_total; i++) {
        icu_bed_arr.push({ key: i, value: "t" })
    }
    for (var i = 0; i < icu_bed_num_unavailable; i++) {
        if (icu_bed_arr[i].value == "t") {
            icu_bed_arr[i].value = "f"

        }
    }

    const ventilator_bed_num_total = parseInt(location.state.id.v_bed)
    const ventilator_bed_num_unavailable = parseInt(location.state.id.v_bed_av)
    const ventilator_bed_arr = []
    for (var i = 0; i < ventilator_bed_num_total; i++) {
        ventilator_bed_arr.push({ key: i, value: "t" })
    }
    for (var i = 0; i < ventilator_bed_num_unavailable; i++) {
        if (ventilator_bed_arr[i].value === "t") {
            ventilator_bed_arr[i].value = "f"

        }
    }



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



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zrc54nj', 'template_kvrs5bp', form.current, '-CTw5EdyGpJVcQ-XD')
             .then((result) => {
                 console.log(result.text);
             }, (error) => {
                 console.log(error.text);
             });
        
        const hostname = location.state.id.name;
        const oxygen = location.state.id.oxygen_bed_av;
        const general = location.state.id.general_bed_av;
        const icu = location.state.id.icu_bed_av;
        const ventilator = location.state.id.v_bed_av;
        
        const temp = {name,age,email,hostname,oxygen,general,icu,ventilator}
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(temp)
        };
        fetch("/regular_bed_log", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
        e.target.reset()
    };






    return (
        <div>
            <center>
                <br/>
                <h2>{location.state.id.name}</h2>
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
                <br /><br /> <br /><br /><br /> <br /><br />

                <div className="types_charts">
                    <div className="diff_charts">
                        <br />
                        <h3>Regular Beds</h3>
                        <br />
                        <br />
                        <div className="bed_arrangement">
                            {general_bed_arr.map(i => (
                                <div className="bed_item" >{(i.value === "t") ? <img src={require('../assets/hospital-bed.png')} width="40px" /> : <img src={require('../assets/multiply.png')} width="40px" />}</div>
                            ))}
                        </div>
                        <br />

                    </div>

                    <div className="diff_charts">
                        <br />
                        <h3>Oxygen Beds</h3>
                        <br />
                        <br />

                        <div className="bed_arrangement">
                            {oxygen_bed_arr.map(i => (
                                <div className="bed_item" >{(i.value === "t") ? <img src={require('../assets/hospital-bed.png')} width="40px" /> : <img src={require('../assets/multiply.png')} width="40px" />}</div>
                            ))}

                        </div>
                        <br />

                    </div>

                    <div className="diff_charts">
                        <br />
                        <h3>ICU Beds</h3>
                        <br />
                        <br />

                        <div className="bed_arrangement">
                            {icu_bed_arr.map(i => (
                                <div className="bed_item" >{(i.value === "t") ? <img src={require('../assets/hospital-bed.png')} width="40px" /> : <img src={require('../assets/multiply.png')} width="40px" />}</div>
                            ))}

                        </div>
                        <br />

                    </div>



                    <div className="diff_charts">
                        <br />
                        <h3>Ventilator Beds</h3>
                        <br />
                        <br />

                        <div className="bed_arrangement">
                            {ventilator_bed_arr.map(i => (
                                <div className="bed_item" >{(i.value === "t") ? <img src={require('../assets/hospital-bed.png')} width="40px" /> : <img src={require('../assets/multiply.png')} width="40px" />}</div>
                            ))}

                        </div>
                        <br />


                        <br />
                        <br />

                        <br />


                        <br />
                        <br />
                        <br />


                        <br />
                        <br />
                        <br />


                        <br />
                        <br />


                    </div>


                </div>
                <br />
                <center>
                    <div className="contact_form">
                        <br />

                        <h2><b>Book the Bed in Hospital</b></h2>

                        <br /><br />

                        <form ref={form} onSubmit={sendEmail} >
                            <label><b>Patient's Name</b></label>
                            <br />
                            <input type="text" name="name" id="name" placeholder="Enter name" value={name} onChange={onnameChange} pattern="[A-Za-z\s]{1,60}" required /><br /><br /><br />


                            <h6><b>Patient's Age</b></h6>
                            <input type="number" placeholder="Enter Age" id="age" name="age" value={age} onChange={onageChange} min="0" max="100" required /><br /><br /><br />
                            {/*below are two input of hidden type*/}

                            <input type="hidden" name="from_name" value={location.state.id.name} />
                            <div style={{ display: "flex" }}>
                                <input type="radio" id="General_Bed" name="type_bed" value="General Bed" />
                                <label for="General_Bed">General Bed</label>
                                <input type="radio" id="Oxygen_Bed" name="type_bed" value="Oxygen Bed" />
                                <label for="Oxygen_Bed">Oxygen Bed</label>
                                <input type="radio" id="ICU_bed" name="type_bed" value="ICU bed" />
                                <label for="ICU_bed">ICU bed</label>
                                <input type="radio" id="Ventilator_bed" name="type_bed" value="Ventilator bed" />
                                <label for="Ventilator_bed">Ventilator bed</label><br /><br /><br />

                            </div>
                            <h6><b>Patient's Email</b></h6>
                            <input type="email" name="to_email" placeholder="Enter Email" pattern="[^ @]*@[^ @]*" required/>
                    
                            
                            <br />
                            <br />
                            <button type="submit" class="button">Submit</button>
                        </form>
                    </div>
                    <br />
                    <br />
                    <br />





                </center>






            </center>

        </div>
    )
}

export default details;
