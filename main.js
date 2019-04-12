


setTimeout(function () {
  setwelcome.classList.remove('active')
}, 500)

let specialTags = document.querySelectorAll('[data-x]')//找到标记的div

for (let i = 0; i < specialTags.length; i++) { //利用标签距离顶部的值减去鼠标轮动的值来找到对面的标签
  specialTags[i].classList.add('offset')
}

function yyy() {
  let specialTags = document.querySelectorAll('[data-x]')//找到标记的div
  let index = 0
  for (let i = 1; i < specialTags.length; i++) { //利用标签距离顶部的值减去鼠标轮动的值来找到对面的标签
    if (Math.abs((specialTags[i].offsetTop - window.scrollY)) < Math.abs((specialTags[index].offsetTop - window.scrollY))) {
      index = i
    }
  }

  specialTags[index].classList.remove('offset')//把最小值加上active也就是最近的标签加上高亮
  let id = specialTags[index].id //找到对应的标签的id
  let a = document.querySelector('a[href="#' + id + '"]')//找到这个id的a标签
  let li = a.parentNode//获取这个a标签的父
  let borthersAndMe = li.parentNode.children
  for (let i = 0; i < borthersAndMe.length; i++) {
    borthersAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
}


setTimeout(function () {
  yyy()
}, 700)

window.onscroll = function (e) {
  if (window.scrollY > 0) {
    topnavigation.classList.add('sticky')
  } else {
    topnavigation.classList.remove('sticky')
  }
  yyy()
}

let liTags = document.querySelectorAll('.topnavigation > .topnavcontainer > ul > li ')
for (let i in liTags) {
  liTags[i].onmouseenter = function (e) {
    e.currentTarget.classList.add('active')
    //   let borther=li.getElementsByTagName('ul')[0]
    //   borther.classList.add('active')       
  }
  liTags[i].onmouseleave = function (e) {
    let li = e.currentTarget
    e.currentTarget.classList.remove('active')
    /* while(borther.tagName!=='UL'){
           borther=borther.nextSibling;
    */
    //borther.classList.remove('active')   
  }
}

let aTags = document.querySelectorAll('.topnavigation > .topnavcontainer > ul > li >a')
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);


for (let i in aTags) {
  aTags[i].onclick = function (e) {
    e.preventDefault()
    let a = e.currentTarget
    let href = a.getAttribute('href')
    let element = document.querySelector(href)
    let top = element.offsetTop
    //let n=25 //25次
    //let t=500/n //500毫秒里每多少时间动一下
    let currentTop = window.scrollY //用户点击标签时滚轮的与顶点的距离
    let elementTop = top - 90 //目标元素与顶部的距离

    var coords = { y: currentTop }; //初始位置
    console.log(coords)
    var tween = new TWEEN.Tween(coords)
      .to({ y: elementTop }, 1000)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(function () {
        window.scrollTo(0, coords.y)
      })
      .start();
  }
}

//轮播图
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})




  ; (function () {
    //留言
    var view = document.querySelector('.messages')

    var controller = {
      view: null,
      init: function (view) {
        this.view = view,
          this.initAv(),
          this.loadmessages(),
          this.ol = formMessage.querySelector('ol'),
          this.formMessage = document.getElementById('formMessage'),
          this.bindEvents()
         
         
          
      },

      initAv: function () {
        var APP_ID = 'CiJmyHfftPWOhWcyPmeUOwla-gzGzoHsz';
        var APP_KEY = 'bRTAKY1BvcyE0R63M6v58U2h';

        AV.init({
          appId: APP_ID,
          appKey: APP_KEY
        })
      },
      loadmessages: function () {
        var query = new AV.Query('Messages');
        query.find().then((messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach(item => {
            var li = document.createElement('li')
            this.ol.appendChild(li)
            li.innerText = `姓名:${item.name}  ${item.content}`
            console.log(item)
          })
          return AV.Object.saveAll(Messages);
        })
      },
      bindEvents: function () {
        //leancloud AN对象
        var formMessage = this.formMessage
        console.log(formMessage)
        var Messages = AV.Object.extend('Messages');
        var messages = new Messages();
        formMessage.addEventListener('submit', (e)=> {
          e.preventDefault()//阻止刷新页面
          
          var content = formMessage.querySelector('input[name=content]').value
          var name = formMessage.querySelector('input[name=name]').value
          messages.save({
            name: name,
            content: content
          }).then(function (object) {
            // window.location.reload() //刷新页面
            console.log(object)
            var li = document.createElement('li')
            ol.appendChild(li)
            li.innerText = `姓名:${object.attributes.name}  ${object.attributes.content}`
            console.log('存入成功')
          })
        })
      },

    
    }
    controller.init(view)
  })()








// var APP_ID = 'CiJmyHfftPWOhWcyPmeUOwla-gzGzoHsz';
// var APP_KEY = 'bRTAKY1BvcyE0R63M6v58U2h';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });
// var formMessage = document.getElementById('formMessage')
// var ol = formMessage.querySelector('ol')



// //leancloud AN对象
// var Messages = AV.Object.extend('Messages');
// var messages = new Messages();
// formMessage.addEventListener('submit', function (e) {
//   e.preventDefault()//阻止刷新页面
//   var content = formMessage.querySelector('input[name=content]').value
//   var name = formMessage.querySelector('input[name=name]').value

//   messages.save({
//     name: name,
//     content: content
//   }).then(function (object) {

//     // window.location.reload() //刷新页面
//     console.log(object)
//     var li = document.createElement('li')
//     ol.appendChild(li)
//     li.innerText=`姓名:${object.attributes.name}  ${object.attributes.content}`
//     console.log('存入成功')
//   })

// })

// var query = new AV.Query('Messages');
// query.find().then(function (messages) {
//   let array= messages.map((item) => item.attributes )
//   array.forEach(item =>{
//     var li = document.createElement('li')
//     ol.appendChild(li)
//     li.innerText=`姓名:${item.name}  ${item.content}`
//     console.log(item)
//   })
//   return AV.Object.saveAll(Messages);
// }).then(function(messages) {
//   // 更新成功
// }, function (error) {
//   // 异常处理
// });