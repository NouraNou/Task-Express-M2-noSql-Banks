const { module, Schema } = require("mongoose");


const AccountSchema = new Schema ({

    username: { username : String , require : true };
    funds: { funds : Number , require : true };
}

);







model.exports = model( "Accounts" , AccountSchema);