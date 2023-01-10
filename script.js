(() => {});

console.log("Hello ya ashura");

let test=$('.test')
test.css('background','green');

$(()=>{
    console.log("this is arrow function");
})

let task=$(".task")
let input=$("#input")
let btndel=$("#delbtn")

let btn=$("#btn")
btn.click(function(){
   
   var divelement=$("<div class='subtask'></div>")
    var element=$("<input type='text'>")
    var delbtn=$("<button id='delbtn'>delete</button>")

    element.attr("Placeholder",`${input.val()}`)
    element.appendTo(divelement)
    
    delbtn.appendTo(divelement)
    divelement.appendTo(task)
   
    delbtn.click(function(){
       divelement.remove()
        
    }) 
   

})







    
    
    
    
    
    
    
    
  