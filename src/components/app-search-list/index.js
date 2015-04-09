

module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    
    init: function(){
        console.log("list init");
    },
    
   getTemplateData: function(state, input) {
       return {
           items: input.items
       };
    }
});