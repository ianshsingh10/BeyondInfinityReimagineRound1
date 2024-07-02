
let lg=gsap.timeline({repeat:1});
lg.to("#two",{
    y:'6.5vmin',
})
lg.to("#one",{
    y:'5.3vmin',
    x:'-3.3vmin',
})
lg.to("#two",{
    y:'7.5vmin',
    x:'-2vmin',
},'a')
lg.to("#one",{
    y:'6.3vmin',
    x:'-5.3vmin',
},'a')
lg.from(".brand-name",{
    x:'-60vmin',
    duration: 1,
})
let active="home";
document.querySelectorAll(".ele").forEach((ele) => {
    let tl=gsap.timeline();
    ele.addEventListener("mouseenter",()=>{
        let selected=ele.getAttribute("id");
        console.log(selected);
        if(selected=="home"){
            tl.to(".animation",{
                x:"0vmax",
            });
        }
        if(selected=="deals"){
            tl.to(".animation",{
                x:"10vmax",
            });
        }if(selected=="menu"){
            tl.to(".animation",{
                x:"20vmax",
            });
        }
        if(selected=="track"){
            tl.to(".animation",{
                x:"30vmax",
            });
        }
        if(selected=="bulk"){
            tl.to(".animation",{
                x:"40vmax",
            });
        }
    });
    ele.addEventListener("mouseleave",()=>{
        console.log(active);
        if(active=="home"){
            tl.to(".animation",{
                x:"0vmax",
            });
        }
        if(active=="deals"){
            tl.to(".animation",{
                x:"10vmax",
            });
        }if(active=="menu"){
            tl.to(".animation",{
                x:"20vmax",
            });
        }
        if(active=="track"){
            tl.to(".animation",{
                x:"30vmax",
            });
        }
        if(active=="bulk"){
            tl.to(".animation",{
                x:"40max",
            });
        }
    });
});
document.querySelectorAll(".ele").forEach((ele) =>{
    ele.addEventListener("click",()=>{
    active=ele.getAttribute("id");
    if(active=="home"){
        leave="home";
        tl.to(".animation",{
            x:"0vmax",
        });
    }
    if(active=="deals"){
        leave="deals";
        tl.to(".animation",{
            x:"10vmax",
        });
    }if(active=="menu"){
        tl.to(".animation",{
            x:"20vmax",
        });
    }
    if(active=="track"){
        tl.to(".animation",{
            x:"30vmax",
        });
    }
    if(active=="bulk"){
        tl.to(".animation",{
            x:"40vmax",
        });
    }
});
});
let c=1;
let tl=gsap.timeline({repeat:Infinity});
tl.from("#image",{
    rotate: -360,
},'b')
tl.fromTo("#text-1",{
    x:'60vmin',
},{
    x:'-5vmin',
},'b')
tl.fromTo("#text-2",{
    x:'-60vmin',
},{
    x:'5vmin',
},'b')
tl.to("#text-1",{
    x:'0vmin',
},'c')
tl.to("#text-2",{
    x:'0vmin',
},'c')
tl.to("#text-1",{
    x:'60vmin',
    duration:1,
    delay:2,
},'c')
tl.to("#text-2",{
    x:'-60vmin',
    duration:1,
    delay:2,
},'c')
tl.to("#image",{
    rotate: 360,
    delay:2,
},'c')
tl.to("#image",{
    backgroundImage : "url('Images/P2.png')",
    duration:0,
},'d')
tl.to("#text-1",{
    innerText:"BIGGEST",
},'d')
tl.to("#text-2",{
    value:"OFFERS",
},'d')
tl.to("#image",{
    rotate: -360,
},'e')
tl.fromTo("#text-1",{
    x:'60vmin',
},{
    x:'-5vmin',
},'e')
tl.fromTo("#text-2",{
    x:'-60vmin',
},{
    x:'5vmin',
},'e')
tl.to("#text-1",{
    x:'0vmin',
},'f')
tl.to("#text-2",{
    x:'0vmin',
},'f')
tl.to("#text-1",{
    x:'60vmin',
    duration:1,
    delay:2,
},'f')
tl.to("#text-2",{
    x:'-60vmin',
    duration:1,
    delay:2,
},'f')
tl.to("#image",{
    rotate: 360,
    delay:2,
},'f')
tl.to("#image",{
    backgroundImage : "url('Images/P3.png')",
    duration:0,
},'g')
tl.to("#text-1",{
    innerText:"ORDER",
},'g')
tl.to("#text-2",{
    innerText:"NOW",
},'g')
tl.to("#image",{
    rotate: -360,
},'h')
tl.fromTo("#text-1",{
    x:'60vmin',
},{
    x:'-5vmin',
},'h')
tl.fromTo("#text-2",{
    x:'-60vmin',
},{
    x:'5vmin',
},'h')
tl.to("#text-1",{
    x:'0vmin',
},'i')
tl.to("#text-2",{
    x:'0vmin',
},'i')
tl.to("#text-1",{
    x:'60vmin',
    duration:1,
    delay:2,
},'i')
tl.to("#text-2",{
    x:'-60vmin',
    duration:1,
    delay:2,
},'i')
tl.to("#image",{
    rotate: 360,
    delay:2,
},'i')
tl.to("#image",{
    backgroundImage : "url('Images/P1.png')",
    duration:0,
},'j')
tl.to("#text-1",{
    innerText:"GREAT",
},'j')
tl.to("#text-2",{
    innerText:"DEALS",
},'j')

document.querySelector(".profile").addEventListener("click",function(){
    document.querySelector("#profile-page").classList.remove("hidden");
});

document.querySelector("#cross").addEventListener("click",function(){
    document.querySelector("#profile-page").classList.add("hidden");
});

document.querySelector("#nav2").addEventListener("click",function(){
    document.querySelector(".navDiv").classList.remove("hidden");
    document.querySelector("#nav2").classList.add("hidden");
    document.querySelector("#cross2").classList.remove("hidden");
});

document.querySelector("#cross2").addEventListener("click",function(){
    document.querySelector(".navDiv").classList.add("hidden");
    document.querySelector("#nav2").classList.remove("hidden");
    document.querySelector("#cross2").classList.add("hidden");
});


document.querySelector("#deal-page").addEventListener("mousemove",function(e){
    document.querySelectorAll(".img").forEach((elem)=>{
        const position=elem.getAttribute("value");
        const x=(window.innerWidth-e.clientX*position)/30;
        var y=(window.innerWidth-e.clientY*position)/70;
        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("sideDiv");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

function start(){
    
    document.getElementById("circle1").style.backgroundColor = "blue";
    setTimeout(() => {
        document.getElementById("trackLine1").style.backgroundColor = "blue";
    }, 1000);
    setTimeout(() => {
        document.getElementById("circle2").style.backgroundColor = "blue";
    }, 1000);
    setTimeout(() => {
        document.getElementById("circle3").style.backgroundColor = "blue";
    }, 2000);
    setTimeout(() => {
        document.getElementById("circle4").style.backgroundColor = "blue";
    }, 3000);
    setTimeout(() => {
        document.getElementById("circle5").style.backgroundColor = "blue";
    }, 4000);
    setTimeout(() => {
        document.getElementById("circle6").style.backgroundColor = "blue";
        document.getElementById("greenFlag").style.opacity = 1;
        document.getElementById("redFlag").style.opacity = 0;

    }, 5000);
    
}
