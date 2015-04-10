

module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    
    init: function(){
        console.log("item init");
    },
    
    getInitialState: function(input){

        return {
            topic: input.item.topic,
            text: input.item.text,
            ts: input.ts || Date.now()
        }
    },
    
    getTemplateData: function(state, input) {
        return{
            topic: state.topic,
            text: state.text,
            ts: state.ts
        }
    },
    
    handleRefresh: function(e) {
        this.setState("ts", Date.now());
    }
});