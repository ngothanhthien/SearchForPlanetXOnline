const variableName='loggedToken'
export const setUserLoginToken=(token)=>{
    localStorage.setItem(variableName,token);
}
export const getUserLoginToken=()=>localStorage.getItem(variableName);
export const removeUserLoginToken=()=>localStorage.removeItem(variableName);
export const sendRequestWithLoginToken=async (link,data,method)=>{
    const token=getUserLoginToken();
    const response = await fetch(link, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
    return response.json();
}