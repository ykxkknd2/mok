console.error(process.cwd())
    var config = {
        devServer : {
            port : 8080,
            pathRegexp : /\/dist\/(?:.*\/)?([^-]*)(?:-.*)?\.js/
        },
        paths : {
            cur : './',
            base: './www',
            srcVendor : './www/vendor',
            srcReqConfig : './www/main/requireConfig.js',
            srcMainJs : './www/main',

            assets : 'assets.json',

            dist : './dist',
            distJs : './dist/js',
            distVendor : './dist/js/vendor'
        }
    };

    module.exports = config;