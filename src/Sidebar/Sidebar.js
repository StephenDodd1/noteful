import React, {Component} from 'react';

export default class Sidebar extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      console.log(this.props)
      const list = this.props.store.folders.map((folder) => 
         folder.name
      )
      return (
         <ul className = 'sidebar'>
            {list}
         </ul>
      )
   }
} 