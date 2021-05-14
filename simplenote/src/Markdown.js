import React from 'react'
import ReactMarkdown from "react-markdown";
import Markdown from 'react-markdown';



const Markdown11 = ({data}) => {

    console.log(data);
    return (
        <div>


<ReactMarkdown className="mm"></ReactMarkdown>
{data}



            
        </div>
    )
}

export default Markdown11
