exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('module.exports = require(\'marko-widgets\').defineWidget({ template:\nrequire.resolve(\'./template.marko\'), init: function(){ console.log("list\ninit"); }, /* getInitialState: function(input) { return{ ts: input.ts ||\nDate.now() } }, */ getTemplateData: function(state, input) { return { martin:\n"hi!!!", items: [{topic: "FIRST1", text: "the first of this fetch"}, {topic:\n"SECOND2", text: "the second of this fetch"}] }; }, handleTSClick: function(e)\n{ console.log("Hello!"); this.setState("ts", Date.now()); }\n});');
  };
}