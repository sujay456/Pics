import React from 'react';
import unsplash from '../api/unsplash';

import Search from './search';
import ImageList from './image';

class App extends React.Component
{
    state={
        images: [],
        number:null
    };
    onSearchSubmit= async (term) =>
    {
        // console.log(term);
          const response=await unsplash.get('/search/photos',{
            params:{
                query:term
            } 
         });

         this.setState( {images:response.data.results} );

    }

    render()
    {   
         return (
            <div className="ui container">
                <Search runSubmit={this.onSearchSubmit } />
                Found:{this.state.images.length} images
                <ImageList image={this.state.images} />
            </div>
        ); 
    };
}

export default App;