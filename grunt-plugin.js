module.exports = function GruntPlugin(grunt) {
  grunt.registerTask('grunt plugin', 'Grunt plugin.', function() {
    var options = this.options({
      a: 'fpurge_ts',
      success: process.env.SUCCESS,
      v: 1
    });
    var done = this.async();

    grunt.log.writeln('testing');

    done(options.success == 'ok');
  });
};
