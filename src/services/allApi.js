const { Base_Url } = require("./baseUrl");
const { commonApi } = require("./commonApi");

// get user detail for login
export const getUser = async()=>{
    return await commonApi("GET",`${Base_Url}/users`,"")
}