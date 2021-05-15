const initialstate={

    t:{
        preview:false,
        more:false,
        info:false,
        arrow:false,
        check:false,
        flip:false,
        addnote:false,
        star:false


    },
}


const toggleReducer=(state={       preview:false,
    more:false,
    info:false,
    arrow:false,
    check:false,addnote:1,
    star:false,
    flip:false,},action)=>{

    switch(action.type){
        case 'PREVIEW':
           return  {
                ...state,
                preview:!state.preview
            }
            case 'INFO':
           return  {
                ...state,
                info:!state.info
            }
            case 'ARROW':
            return  {
                 ...state,
                 arrow:!state.arrow
             }
             case 'CHECK':
             return  {
                  ...state,
                  check:!state.check
              }
              case 'MORE':
              return  {
                   ...state,
                   more:!state.more
               }
               case 'FLIP':
           return  {
                ...state,
                flip:!state.flip
            }
            case 'STAR':
                return  {
                     ...state,
                     star:!state.star
                 }
            default:
                return state;
    }

}

export default toggleReducer;




