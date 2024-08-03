export const BASE_URL = "https://webaccounting.herokuapp.com/account";

export const encryptedToken = (login:string,password:string)=>{
  return `Basic ${btoa(`${login}:${password}`)}`;
}