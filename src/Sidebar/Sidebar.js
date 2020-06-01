import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import AddFolder from '../AddFolder/AddFolder';

export default class Sidebar extends Component {
    
   render() {
      console.log(this.props)
      const list = this.props.store.folders.map((folder) => 
         <button 
            key={folder.id}
            >
            {folder.name}
         </button>
      )
      return (
         <div className = 'sidebar'>
            {list}
            
            <Link to = './AddFolder'>Add Folder</Link>
         </div>
      )
   }
} 