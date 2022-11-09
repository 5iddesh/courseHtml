let days = document.querySelectorAll(".days");
days.forEach(day => day.addEventListener("click", handleDays));


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

function handleSearch(e) {
  const input = document.querySelector(".db-search");
  if(input.style.display != "block"){
    input.style.display = "block";
  }else{
    input.style.display = "none";

  }
}

function handleMentorsList(e){
    const mentors = document.querySelectorAll(".mentor");
    let props;
    let index = 0;
    for(let m of mentors){
      console.log(m, index)
        if(m.classList.contains("show")){
          props = {
            show: index
          }
          show = index;
          break
        }
        index++
      
    }
    mentors.forEach(mentor => mentor.classList.remove("show"));
    if(e.classList.contains("prev")){
      if(props.show != '0') {
        if(props.show == '1'){
          mentors[0].classList.add("show");
          mentors[1].classList.add("show");
        }else{
          mentors[show-1].classList.add("show");
          mentors[show-2].classList.add("show");
        }
      }else{
        mentors[0].classList.add("show");
        mentors[1].classList.add("show");
      }
    }else{
      if(props.show+1 != mentors.length-1){
        if(props.show+1 == mentors.length-2){
          mentors[mentors.length-1].classList.add("show");
          mentors[mentors.length-2].classList.add("show");
        }else{
          mentors[show+1].classList.add("show");
          mentors[show+2].classList.add("show");
        }
      }else{
        mentors[mentors.length-1].classList.add("show");
        mentors[mentors.length-2].classList.add("show");
      }
    }
}


function handleFollow(e){
  const mentor = e.closest(".mentor");

  if(!mentor.classList.contains("followed")){
      mentor.classList.add("followed");
      e.innerText = "+ Follow ";
  }else{
      mentor.classList.remove("followed");
      e.innerText = "followed";
  }
}



function handleCourseList(e){
  const mentors = document.querySelectorAll(".course");
  let props;
  let index = 0;
  for(let m of mentors){
    console.log(m, index)
      if(m.classList.contains("show")){
        props = {
          show: index
        }
        show = index;
        break
      }
      index++
    
  }
  mentors.forEach(mentor => mentor.classList.remove("show"));
  if(e.classList.contains("prev")){
    if(props.show != '0') {
      if(props.show == '1'){
        mentors[0].classList.add("show");
        mentors[1].classList.add("show");
      }else{
        mentors[show-1].classList.add("show");
        mentors[show-2].classList.add("show");
      }
    }else{
      mentors[0].classList.add("show");
      mentors[1].classList.add("show");
    }
  }else{
    if(props.show+1 != mentors.length-1){
      if(props.show+1 == mentors.length-2){
        mentors[mentors.length-1].classList.add("show");
        mentors[mentors.length-2].classList.add("show");
      }else{
        mentors[show+1].classList.add("show");
        mentors[show+2].classList.add("show");
      }
    }else{
      mentors[mentors.length-1].classList.add("show");
      mentors[mentors.length-2].classList.add("show");
    }
  }
}


const months = ["jan", "feb", "march", "August"]

function handleMonth(e){
  let i=0;
  for(m of months){
    let temp = document.querySelector(".r-month")
    if(temp.innerText == months[i]) break
    i++;
  }
  const text = document.querySelector(".r-month");
  if(e.classList == "prev"){
    if(i > 0) text.innerText=months[i-1] 
  }else{
    if(i < months.length-1)  text.innerText=months[i+1] 
  }
}

function handleDays(e){
  if(!e.target.classList.contains("active") || !e.target.closest(".days").classList.contains("active")){
      const days = document.querySelectorAll(".days");
      days.forEach(day => day.classList.remove("active"));
      if(e.target.classList.contains("days")){
          e.target.classList.add("active");
      }else{
          e.target.closest(".days").classList.add("active");
      }
  }
}

