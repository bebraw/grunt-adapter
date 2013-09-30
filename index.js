var extend = require('util')._extend;


function main(plugin, options) {
    options = options || {};

    var executable;
    var proxy = {
        options: function(a) {
            return extend(a, options);
        },
        async: function() {
            return function(success) {
                if(success === false)  console.error('Failed to execute plugin!');
            };
        }
    };

    plugin({
        registerTask: function(name, doc, fn) {
            executable = fn;
        },
        log: {
            writeln: console.log.bind(console)
        }
    });

    if(!executable) return console.error('Failed to register plugin!');

    executable.call(proxy);
}
module.exports = main;
