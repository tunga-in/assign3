
export async function saveUser(user){
    localStorage.setItem('@user',JSON.stringify(user) );
}


export function getCurrUser(){
    let user = localStorage.getItem('@user');
    return user? JSON.parse(user): null;
}


export function removeUser(){
    localStorage.removeItem('@user');
}
