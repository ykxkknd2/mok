/**
 * 目录下所有扩展文件
 */
module.exports.allFile = function (path, ext) {
    var fileReg = /\/.+?\..+?$/;
    if (Array.isArray(path)) {
        path.forEach(function (item, index) {
            if (!fileReg.test(item)) {
                path[index] =  path[index] + '/**/*' + (ext ? ('.' + ext) : '.*');
            }
        });
        return path;
    }
    return path + '/**/*' + (ext ? ('.' + ext) : '.*');
};

/**
 * 当前目录下所有扩展文件
 */
module.exports.childFile = function (path, ext) {
    var fileReg = /\/.+?\..+?$/;
    if (Array.isArray(path)) {
        path.forEach(function (item, index) {
            if (!fileReg.test(item)) {
                path[index] =  path[index] + '/*' + (ext ? ('.' + ext) : '');
            }
        });
        return path;
    }
    return path + '/*' + (ext ? ('.' + ext) : '');
};