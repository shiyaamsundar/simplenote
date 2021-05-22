import React, { Component } from 'react'
import { connect} from 'react-redux';
import { savetags } from './actions/detailsaction';


class Tags extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tags: []
        }
        this.inputRef = React.createRef()
    }

    savechanges(){
        this.props.save(this.state.tags)
    }

    removeTag = i => {
        const tags = this.state.tags
        tags.splice(i, 1)
        this.setState({
            tags: tags
        })
        this.savechanges(this.state.tags)

    }

    

    addTag = e => {
        const tags = this.state.tags
        const value = e.target.value
        if(e.key === "Enter" && value){

            if(tags.find(tag => tag.toLowerCase() === value.toLowerCase())){
                return alert("No duplicate value allowed")
            }
            tags.push(value)
            this.setState({
                tags
            })
            this.inputRef.current.value = null
        } else if(e.key === "Backspace" && !value){
            this.removeTag(tags.length - 1)
        }

        this.savechanges()

    }

    componentDidUpdate(prevProps){
        
        if(prevProps.note)
        {
        if(window.id!=prevProps.note._id)
        {
            this.setState({
                tags:this.props.note.tags
            })

        }
        }
       else if(this.props && window.id && !prevProps.note)
        {
            this.setState({
                tags:this.props.note.tags
            })
        }
        

    }

    

    render() {
        const {tags} = this.state

        console.log(tags);

        return (
            <>
 
                <div className="skill">
                    <ul>
                        { tags.map((tag, i) => {
                            return (
                                <li key={i}> {tag} <button onClick={() => this.removeTag(i)}>+</button> </li>
                            )
                        }) }
                        <li className="input-skill">
                            <input onKeyDown={this.addTag} type="text" size="4" ref={this.inputRef} />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps=(state)=>{

      
    return {
           note:state.notes.note,
           toggle:state.toggle

    }
}

const mapDispatchToprops=dispatch=>{


    return {
        save:(data)=>dispatch(savetags(window.id,data)),

    }  

}

export default connect(mapStateToProps,mapDispatchToprops)(Tags)