
require.config({
    /*requre config*/
    paths:{
        'handlebars':'http://hot.sogou.com/dist/js/vendor/handlebar.min'
    }
});
require.onError = function(e){
    throw e.stack;
}