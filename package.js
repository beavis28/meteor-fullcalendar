Package.describe({
    name: 'rzymek:fullcalendar',
    summary: "Full-sized drag & drop event calendar (jQuery plugin)",
    version: "2.2.0_2",
    git: "https://github.com/rzymek/meteor-fullcalendar.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.use([
        'mrt:jquery-ui@1.9.2',
        'rzymek:moment@2.8.3_10',
        'templating'
    ], 'client');
    api.addFiles([
        'fullcalendar/dist/fullcalendar.js',
        'fullcalendar/dist/fullcalendar.css',
        'fullcalendar/dist/lang-all.js',
        'fullcalendar/dist/gcal.js',
        'template.html',
        'template.js'
    ], 'client');
});
