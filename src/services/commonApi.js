import axios from 'axios';

export const commonApi = async (method,url,data)=>{
    let reqConfig = {
        method,url,data,headers:{
            "Content-type":"application/json"
        }
    }
    return await axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch(
        (err)=>{
            return err
        }
    )
}