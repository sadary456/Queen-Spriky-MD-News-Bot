const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'XBNl0BiA#4Mky4TnzLo4O939j1NKqeXznVokWR_wLQR5DDhJdF_M', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://menuka404:167943@cluster0.dclfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',    // Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94758900210',    // Enter Your Owner Number
    BotNumber: process.env.BotNumber || '94768504703'    // Enter Your Bot Number
};
