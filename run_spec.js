var Jasmine = require('jasmine');

var jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'actionsTest.js',
		'reducersTest.js'
    ],
    helpers: [
    ]
});
jasmine.execute();