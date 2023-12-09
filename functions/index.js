const functions = require('firebase-functions');

exports.beforeCreate = functions.auth.user().beforeCreate((user,_)=>{
    console.log("Email -> "+user.email);
    if(user.email === undefined){
        console.log("Email is undefined");
        throw new functions.https.HttpsError('invalid-argument','The email address is missing');
    }
    if(!(user.email.toLowerCase().endsWith('study.iitm.ac.in'))){
        console.log("Email is not a valid IITM email address");
        throw new functions.https.HttpsError('invalid-argument','The email address is not a valid IITM email address');
    }
    return null;
});