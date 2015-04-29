
exports.getCityData = function(id, callback) {
    
    var cities = {0: {population: 3.2, capital: "Madrid"}, 
                  1: {population: 2.2, capital: "Paris"}};
    
    callback(null, cities[id]);
};