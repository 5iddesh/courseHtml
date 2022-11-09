let options = document.querySelectorAll(".sort-option");
options.forEach(option => {
    option.addEventListener("click", handleOptionSelect);
})


function ShandleClickMenu(e) {
    const sideBar = document.querySelector(".side-bar");
    const wrong = document.querySelector(".wrong");
    if(sideBar.style.display !== "block"){
      sideBar.style.display = "block";
      e.style.display = "none";
      wrong.style.display = "block";
    }
  }

  function ShandleWrong(e) {
    const sideBar = document.querySelector(".side-bar");
    const hamburger = document.querySelector(".hamburger");
    if(sideBar.style.display !== "none"){
      sideBar.style.display = "none";
      e.style.display = "none";
      hamburger.style.display = "block";
    }
  }

  function navHandleClick(e){
    let temp = e;
    if(!e.classList.contains("menu")){
        temp = e.closest(".menu")
    }
    console.log(temp)
    if(!temp.classList.contains("active")){
        let menus = document.querySelectorAll(".menu");
        menus.forEach(menu => menu.classList.remove("active"));
        temp.classList.add("active")
    }
}

function handleMenuActive(e){
  // console.log(e)
  let temp = e;
  if(!e.classList.contains("menu")){
      temp = e.closest(".menu")
  }
  console.log(temp)
  if(!temp.classList.contains("active")){
      let menus = document.querySelectorAll(".menu");
      menus.forEach(menu => menu.classList.remove("active"));
      temp.classList.add("active")
      console.log(menus)
  }
}


function handleOptionSelect(e){
  if(e.target.classList.contains("active")){
      e.target.classList.remove("active");
  }else{
      e.target.classList.add("active");
  }
}

    
function handleSortClick(e){
  let targetEl = e;
  if(!targetEl.classList.contains("sort-click")){
      targetEl = targetEl.closest(".sort-click");
  }
  if(targetEl.nextElementSibling.style.display != "block"){
      let sort = document.querySelectorAll(".sort-options");
      sort.forEach(s => s.style.display = "none");
      targetEl.nextElementSibling.style.display = "block"
  }else{
      targetEl.nextElementSibling.style.display = "none"


      const courses = document.querySelectorAll(".course");
      console.log(courses)
      const showOptions = targetEl.nextElementSibling.querySelectorAll(".active");

      let arr = []
      showOptions.forEach(showOp => {
        arr.push(showOp.innerText);
      })
      
      console.log(arr)
      let i=0;
      courses.forEach(c => c.style.display = "none");

      courses.forEach(c => {
        for(op of arr){
            if(c.classList.contains(op)) {
              console.log("block", c, op)
            c.style.display = "block"
          }
        }

        i++;
      })
  }



}