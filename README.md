# How to install and run

Install nodejs on computer if not already https://nodejs.org/en/
Install mongodb on computer if not already https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Download these 2 files or clone repository
Open terminal in the root folder

run 'npm install' to install dependencies (Only need to do this first time running the program)
run 'node app.js'

Server starts running.

Make request to http://localhost:3000/temparature/humidity/soiltemp from device or browser or postman,
replacing the parameters with the numbers.

The terminal should display the new reading.

make request to http://localhost:3000/all to get all the readings.

Put on server when ready swapping out localhost etc. for whatever the server name is.
