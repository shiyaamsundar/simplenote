import React from 'react'
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import StarIcon from '@material-ui/icons/Star';


const Notescard = ({data}) => {


    // function getFirstLine(text) {
    //     var index = text.indexOf("\n");
    //     if (index === -1) index = undefined;
    //     return text.substring(0, index);
    // }

    // let f=getFirstLine(data.data)
    // console.log(f,"hello");



    console.log(data.pinned);

    const firstline=(data.data).substring(0,30)
    const secondline=(data.data).substring(30,100)
    const modified=(data.modified).substring(0,19)
    const m=new Date(modified)
    // console.log(,"dddd");
    const day=m.getDate()
    const month=m.getMonth()
    const year=m.getFullYear()
    const hr=m.getHours()
    const mins=m.getMinutes()
    console.log(day,month,year,hr,mins,m);

    const date=new Date(year,month,day,hr,mins)
    console.log(date,"dateeee");


    function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
      }

    const aabb=convert(data.modified)
    console.log(aabb,"adasdasdasdasfdasdfkhb");

    const setactive=(id)=>{
        window.id=id
        console.log(window.id);

    


    }

    // let addactiveclass=document.getElementsByClassName("notes")
    // addactiveclass.classList.add("mystyle")




    // const firstline=data.data.substr(0,data.data.indexOf("/n"))

    // console.log(firstline);
    // let h="omalak his answer is correct, but in case you want to really only match the first line it will be useful to pass the optional second limit parameter. Like this you prevent that a long string (with thousands of lines) will be splitted till the end before the first match is returned."
    //     console.log(h.split('/n')[]);
    
    return (
        <div className="notes" onClick={()=>setactive(data._id)} >
             {!data.pinned?(
                   <GradeOutlinedIcon className="star" onClick={()=>console.log("star-cli")}/> 
           
            ):(
                <StarIcon className="star-fill" onClick={()=>console.log("star-cli")}/>
            )} 
           
            <div className="card">
            <h3 className="card-head">{firstline}</h3>
            <br/>
            <p className="card-p">{secondline}</p>
            <small className="note-meta ">Last Modify [date]:-  {}</small>
            </div>
            
            
        </div>
    )
}

export default Notescard

