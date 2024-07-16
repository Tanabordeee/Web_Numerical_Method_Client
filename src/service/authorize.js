export const authenticate = (res , next) =>{
    if(window !== "undefined"){
        //store data in session storage
        sessionStorage.setItem("token" , JSON.stringify(res.data.token));
    }
    next();
}

//ดึงข้อมูล token
export const getToken = ()=>{
    if(window !== "undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"));
        }else{
            return false;
        }
    }
}

//logout
export const logout = (next) =>{
    if(window !== "undefined"){
        sessionStorage.removeItem("token");
    }
    next();
}