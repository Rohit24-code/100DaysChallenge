const generateHashTag=(data)=>{
  let ans="#"
  data?.split(" ")?.map((item)=>(ans+=(item[0].toUpperCase() + item.slice(1))))
  return ans
}

let ans=generateHashTag("mera naam rohit ha")
console.log(ans);
