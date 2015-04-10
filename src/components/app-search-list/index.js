

module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    
    init: function(){
        console.log("list init");
    }  
});