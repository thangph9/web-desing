module.exports={
    fields:{
        optid: 'uuid',
        productid: 'uuid',
        price: 'float',
        amount: 'float',
        attrs: {
            type: 'map',
            typeDef: '<text,text>'
        }
    },
    key:["productid","optid"],
} 
    