const mentorsFollowed = document.querySelectorAll(".m-flex1 > p");
mentorsFollowed.forEach(p => p.addEventListener("click", handleMFollow));


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


function handleMFollow(e){
    if(e.target.classList.contains("m-followed")) {
        e.target.classList.remove("m-followed")
        e.target.innerText = "+Follow"
    }else {
        e.target.classList.add("m-followed")
        e.target.innerText = "Followed"
    }
}



function handleMSearch(){
    const search = document.querySelector(".m-search-input");
    let searchVal = search.value;

    const mentors = document.querySelectorAll(".m-mentor");
    mentors.forEach(mentor => {
        if(mentor.querySelector("h3").innerText.includes(searchVal) || 
        (mentor.querySelector(".m-flex1 >div p").innerText.includes(searchVal))
        ){
            mentor.style.display = "block";
        }else mentor.style.display = "none"
    })

    search.value = "";

}