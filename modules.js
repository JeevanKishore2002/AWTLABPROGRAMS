// modules using named exports 
let  empname="jeevan";
let branch="hyd";
  let getBranch=function()
{
return branch;
}
  let setBranch=function(newBranch)
{
branch=newBranch;
}
// named export at the program 
//we can  passn any number of arguments to it  
export {getBranch,setBranch};

//default export
/*
let empname="jeevan"
let branch="Hyderbad"
let location={
    getBranch:function(){
        return branch;
    },
    setBranch:function(newBranch){
        branch=newBranch;
    }
}
export default location;
*/
