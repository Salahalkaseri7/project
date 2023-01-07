import React from 'react'
import "../css/about.css"

const about = () => {
  return (
    <div>
        	<div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
                <br/>
				<div class="content">
                    
					<h2>To develop a portal for detecting occupancy of beds in Hospitals</h2>
					<p>At the time pf pandemic/ crisis, Availability of beds in Hospitals decrease rapidly
                        it become difficult for common people to track the Available beds in hospital
                        This portal is created to get the information about the occupancy of bed and
                        necessary items for the patients especially in emergency cases, this portal is
                        created to provide quick remedy
                        A portal will make them easy to find suitable hospitals according to situation
                        with patient
                        This portal makes it is easy to swift action in case of emergency and
                        helps the patients to getimmediate healthcare.</p>
                        <br/>
					
				</div>
				<div class="social">
					<a href="https://www.facebook.com/AmorHospitals/"><i class="fab fa-facebook-f"></i></a>
					<a href="https://twitter.com/hospitalnewscom?lang=en"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/medicoverhospitals/?hl=en"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src={require('../assets/bed.jpeg')}/>
			</div>
		</div>
	</div>


    </div>
  )}

export default about