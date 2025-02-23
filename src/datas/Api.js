 
 const dataUrl = "https://carsales-s2fj.onrender.com";


 export const Data = {
    fetch: async(route , methods = "GET", body)=>{
        const res = await fetch(dataUrl+route,{
            headers:{
                "Content - Type": ""
            }
        })

        }
    }
 }