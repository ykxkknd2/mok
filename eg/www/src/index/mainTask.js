define(['./tpl/test'],function(test){
    var init = function(){
        $('body').append(test({message:'ykx'}));
    }

    return init;
});