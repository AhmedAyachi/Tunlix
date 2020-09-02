export const setMovie=(key,value)=>{
    const data={};
    data[key]=value;
    return {
        type:"setMovie",
        data:data,
    }    
}