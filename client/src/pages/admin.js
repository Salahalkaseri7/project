import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "../css/AdminStyle.css"
const admin = () => {
    const navigate = useNavigate();
    
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => {
  
          setData(data)
        });
    }
      , []);

      const data_hospital={"_id":{"$oid":"6386ff3f377dfdcf319dd8dd"},"name":"hospitalA","application_id":"110011","vacancy":"32","contact":"7899216543","password":"Hospital@12345","general_bed":"10","icu_bed":"9","oxygen_bed":"12","ventilator_bed":"8","link":"https://medicaldialogues.in/h-upload/2022/08/30/184686-hospital-1.webp","general_bed_av":"3","icu_bed_av":"1","oxygen_bed_av":"2","ventilator_bed_av":"3","v_bed":"11","v_bed_av":"2"}

    function navigateToContacts() {
        var UN = document.getElementById("appid").value;
        var PW = document.getElementById("password").value;
        var auth_bool = 0;
        
        data.map((d, index) =>{
            if(d.name==UN && d.password==PW){
                
            console.log("this"+data_hospital)
             navigate("/details_admin",{state : {id:d}})
                //navigate("/details")
                
                
            
            }
        

         })
        // if(auth_bool==1){
        //     navigate("/details",{state : {id:data}})

        // }
        // else{
        //     alert("INVALID AUTHENTICATION !!!");
        //     navigate('/admin');

        // }
    };
    // const data_user = document.getElementById("appid").value;
    return (
        <div>

            <div id="login-form-wrap">
                <h2>Login</h2>
                <form id="login-form" method="post" action="/post">
                    <p>
                        <input type="text" id="appid" name="appid" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Password" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        
                    
                        <button   class="button" onClick={navigateToContacts}>Submit</button>
                    </p>
                </form>
                
                <div id="create-account-wrap">
                    <p>Not a member? <Link to="/signup">Create Account</Link></p>
                    </div>
                </div>
            

            </div>
        
            )
}

export default admin