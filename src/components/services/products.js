const BASE_URL='https://practiceapi.devmountain.com/products';

export function index(){
    return fetch(BASE_URL)
    .then(res =>res.json());
}

export function get(id){
    return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
}