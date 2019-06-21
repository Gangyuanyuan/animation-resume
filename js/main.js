var result = `/* 
 * 面试官你好，我是 刚圆圆，
 * 我将以动画的形式向您介绍我自己。
 * 用文字介绍有些单调，
 * 就用代码形式来介绍吧，
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

/* 接下来使代码高亮 */
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

var result2 = `
#code{
  position: fixed;
  left: 0;
  width: 49%;
  height: 100%;
}
#paper{
  position: fixed;
  right: 0;
  width: 49%;
  height: 100%;
  background: #808080;
  disply: flex;
  justify-content: center;
  align-items: center;
  padding:16px;
}
#paper > .content{
  background: white;
  width: 100%;
  height: 100%;
}

/* 开始写简历内容吧 */
`

var md = `
# 自我介绍

我叫 刚圆圆，
1994 年 10 月出生，
毕业于青岛农业大学，通信工程专业，
自学前端半年，希望应聘前端开发岗位。

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. xxx 轮播
2. xxx 画板
3. xxx 简历

# 联系方式

手机：xxxxxxxxx
QQ：xxxxxxxxxx
邮箱：xxxxxxxxxx
`

var result3 = `
/* 接下来把 Markdown 变成 HTML(marked.js) */


/* 接下来给 HTML 加样式 */


/* 这就是我会动的简历
 * 谢谢观看 
 */

`

writeCode('', result, ()=>{ // witeCode call the function
  createPaper(()=>{
    writeCode(result, result2, ()=>{
      writeMarkdown(md, ()=>{
        markdownToHtml(()=>{
          writeCode(result+result2, result3)
        })
      })
    })
  })
})


// 把code写到#code和style标签里
function writeCode(prefix, code, fn){
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
    styleTag.innerHTML = prefix + code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight // 自动向下拉到可拉伸的最大高度
    if(n >= code.length){
      window.clearInterval(id)
      fn.call() // 回调函数
    }
  }, 50)
}
function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  fn.call() // 回调函数
}
function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(()=>{
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight // 往下拉伸
    if(n >= markdown.length){
      window.clearInterval(id)
      fn.call() // 回调函数
    }
  }, 50)
}
function markdownToHtml(fn){
  fn.call()
}
