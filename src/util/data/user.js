
export async function saveUser(user){
    localStorage.setItem('@user',JSON.stringify(user) );
}


export async function getCurrUser(){
    let user = localStorage.getItem('@user');
    return user? JSON.parse(user): null;
}
