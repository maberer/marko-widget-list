
var cityService = require('../../services/citydata');


module.exports = require('marko-widgets').defineWidget({
    template: require.resolve('./template.marko'),
    
    getInitialState: function(input){

        return {
            topic: input.item.topic,
            text: input.item.text,
            id: input.item.id,
            ts: input.ts || Date.now(),
            country: input.item.country,
            citydata: {},
            showCityData: false
        }
    },
    
    getTemplateData: function(state, input) {
        return{
            topic: state.topic,
            text: state.text,
            ts: state.ts,
            country: state.country,
            citydata: state.citydata,
            showCityData: state.showCityData
        }
    },
    
    handleRefresh: function(e) {
        e.preventDefault;
        this.setState("ts", Date.now());
    },
    
    showDetails: function(e) {
        e.preventDefault;
        
        var _this = this;
        var id = this.state.id;
        
        cityService.getCityData(id, function(err, data){
            
            _this.setState("citydata", data);
            _this.setState("showCityData", !_this.state.showCityData);
        });
    }
    
});