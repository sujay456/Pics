import React from 'react';


class Search extends React.Component{
    
    state={
        term:''
    }

    // We use a arrow  function because arrow function is already binded with this
    onFormSubmit= (event)=>{
        event.preventDefault();
        // console.log(this.state.term);

        this.props.runSubmit(this.state.term);
    }

    render()
    {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                   <div className="feild">
                       <label>Image Search</label>
                       <input type="text" value={this.state.term} onChange={ (e)=> this.setState( {term:e.target.value } ) } ></input>
                    </div> 
                </form>
            </div>
        );
    }

};

export default Search;