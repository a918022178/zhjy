module.exports = function(){
    
    
             var comment = document.querySelectorAll('.comment')[0];
            
            var li = comment.children;
            console.log(li)
           for(let i =0;i<li.length;i++){
               li[i].index = i;
               li[i].onclick=function(){
                   for(let i=0;i<li.length;i++){
                       li[i].className=''
                   }
                    for(let i =0;i<=this.index;i++){
                        li[i].className='q'
                    }
               }
           }
    
            // $('.comment').on('click','li', function () {
            //     console.log(1111111)
            //     $(this).text('★').prevAll('li').text('★').end().nextAll().text('☆');
            // })
    
}
 