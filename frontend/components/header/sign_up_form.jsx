import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class SignUpForm extends React.Component {
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
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleName = this.handleName.bind(this);
    this.signUp = this.signUp.bind(this);

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
        ['user']: { ['name']: this.state.user.name, ["email"]: email, ["password"]: this.state.user.password }
      });
  }

  handlePassword(e){
    e.preventDefault();
    let password = e.target.value;
    return this.setState({
      ['user']: { ['name']: this.state.user.name, ["email"]: this.state.user.email, ['password']: password }
    });
  }

  handleName(e){
    e.preventDefault();
    let name = e.target.value;
    return this.setState({
      ['user']: { ["name"]: name, ["email"]: this.state.user.email, ['password']: this.state.user.password }
    });
  }

  signUp(e){
    e.preventDefault();
    this.props.signUp(this.state.user);
  }

  render(){
    return(
      <li className="greenlink loginbutton signup"><a href="#" onClick={this.openModal}>Sign up</a>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal} >

            <a href="#" onClick={this.closeModal} className="modalX">X</a>

            <div className="popup">
              <div className="popuptopbar">
                    <h2 className="newsocial popuplogo">NewSocial</h2>
              </div>

              <p className="popupdescription">Sign up for NewSocial to connect with voices and perspectives that matter.</p>

              <form>
                <input className="signupinput" type="text" placeholder="Name" onChange={this.handleName}></input>
                <input className="signupinput" type="text" placeholder="Email" onChange={this.handleEmail}></input>
                <input className="signupinput" type="password" placeholder="Password" onChange={this.handlePassword}></input>
                <ul className="group">
                  <li className="greenlink popupsignin"><a href="#">Sign in</a></li>
                  <li className="greenlink popupsignup"><a href="#" onClick={this.signUp}>Sign up</a></li>
                </ul>
            </form>
            </div>
          </Modal>
      </li>
    );

  }


}

export default SignUpForm;
