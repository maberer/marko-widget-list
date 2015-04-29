var searchItemsTpl = require('src/components/app-search-list');


module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    
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
        
        var newItems = [{id: 0, topic: "FIRST", text: "first", country: "Spain"}, 
                        {id: 1, topic: "SECOND", text: "second", country: "France"}];
        
        var searchItemContainer = this.getEl('searchItems');
        
        var widget = searchItemsTpl.render({
                items: newItems
            })
            .appendTo(searchItemContainer);
        
        this.setState('timestamp', Date.now());
    }
});