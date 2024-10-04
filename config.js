const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'afgSTTYB#I3Ev-jTb8lHTBbEheN2wU9aQ82mgpnt9qupDovf0etk', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://spriky:1234@cluster0.sx9pb.mongodb.net/?retrywrites=true&w=majority&appname=cluster0',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94756209818',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94773366833'    // Enter Your Bot Number
};
