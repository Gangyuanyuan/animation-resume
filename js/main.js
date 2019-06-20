var result = `/* 
  * 面试官你好，我是 刚圆圆，
  * 我将以动画的形式向您介绍我自己。
  * 下面就用代码来介绍吧，
  * 首先准备一些样式：
  */

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 18px;
}
#code{
  border: 1px solid red;
  padding: 20px;
}
/* 我需要一些代码高亮 */
.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #DD4A68;
}
/* 加点 3D 效果 */
#code{
  transform: rotate(360deg);
}
/* 下面来介绍一下我自己吧 */
/* 我需要一张白纸 */
`

var n = 0
var id = setInterval(()=>{
  n += 1
  code.innerHTML = result.substring(0, n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
  styleTag.innerHTML = result.substring(0, n)
  if(n >= result.length){
    window.clearInterval(id)
    fn2()
    fn3(result)
  }
}, 50)

function fn2(){
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3(preResult){
  var result = `
#paper{
  width: 500px; height: 300px;
  background: white;
}
  `
  var n = 0
  var id = setInterval(()=>{
    n += 1
    code.innerHTML = preResult + result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = preResult + result.substring(0, n)
    if(n >= result.length){
      window.clearInterval(id)
    }
  }, 50)
}
