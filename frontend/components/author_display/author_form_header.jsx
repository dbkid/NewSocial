import React from 'react';
import { Link } from 'react-router';
import AuthorForm from './author_form';


class AuthorFormHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formToggle: false
    };
    this.toggleForm = this.toggleForm.bind(this);

  }

  toggleForm(e){
    e.preventDefault();
    this.setState({ formToggle: true });
  }

  render(){

    if ( this.state.formToggle === false ){
      return(
        <div className="author-header">
          <div className="author-box">
            <h1 className="author-name">{this.props.author.name}</h1>
            <button onClick={this.toggleForm}>Edit</button>
          </div>
        </div>

      );
    } else {
      return(
        <AuthorForm/>
      )
    }

  }



}

export default AuthorFormHeader;
