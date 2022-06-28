const variableName='loggedToken'
export const setUserLoginToken=(token)=>{
    localStorage.setItem(variableName,token);
}
export const getUserLoginToken=()=>localStorage.getItem(variableName);
export const removeUserLoginToken=()=>localStorage.removeItem(variableName);