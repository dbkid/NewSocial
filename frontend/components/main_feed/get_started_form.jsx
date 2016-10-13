import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class GetStartedForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      user: {
        name: null,
        email: null,
        password: null
      },
      signUp: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleName = this.handleName.bind(this);
    this.signUp = this.signUp.bind(this);
    this.toggleForm = this.toggleForm.bind(this);

  }

  toggleForm(e){
    e.preventDefault();
    if (this.state.signUp === true){
      this.setState({signUp: false});
    } else {
      this.setState({signUp: true});
    }
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
    if(this.state.signUp === true){
      return(
        <button className="get-started" onClick={this.openModal}>Get started
          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="popupcontent"
              overlayClassName="overlay" >

              <a href="#" onClick={this.closeModal} className="modalX">x</a>

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
                    <li className="greenlink popupsignin" onClick={this.toggleForm}><a href="#">Sign in</a></li>
                    <li className="greenlink popupsignup"><a href="#" onClick={this.signUp}>Sign up</a></li>
                  </ul>
              </form>
              </div>
            </Modal>
        </button>
      );
    } else{
      return(
        <button className="get-started" onClick={this.openModal}>Get started
          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              className="popupcontent"
              overlayClassName="overlay"
              >

              <a href="#" onClick={this.closeModal} className="modalX">x</a>

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
                    <li className="greenlink popupsignup" onClick={this.toggleForm}><a href="#">Sign up</a></li>
                  </ul>
              </form>
              </div>
            </Modal>
        </button>
      );
    }

  }


}

export default GetStartedForm;
