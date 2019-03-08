setTimeout(function(){
    setwelcome.classList.remove('active')
  },1000)
 
  window.onscroll =function (e){
      if(window.scrollY>0){
        topnavigation.classList.add('sticky')
      }else{
        topnavigation.classList.remove('sticky')
      }
  }

  let liTags= document.querySelectorAll('.topnavigation > .topnavcontainer > ul > li ')
  for(let i in liTags){
      liTags[i].onmouseenter=function(e){
         e.currentTarget.classList.add('active')
        //   let borther=li.getElementsByTagName('ul')[0]
        //   borther.classList.add('active')       
      }
      liTags[i].onmouseleave=function(e){
        let li=e.currentTarget
       e.currentTarget.classList.remove('active')
       /* while(borther.tagName!=='UL'){
              borther=borther.nextSibling;
       */
       //borther.classList.remove('active')   
    }
  }
  
  let aTags= document.querySelectorAll('.topnavigation > .topnavcontainer > ul > li >a')
  for(let i in aTags){
    aTags[i].onclick=function(e){
        e.preventDefault()
        let a =e.currentTarget
        let href=a.getAttribute('href')
        let element=document.querySelector(href)
        let top=element.offsetTop
        
        window.scrollTo(0,top-90)
    }
  }