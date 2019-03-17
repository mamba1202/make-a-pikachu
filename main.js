!function(){
  var duration = 50
  $('.actions').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
    .siblings('.active').remove('active')
    switch(speed){
      case 'slow':
      duration = 100
      break
      case 'normal':
      duration= 50
      break
      case 'fast':
      duration = 10
      break
    }
   })
   function writeCode(prefix, code, fn){ //前缀-代码-回调
let container = document.querySelector('#code')
let styleTag = document.querySelector('#styleTag')
let n =0
let id
id = setTimeout(function run(){
    n +=1
    container.innerHTML = code.substring(0,n)
    styleTag.innerHTML = code.substring(0,n)
    container.scrollTop = container.scrollHeight
    if(n<code.length){
    id = setTimeout(run, duration) //每次都会去读它的值--记录最新的setTimeout
    }else{ // 我已经结束了
      fn && fn.call()  //如果传了就调一下回调
    }
},duration)
}
let code =`
/*
*首先准备皮卡丘的皮
*/
.preview{
    height:100%;
    background: #fee433;
     display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper{
    width: 100%;
    height: 165px;
    position: relative;
  }
  .wrapper > :not(:last-child){
      z-index: 1;
  }
  /*
  *接下来画鼻子
  */
  .nose{
    width: 0px;
    height: 0px;
    border: 12px solid red;
    border-radius: 11px;
    border-color: black transparent transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -11px;
    }
    /*
  *然后画眼睛
  */
  .eye{
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
  }
  /*
  *眼睛里面的珠子
  */
  .eye::before{
    content: '';
    display: black;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
    left: 6px;
    top: -1px;
  }
  .eye.left{
    right: 50%;
  }
  .eye.right{
    left: 50%;
    margin-left: 90px;
  }
  .eye.left{
    right: 50%;
    margin-right: 90px;
  }
  /*
  *然后画皮卡丘的脸
  */
  .face{
    height: 68px;
    width: 68px;
    background: #fc0d1c;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    
  }
  /*
  *将脸放到正确位置
  */
  .face.left{
    right: 50%;
    margin-right: 116px;
    top:85px;
  }
  .face.right{
    left: 50%;
    margin-left: 116px;
    top: 85px;
  }
  /*
  *上嘴唇
  */
  .upperLip{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    background: #fee433;
    top: 48px;
  }
  .upperLip.left{
    border-bottom-left-radius: 40px 20px;
    border-right: none;
    border-top: none;
    transform: rotate(-20deg);
    right: 50%;
  }
  .upperLip.right{
    border-bottom-right-radius: 40px 20px;
    border-left: none;
    border-top: none;
    transform: rotate(20deg);
    left: 50%;
  }
  /*
  *下嘴唇
  */
  .lowerLip-wrapper{
    position:absolute;
    bottom: 0;
    left: 50%;
    margin-left: -70px;
    height:110px;
    width: 300px;
    overflow: hidden;
  }
  .lowerLip{
    width: 140px;
    height: 1000px;
    background: #990513;
    border: 2px solid black;
    border-radius: 100px/500px;
    overflow: hidden;
    bottom: 0;
    position: absolute
  }
  /*
  *小舌头
  */
  .lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%; 
 }
`
writeCode('', code)
}.call()