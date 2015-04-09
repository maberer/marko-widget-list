
var defineWidget = require('marko-widgets').defineWidget;

module.exports = defineWidget({
    template: require.resolve('./template.marko'),

    getInitialState: function(input) {
        return {
        };
    },

    getTemplateData: function(state, input) {

        return {
        };
    }
});