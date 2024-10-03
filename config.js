const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'afgSTTYB#I3Ev-jTb8lHTBbEheN2wU9aQ82mgpnt9qupDovf0etk', // Enter Your Session ID
    MONGODB: process.env.MONGODB || '',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94758900210',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94773366833'    // Enter Your Bot Number
};
