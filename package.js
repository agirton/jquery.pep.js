Package.describe({
    summary: "jQuery Pep repackaged for Meteor"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'dist/jquery.pep.min.js'
    ], 'client');
});
