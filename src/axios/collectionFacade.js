import axios from 'axios';
// let convert = require('xml-js');

export const HTTP = axios.create({
    baseURL:'http://localhost:3000/Collection',
    timeout: 5000,
    json:true
})

export default{
    async execute(method, resource, data) {
        return HTTP({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
          })
    },
    getGameCollection(){
        return this.execute('GET', `/${'5ea84cba73133255a8959863'}`)
    }
}
