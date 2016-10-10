import React from 'react';
import { Link } from 'react-router';
import AuthorFormHeader from './author_form_header';


class AuthorForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: this.props.author.imageUrl,
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
    this.props.editUser(formData, this.props.author.id);

  }

  updateFile(e){
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend= function(){
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: this.props.author.imageUrl, imageFile: null });
    }
  }

  toggleForm(e){
    e.preventDefault();
    this.setState({ toggleForm: false });

  }

  render(){

    if (this.state.toggleForm === true){
      return(
        <div className="author-header">
          <div className="author-box">
            <h1 className="author-name">{this.props.author.name}</h1>

            <label className="camera-button image-profile" >
              <img src={this.state.imageUrl} className = "image-profile"></img>
              <input type="file" onChange={this.updateFile} className="photo-form-input"></input>
            </label>
            <button onClick={this.handleSubmit} className="round-button save-button">Save</button>
            <button onClick={this.toggleForm} className="round-button">Cancel</button>
          </div>
        </div>

      );
    }
    else return(
      <AuthorFormHeader author={this.props.author}/>
    );

  }



}

export default AuthorForm;
