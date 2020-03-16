$(function(){
    $('#dowebok').fullpage({
        sectionsColor:['#0da5d6','#2ab516','#de8910','#16ba90','#0da5d6'],
        afterLoad:function(link,index){
            $('.section').removeClass('c');
            timer = null;
            // timer = setInterval(function(){
            //     clearInterval(timer);
            //     $('.section').eq(index-1).addClass('c');
            // },100);
            timer = setInterval(()=>{
                clearInterval(timer);
                $('.text').addClass('c');
            },100);
        }
    });
});