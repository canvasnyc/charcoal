exports.description = "Create an Ember app structure.";

exports.template = function(grunt, init, done) {
  var _ = grunt.utils._;

  //thanks grunt-bbb
  var prompts = grunt.helper('prompt_for_obj');
  _.extend(prompts, {
    ember_namespace: {
      message: "Your Ember app's namespace (must be capitalized): ",
      validator: /^[A-Z][\w\-\.]+$/
    }
  });

  grunt.helper("prompt", {}, [
    grunt.helper("prompt_for", "ember_namespace")
  ],
  function(err, props) {
    props.ember_namespace = props["ember_namespace"];
    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    done();
  });
}