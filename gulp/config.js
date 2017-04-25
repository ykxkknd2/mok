
    var config = {
        devServer : {
            port : 8080,
            pathRegexp : /\/dist\/(?:.*\/)?([^-]*)(?:-.*)?\.js/
        },
        paths : {
            cur : './',
            base: './www',

            baseJs : './www/js',
            srcVendor : './www/js/vendor',
            srcReqConfig : './www/js/main/requireConfig.js',
            srcMainJs : './www/js/main',

            baseCss : './www/css',
            srcMainCss : './www/css/main',

            baseImg : './www/img',

            assetsCss : 'assetsCss.json',
            assetsImg : 'assetsImg.json',
            assetsJs : 'assetsJs.json',

            dist : './dist',
            distJs : './dist/js',
            distVendor : './dist/js/vendor',

            distCss : './dist/css',
            distImg : './dist/img'
        },
        ext : {
            img : "{png,jpeg,jpg,gif,svg}"
        },
        mineType : {
            "txt": "text/plain",
            "xml": "text/xml",
            "html": "text/html",
            "css": "text/css",
            "js": "application/x-javascript",
            "json": "application/json",
            "gif": "image/gif",
            "png": "image/png",
            "jpeg": "image/jpeg",
            "jpg": "image/jpeg",
            "svg": "image/svg+xml",
            "ico": "image/x-icon",
            "pdf": "application/pdf",
            "swf": "application/x-shockwave-flash",
            "tiff": "image/tiff",
            "wav": "audio/x-wav",
            "wma": "audio/x-ms-wma",
            "wmv": "video/x-ms-wmv"
        }
    };

    module.exports = config;