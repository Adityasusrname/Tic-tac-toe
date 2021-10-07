var situation={
    move:"X",
    winner:"0"
}

var a=[]
for(i=0;i<3;i++)
{
  a[i]=[]
  for(j=0;j<3;j++)
  {
      a[i][j]="0"
  }
}


window.onclick=e=>{
    
    if(e.target.tagName==="TD")
    e.target.textContent=situation.move

}
function Reload()
{
    location.reload()
}
function clicked(x,y)
{

 
    if(situation.winner=="0")
    {
    
    a[x][y]=situation.move
    if(situation.move=="X")
    {
    situation.move="O"
   
    }
    else{
    situation.move="X"
   
    }
  check()
}
}
function check()
{
    
    for(i=0;i<3;i++)
    {
       if((a[i][0]===a[i][1]) && (a[i][1]===a[i][2]) && (a[i][0]!="0"))
       {
         if(a[i][0]=="X")
           situation.winner="O"
           else
           situation.winner="X"
          
           alert(situation.winner+" is the winner!")
         

       }
       else if((a[0][i]===a[1][i]) && (a[1][i]===a[2][i]) && (a[0][i]!="0"))
       {
        if(a[0][i]=="X")
        situation.winner="O"
        else
        situation.winner="X"

        alert(situation.winner+" is the winner!")
    

       }

    }
    if(situation.winner=="0")
    {
        console.log("Hello")
        if((a[0][0]===a[1][1]) && (a[1][1]===a[2][2]) && (a[0][0]!="0"))
        {
            if(a[0][0]=="X")
            situation.winner="O"
            else
            situation.winner="X"
               
                 alert(situation.winner+" is the winner!")
             
        }
        else if((a[0][2]===a[1][1]) && (a[1][1]===a[2][0]) && (a[0][2]!="0"))
        {
            if(a[0][2]=="X")
            situation.winner="O"
            else
            situation.winner="X"
                
                 alert(situation.winner+" is the winner!")
        }
    }
}

