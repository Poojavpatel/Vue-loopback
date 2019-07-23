'use strict';
const {Parser} = require('json2csv');

module.exports = function(Customers) {
    Customers.listcustomers = async function(){
        const custlist = await Customers.find();
        return custlist
    }
    Customers.findcustomer = async function(cname){
        const cust = await Customers.find({where: {name: cname}});
        return cust;
    }
    Customers.addcustomer = async function(cust){
        console.log(cust);
        const rescust = await Customers.create(cust);
        return rescust;
    }
    Customers.removecustomer = async function(cid){
        const rescust = Customers.destroyById(cid);
        return "deleted";
    }
    
     
    // Remote methods
    Customers.remoteMethod('listcustomers',{
        http: {path: '/listcustomers', verb: 'get'},
        returns: {arg: 'custlist', type: 'string'},
    })
    Customers.remoteMethod('findcustomer',{
        http: {path: '/findcustomer', verb: 'get'},
        accepts: {arg: 'cname', type: 'string', required: true, http: { source: 'query' } },
        returns: {arg: 'cust', type: 'string'},
    })
    Customers.remoteMethod('addcustomer',{
        http: {path: '/addcustomer', verb: 'post'},
        accepts:{arg:'cust', type:'object',http: { source: 'body' } },
        returns: {arg:'cust' , type:'object'},
    })
    Customers.remoteMethod('removecustomer',{
        http: {path: '/removecustomer', verb: 'post'},
        accepts:{arg:'cid', type:'string'},
        returns: {arg:'msg' , type:'string'},
    })
    Customers.remoteMethod('download',{
        http: { path: '/download', verb: 'get'},
        returns: {arg:'body', type:'file' , root: true },
    })
};
