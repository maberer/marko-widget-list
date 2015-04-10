var searchItemsTpl = require('src/components/app-search-list');


module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    
    init: function(){
        console.log("init()");
    },
    
    getInitialState: function(input) {

        return {
            timestamp: input.timestamp || Date.now()
        };
    },

    getTemplateData: function(state, input) {
        
        return {
            timestamp: state.timestamp
        };
    },

    addSearchItems: function(event) {
        
        var newItems = [{topic: "FIRST", text: "the first of this fetch"}, 
                        {topic: "SECOND", text: "the second of this fetch"}];
        
        var searchItemContainer = this.getEl('searchItems');
        
        var widget = searchItemsTpl.render({
                items: newItems
            })
            .appendTo(searchItemContainer);
        
        this.setState('timestamp', Date.now());
    }
});