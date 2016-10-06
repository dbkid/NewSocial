import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class SignInForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      user: {
        email: null,
        password: null
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signIn = this.signIn.bind(this);

  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
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

  signIn(e){
    e.preventDefault();
    this.props.signIn(this.state.user);
  }

  render(){
    return(
      <li className="greenlink loginbutton"><a href="#" onClick={this.openModal}>Sign in /</a>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            className="popupcontent"
            overlayClassName="overlay"
            >

            <a href="#" onClick={this.closeModal}>X</a>

            <div className="popup">
              <div className="popuptopbar">
                    <h2 className="newsocial popuplogo">NewSocial</h2>
              </div>

              <p className="popupdescription">Sign in to NewSocial to connect with voices and perspectives that matter.</p>

              <form>
                <input className="signupinput" type="text" placeholder="Email" onChange={this.handleEmail}></input>
                <input className="signupinput" type="password" placeholder="Password" onChange={this.handlePassword}></input>
                <ul className="group">
                  <li className="greenlink popupsignin"><a href="#" onClick={this.signIn}>Sign in</a></li>
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
