import React from 'react';
import { Link } from 'react-router';
import editUser from '../../actions/author_actions';


class AuthorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      toggleForm: true

    };

    this.updateFile = this.updateFile.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[image]", this.state.imageFile);
    editUser(formData);

  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend= function(){
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    };


  }

  toggleForm(e){
    e.preventDefault();
    this.setState({ toggleForm: false })

  }

  render(){

    if (this.state.toggleForm === true){
      return(
        <div className="author-header">
          <div className="author-box">
            <h1 className="author-name">{this.props.author.name}</h1>
            <input type="file" onChange={this.updateFile}></input>
            <img src={this.state.imageUrl}/>
            <button onClick={this.handleSubmit}>Save</button>
            <button onClick={this.toggleForm}>Cancel</button>
          </div>
        </div>

      );
    }

  }



}

export default AuthorForm;
