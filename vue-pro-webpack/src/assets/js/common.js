// 评分方法
export const grade = function(ele1,ele2){
    var comment = document.querySelectorAll(ele1)[0];
    var score = document.querySelector(ele2)
    var li = comment.children;
    for(let i =0;i<li.length;i++){
        li[i].index = i;
        li[i].onclick=function(){
        for(let i=0;i<li.length;i++){
            li[i].className='';
        }
        for(let i =0;i<=this.index;i++){
            li[i].className='ratestar'
        }
        score.innerHTML=this.getAttribute("data-id")+'.0'
    }
  } 
}
export function setItem(key,value){
    // 获取json格式
    var jsonString =  localStorage.getItem(key);
    var val = jsonString || value;
    // var arr =   JSON.parse(jsonString);
    // // 将value追加进入arr
    // arr.push(value);
    // 将arr 转换成json字符串保存起来
    // localStorage.setItem(key,JSON.stringify(val));
    localStorage.setItem(key,val);
}
export function getItem(key){
   var jsonString =  localStorage.getItem(key);
    // 将json格式字符串转换成 js对象
    // jsonString：是一个标准的json格式
    jsonString = jsonString || '';

    // console.log(jsonString)
    // return JSON.parse(jsonString);
    return jsonString;
}
