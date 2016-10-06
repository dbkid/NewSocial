import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class SignInForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      user: {
        name: null,
        email: null,
        password: null
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clearDefaultValue = this.clearDefaultValue.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }


    clearDefaultValue(e){
      e.preventDefault();
      e.target.value = "";
    }

  handleEmail(e){
    e.preventDefault();
    let email = e.target.value;
    return this.setState({
        ['user']: { ["email"]: email, ["password"]: this.state.user.password }
      });
  }

  handlePassword(e){
    e.preventDefault();
    let password = e.target.value;
    return this.setState({
      ['user']: { ["email"]: this.state.user.email, ['password']: password }
    });
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <li className="greenlink loginbutton"><a href="#" onClick={this.openModal}>Sign in /</a>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}>

            <a href="#" onClick={this.closeModal}>X</a>

            <div className="popup">
              <div className="popuptopbar">
                    <h2 className="newsocial popuplogo">NewSocial</h2>
              </div>

              <p className="popupdescription">Sign in to NewSocial to connect with voices and perspectives that matter.</p>

              <form>
                <input className="signupinput" type="text" defaultValue="Email" onClick={this.clearDefaultValue} onChange={this.handleEmail}></input>
                <input className="signupinput" type="text" defaultValue="Password" onClick={this.clearDefaultValue} onChange={this.handlePassword}></input>
                <ul className="group">
                  <li className="greenlink popupsignin"><a href="#">Sign in</a></li>
                  <li className="greenlink popupsignup"><a href="#">Sign up</a></li>
                </ul>
            </form>
            </div>
          </Modal>
      </li>
    );

  }


}

export default SignInForm;
