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

function handleFollow(e){
    const mentor = e;

    if(!mentor.classList.contains("i-mentor-followed")){
        mentor.classList.remove("i-mentor-not-followed");
        mentor.classList.add("i-mentor-followed");
        e.innerText = "+ Follow Mentor";
    }else{
        mentor.classList.remove("i-mentor-followed");
        mentor.classList.add("i-mentor-not-followed");

        e.innerText = "followed";
    }
}


function handleToggle(e){
    const options = document.querySelectorAll(".i-toggle-option");
    options.forEach(option => option.classList.remove("active"));
    e.classList.add("active");

    const elems = document.querySelectorAll(".i-toggle-content > div");
    elems.forEach(elem => elem.style.display = "none");
    if(elems[e.id])
    elems[e.id].style.display = "block";
}