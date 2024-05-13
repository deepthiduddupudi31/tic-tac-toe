let boxes=document.querySelectorAll(".box");
let para=document.querySelector("#para");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let turn0=true;
let turnx;
let count=0;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
resetbtn.addEventListener("click",()=>{
    turn0=true;
    count=0;
    para.classList.add("hide");
    enableboxes();
});
const gamedraw =()=>{
    para.innerText=`Game was draw`;
    para.classList.remove("hide");
    disableboxes();

}
newbtn.addEventListener("click",()=>{
    turn0=true;
    count=0;
    para.classList.add("hide");
    enableboxes();
});
const disableboxes =()=>
{
    for(let box of boxes)
    {
      box.disabled=true;
    }
}
const enableboxes = ()=>
{
     for(let box of boxes)
     {
        box.disabled=false;
        box.innerText=" ";
     }
}

 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turn0===true)
    {
        box.innerText="0";
        turnx=true;
        turn0=false;
    }
    else
    {
        box.innerText="X";
        turn0=true;
        turnx=false;
    }
    box.disabled=true;
    count++;
    let iswinner=checkwinner();
    if(count===9  && !iswinner)
    {
        gamedraw();
    }
       
    });

});
const showwinner =((ele) =>
{
  
    console.log(ele);
    para.classList.remove("hide");
    para.innerText=`congratulations you are the winner player ${ele}`;
    disableboxes();

   
});
const checkwinner=(()=>{
    for(let pattern of winpatterns)
    {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=="" && pos2!=="" && pos3!=="" && pos1===pos2 && pos2===pos3)
    {
      showwinner(pos1);
      return true;
       
    }
    

    }
});
