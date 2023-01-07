import React from 'react'
import { Link } from 'react-router-dom'
import "../css/AdminStyle.css"
const signup = () => {
    return (
        <div>

            <div id="login-form-wrap">
                <h2>Sign Up</h2>
                <form id="login-form" method="post" action="/signup">
                    <p>
                        <input type="text" id="usernameregister" name="usernameregister" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="password" id="passwordregister" name="passwordregister" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Password" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="password" id="password1register" name="password1register" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Confirm Password" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="r_appid" name="r_appid" min="100000" max = "999999"  placeholder="Application ID" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="number" name="number" pattern="[0-9]"  placeholder="Contact" min="7000000000" max="9999999999" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="vacancyregister" name="vacancyregister" pattern="[0-9]" min="0" max = "100000" placeholder="Enter the total vacancy" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="generalbed" name="generalbed" pattern="[0-9]" min="0" max = "100000" placeholder="Enter total number of general bed" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="generalbedav" name="generalbedav" pattern="[0-9]" min="0" max = "100000"  placeholder="Enter total number of available beds of general category" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="oxygenbed" name="oxygenbed" pattern="[0-9]" min="0" max = "100000" placeholder="Enter total number of oxygen bed" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="oxygenbedav" name="oxygenbedav" pattern="[0-9]" min="0" max = "100000" placeholder="Enter the number of oxygen bed available" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="icubed" name="icubed" pattern="[0-9]" min="0" max = "100000" placeholder="Enter total number of Icu bed" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="icubedav" name="icubedav" pattern="[0-9]" min="0" max = "100000" placeholder="Enter the number Icu bed available" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="ventilatorbed" name="ventilatorbed" pattern="[0-9]" min="0" max = "100000" placeholder="Enter the number of ventilator bed" required/><i class="validation"><span></span><span></span></i>
                    </p>
                    <p>
                        <input type="number" id="ventilatorbedav" name="ventilatorbedav" pattern="[0-9]" min="0" max = "100000" placeholder="Enter the number of ventilator bed available" required/><i class="validation"><span></span><span></span></i>
                    </p>

                    
                    <p>
                        <input type="submit" id="login" class="button" value="Login"/>
                    </p>
                </form>
                <div id="create-account-wrap">
                    <p>Already a member? <Link to="/admin">Signin</Link></p>
                    </div>
                </div>
            

            </div>
        
            )
}

export default signup