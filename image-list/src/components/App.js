import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList"

class App extends React.Component{

    constructor(props){
        super(props)
        this.state={img:[]}
    }

    onSearchSubmit=async(entry)=>{
        console.log(entry)
       const response= await axios.get(`https://pixabay.com/api/?key=30214179-00b8260476f4deaa3d73b13e6&q=${entry}}&image_type=photo&pretty=true`)
      
       this.setState({img:response.data.hits})
    }

    render(){
        return (
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.img}/>
            </div>
        )
    }
    
}
export default App