    var Q = require('q'),
        fs = require('fs');

    module.exports = {
        isExists: function (path) {
            var deferred = Q.defer();
            fs.access(path, fs.F_OK, function (err) {
                return err ? deferred.reject(err) : deferred.resolve();
            });
            return deferred.promise;
        },
        createFile: function (path, defaultText) {
            var deferred = Q.defer();

            fs.open(path, 'wx', function (err) {
                if (err) {
                    return deferred.reject(err);
                }
                if (defaultText) {
                    fs.writeFile(path, defaultText, function (err) {
                        return err ? deferred.reject(err) : deferred.resolve();
                    })
                } else {
                    deferred.resolve();
                }
            });

            return deferred.promise;
        }
    };
