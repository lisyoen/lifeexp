requirejs.config({
    baseUrl: 'js',
    paths: {
        'handlebars': '../bower_components/handlebars/handlebars.min'
    },
});

requirejs([], function () {
    $(function() {
        $('#myModal').modal({
            keyboard: true
        });
    });
});
