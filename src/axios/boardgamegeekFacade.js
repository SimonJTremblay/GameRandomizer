import axios from 'axios';
let convert = require('xml-js');

export const HTTP = axios.create({
    baseURL:'https://www.boardgamegeek.com/xmlapi2',
    timeout: 5000
})

export default{
    async execute(method, resource, data) {
        return HTTP({
            method,
            url: resource,
            data
        })
    },
    GetSearchItem(searchItem){
        return this.execute('GET',`/search?query=${searchItem}`)
            .then(req => {
                let res = convert.xml2json(req.data, {compact:true, spaces: 4})
                return JSON.parse(res);
            })
            .catch( error => console.log(error))
    }
}


// Apparently if you send another request within 5 seconds of the previous one, 
// the server will give you 500 or 503 return code, reporting that it is too busy.