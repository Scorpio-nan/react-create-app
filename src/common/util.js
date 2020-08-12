export function setItem(key,value){
    return localStorage.setItem(key,value);
}

export function getItem(key){
    try {
        return localStorage.getItem(key);
    } catch (error) {
        
    }
}
