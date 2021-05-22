import axios from "axios";


const url="http://localhost:5000/api/"

export const preview=()=>{
    return {
        type:'PREVIEW'
    }
}

export const info=()=>{
    return {
        type:'INFO'
    }
}
export const arrow=()=>{
    return {
        type:'ARROW'
    }
}
export const more=()=>{
    return {
        type:'MORE'
    }
}
export const check=()=>{
    return {
        type:'CHECK'
    }
}
export const star=()=>{
    return {
        type:'STAR'
    }
}

export const flip=()=>{
    return {
        type:'FLIP'
    }
}



