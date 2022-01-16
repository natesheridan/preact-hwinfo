const axios = require('axios');

const getPCData = (hostIP, port = "10445") => {
   return axios.get(`http://${hostIP}:${port}/metrics/json?option=flattenMeta`)
    .then(response => {
        if (response.status != 200){
            console.log("Server failed with error:")
            console.log(data.status)
            throw data.status
        }
        else{
            return response.data
        }
    })
}

export default getPCData