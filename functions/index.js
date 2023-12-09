const functions = require('firebase-functions');

exports.beforeCreate = functions.auth.user().beforeCreate((user,_)=>{
    if(user.email === undefined){
        throw new functions.https.HttpsError('invalid-argument','The email address is missing');
    }
    if(!(user.email.toLowerCase().endsWith('@study.iitm.ac.in'))){
        throw new functions.https.HttpsError('invalid-argument','The email address is not a valid IITM email address');
    }
});