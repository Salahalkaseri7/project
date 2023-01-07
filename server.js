var express = require("express");
var app = express();
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://yashdarshankar:Yash%401001@cluster0.gto09ok.mongodb.net/mernstack?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "mernstack";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.post("/post", (req, res) => {
    console.log("Connected to React");


    res.redirect("http://localhost:5000/about");
});


app.get("/api", function (request, response) {

    async function run() {
        try {
            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
            const myDoc = await col.find({}).toArray();

            response.json(myDoc);

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);

});

app.get("/api_logs", function (request, response) {
    var hostname = request.body.hostname;

    async function run() {
        try {
            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_log");
            const myDoc = await col.find({}).toArray();

            response.json(myDoc);

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);

});


app.post("/regular_bed_log", function (request, response) {
    var name = request.body.name;
    var age = request.body.age;
    var email = request.body.to_email;
    var bed = request.body.bed;
    var hostname = request.body.hostname;
    var general = request.body.general;
    var oxygen = request.body.oxygen;
    var icu = request.body.icu;
    var ventilator = request.body.ventilator;
    
    
    async function run() {
        try {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("hospital_log");
            const col1 = db.collection("hospital_info");
            
            let personDocument = {
                "date": today,
                "type_bed": bed,
                "Name": name,
                "Age": age,
                "email":email,
                "Hospital":hostname
            }
            console.log("inserted");
            console.log(today);
            await col.insertOne(personDocument);
            await col1.findOneAndUpdate(
                { "name" : hostname },
                { $set: { "general_bed_av" : (parseInt(general) + 1).toString() , "oxygen_bed_av" : (parseInt(oxygen) + 1).toString(), "icu_bed_av" : (parseInt(icu) + 1).toString(), "v_bed_av" : (parseInt(ventilator) + 1).toString() } }
             )


        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});
app.post("/oxygen_bed_log", function (request, response) {
    var name = request.body.name;
    var age = request.body.age;
    async function run() {
        try {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("hospital_log");
            let personDocument = {
                "date": today,
                "type_bed": "Oxygen Bed",
                "Name": name,
                "Age": age,
            }
            console.log("inserted");
            console.log(today);
            await col.insertOne(personDocument);

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});
app.post("/icu_bed_log", function (request, response) {
    var name = request.body.name;
    var age = request.body.age;
    async function run() {
        try {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("hospital_log");
            let personDocument = {
                "date": today,
                "type_bed": "ICU Bed",
                "Name": name,
                "Age": age,
            }
            console.log("inserted");
            console.log(today);
            await col.insertOne(personDocument);

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});
app.post("/ventilator_bed_log", function (request, response) {
    var name = request.body.name;
    var age = request.body.age;
    async function run() {
        try {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("hospital_log");
            let personDocument = {
                "date": today,
                "type_bed": "Ventilator Bed",
                "Name": name,
                "Age": age,
            }
            console.log("inserted");
            console.log(today);
            await col.insertOne(personDocument);

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});




app.post("/signup", function (request, response) {
    var username = request.body.usernameregister;
    var password = request.body.passwordregister;
    var password1 = request.body.password1register;
    var application_id = request.body.r_appid;
    var contact = request.body.number;
    var vacancy = request.body.vacancyregister;
    var general = request.body.generalbed;
    var generalav = request.body.generalbedav;
    var icu = request.body.icubed;
    var icuav = request.body.icubedav;
    var oxygen = request.body.oxygenbed;
    var oxygenav = request.body.oxygenbedav;
    var ventilator = request.body.ventilatorbed;
    var ventilatorav = request.body.ventilatorbedav;





    async function run() {
        try {
            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
            let personDocument = {
                "name": username,
                "application_id": application_id,
                "contact": contact,
                "password": password,
                "vacancy": vacancy,
                "general_bed": general,
                "icu_bed": icu,
                "oxygen_bed": oxygen,
                "v_bed": ventilator,
                "general_bed_av": generalav,
                "icu_bed_av": icuav,
                "oxygen_bed_av": oxygenav,
                "v_bed_av": ventilatorav,
                "link": "https://thumbs.dreamstime.com/b/modern-style-hospital-building-straight-lines-concrete-facing-30588884.jpg",


            }
            if (password === password1) {
                console.log("inserted the signup function")
                await col.insertOne(personDocument);

            }
            else {
                console.log("invalidddd");
            }

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});

app.post("/admining", function (request, response) {
    var name = request.body.appid;
    var age = request.body.password;
    async function run() {
        try {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("hospital_log");
            const col1 = db.collection("hospital_info")
            let personDocument = {
                "date": today,
                "type_bed": "Regular Bed",
                "Name": name,
                "Age": age,
            }
            console.log("inserted");
            console.log(today);
            await col.insertOne(personDocument);


        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);
});

app.get("/admin1", function (request, response) {

    var username = request.body.appid;
    var password = request.body.password;
    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to serverrrrrrrrrrrr");
            const db = client.db(dbName);


            const col = db.collection("hospital_info");


            const myDoc = await col.findOne({ "name": username });



            if (myDoc.name == username && myDoc.password == password) {

                console.log("succcesssfullly logged in");
                response.sendFile(__dirname + "/success.html");



            }
            else {

                console.log("invallllid");
                response.sendFile(__dirname + "/fail.html");


            }



        } catch (err) {
            console.log(err.stack);
        }

        finally {
            await client.close();
        }
    }

    run().catch(console.dir);


});

app.post("/general_update", function (request, response) {
    
    var name = request.body.name;
    var change = request.body.vacancy;
    console.log("updateing general bed to "+change);
    async function run() {
        try {

            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
        
            await col.findOneAndUpdate(
                { "name" : name },
                { $set: { "general_bed" : change } }
             )

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);


});

app.post("/oxygen_update", function (request, response) {
    
    var name = request.body.name;
    var change = request.body.vacancy;
    console.log("updateing oxygen bed to "+change);
    async function run() {
        try {

            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
        
            await col.findOneAndUpdate(
                { "name" : name },
                { $set: { "oxygen_bed" : change } }
             )

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);


});
app.post("/icu_update", function (request, response) {
    
    var name = request.body.name;
    var change = request.body.vacancy;
    console.log("updateing icu bed to "+change);
    async function run() {
        try {

            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
        
            await col.findOneAndUpdate(
                { "name" : name },
                { $set: { "icu_bed" : change } }
             )

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);


});
app.post("/ventilator_update", function (request, response) {
    
    var name = request.body.name;
    var change = request.body.vacancy;
    console.log("updateing ventilator bed to "+change);
    async function run() {
        try {

            await client.connect();
            const db = client.db(dbName);
            const col = db.collection("hospital_info");
        
            await col.findOneAndUpdate(
                { "name" : name },
                { $set: { "v_bed" : change } }
             )

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    run().catch(console.dir);


});






if (process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"))
}
const port = 5000
app.listen(process.env.PORT || port)
console.log("Something awesome to happen at http://localhost:" + port);