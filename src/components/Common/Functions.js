import Cookies from 'universal-cookie';

export function isUserLogIn(){

}

export function setCookiesAndData(response){
    const cookies = new Cookies();
    let x = response.userData.jwtToken.split(".");
    cookies.set("_1fj2Ew", x[0], 1);
    cookies.set("_JdgE54", btoa(x[1]), 1);
    cookies.set("_3mhb65", x[2], 1);
    sessionStorage.setItem('userData', JSON.stringify({ userData: response.userData }));
}