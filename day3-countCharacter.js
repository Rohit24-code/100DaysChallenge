const countCharacter=(str,char)=>{

    //my method
    // str.split("").map((item)=>item===char ? count++ :null)



    //reduce method
   let count= str.split("").reduce((accu,curr)=>{
        if(curr===char){
            accu++
        }
        return accu
    },0)
    return count
}



console.log(countCharacter("MissIssippi","i"))