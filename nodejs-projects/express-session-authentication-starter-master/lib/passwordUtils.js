const crypto = require('crypto');

// TODO


function genPassword(password) {
    let salt = crypto.randomBytes(32).toString("hex");
    var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

    return {
        salt,
        hash: genHash
    }
};

function validPassword(password, hash, salt) {

    let hashVerify = crypto.pbkdf2Sync(password,salt, 10000, 64, "sha512").toString("hex");
    return hash == hashVerify;
}


module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;