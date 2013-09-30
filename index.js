function main(plugin) {
    var executable;
    var proxy = {
        options: id,
        async: function() {
            return function(success) {
                if(success === false)  console.error('Failed to execute plugin!');
            }
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

function id(a) {return a;}
