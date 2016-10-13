import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';


class PublishDropdown extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dropdown: false,
      topicTitle1: "",
      topicTitle2: "",
      topicTitle3: "",
      topicTitle4: "",
      topictitle5: "",
      submit: 0
    };

    this.createStory = this.createStory.bind(this);
    this.createTopicTag = this.createTopicTag.bind(this);
    this.updateTopicTitle1 = this.updateTopicTitle1.bind(this);
    this.updateTopicTitle2 = this.updateTopicTitle2.bind(this);
    this.updateTopicTitle3 = this.updateTopicTitle3.bind(this);
    this.updateTopicTitle4 = this.updateTopicTitle4.bind(this);
    this.updateTopicTitle5 = this.updateTopicTitle5.bind(this);

    this.submitTopicTitle = this.submitTopicTitle.bind(this);
    this.topicArray = this.topicArray.bind(this);

    this.toggleDropdown = this.toggleDropdown.bind(this);

  }

  toggleDropdown(e){
    e.preventDefault();
    if(this.state.dropdown === false){
      this.setState({dropdown: true});
    }else{
      this.setState({dropdown: false});
    }
  }

  topicArray(){
    let topicArray = [this.state.topicTitle1, this.state.topicTitle2, this.state.topicTitle3, this.state.topicTitle4, this.state.topicTitle5];
    topicArray = topicArray.slice(0,this.state.submit);
    return topicArray;
  }

  createStory(e){
    e.preventDefault();
    this.props.createStory(this.props.story, this.topicArray(), this.props.currentUser.id);

  }

  createTopicTag(e){
    e.preventDefault();

  }

  submitTopicTitle(e){
    e.preventDefault();
    this.setState( { topicTitle1: this.state.topicTitle1, topicTitle2: this.state.topicTitle2, topicTitle3: this.state.topicTitle3, topicTitle4: this.state.topicTitle4, topicTitle5: this.state.topicTitle5, submit: this.state.submit + 1 });
  }

  updateTopicTitle1(e){
    e.preventDefault();
    this.setState( { topicTitle1: e.target.value, topicTitle2: this.state.topicTitle2, topicTitle3: this.state.topicTitle3, topicTitle4: this.state.topicTitle4, topicTitle5: this.state.topicTitle5, submit: this.state.submit });
  }

  updateTopicTitle2(e){
    e.preventDefault();
    this.setState( { topicTitle1: this.state.topicTitle1, topicTitle2: e.target.value, topicTitle3: this.state.topicTitle3, topicTitle4: this.state.topicTitle4, topicTitle5: this.state.topicTitle5, submit: this.state.submit });
  }

  updateTopicTitle3(e){
    e.preventDefault();
    this.setState( { topicTitle1: this.state.topicTitle1, topicTitle2: this.state.topicTitle2, topicTitle3: e.target.value, topicTitle4: this.state.topicTitle4, topicTitle5: this.state.topicTitle5, submit: this.state.submit });
  }

  updateTopicTitle4(e){
    e.preventDefault();
    this.setState( { topicTitle1: this.state.topicTitle1, topicTitle2: this.state.topicTitle2, topicTitle3: this.state.topicTitle3, topicTitle4: e.target.value, topicTitle5: this.state.topicTitle5, submit: this.state.submit });
  }

  updateTopicTitle5(e){
    e.preventDefault();
    this.setState( { topicTitle1: this.state.topicTitle1, topicTitle2: this.state.topicTitle2, topicTitle3: this.state.topicTitle3, topicTitle4: this.state.topicTitle4, topicTitle5: e.target.value, submit: this.state.submit });
  }



  render(){

    if(this.state.dropdown === true){

      if(this.state.submit === 0){

        return(
          <div>
            <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish</Link></li>
              <div className="avatar-dropdown-group">
                  <div className="avatar-dropdown-arrow"></div>
                  <h2 className="ready-to-publish">Ready to publish?</h2>
                  <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>
                  <form onSubmit={this.submitTopicTitle}>
                    <input type="text" onChange={this.updateTopicTitle1}></input>
                  </form>

                  <li onClick={this.createStory} className="save-button round-button publish-dropdown-button greenlink">Publish</li>
                </div>
          </div>


      );

    }
    else if (this.state.submit === 1){
      return(
        <div>
          <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish </Link></li>
          <div className="avatar-dropdown-group">
                  <div className="avatar-dropdown-arrow"></div>
                  <h2 className="ready-to-publish">Ready to publish?</h2>
                  <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>

                  <button className="submitted-topic-title">{`${this.state.topicTitle1}   `}
                    <text className="button-x">x</text>
                  </button>

                  <form onSubmit={this.submitTopicTitle}>
                    <input type="text" onChange={this.updateTopicTitle2}></input>
                  </form>

                  <li onClick={this.createStory} className="save-button round-button publish-dropdown-button greenlink">Publish</li>
              </div>
          </div>


      );

    }


      else if(this.state.submit === 2){

        return(
          <div>
            <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish</Link></li>
            <div className="avatar-dropdown-group">
                    <div className="avatar-dropdown-arrow"></div>
                    <h2 className="ready-to-publish">Ready to publish?</h2>
                    <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>

                    <button className="submitted-topic-title">{`${this.state.topicTitle1}   `}
                      <text className="button-x">x</text>
                    </button>

                    <button className="submitted-topic-title">{`${this.state.topicTitle2}   `}
                      <text className="button-x">x</text>
                    </button>

                    <form onSubmit={this.submitTopicTitle}>
                      <input type="text" onChange={this.updateTopicTitle3}></input>
                    </form>

                    <li onClick={this.createStory} className="save-button round-button publish-dropdown-button greenlink">Publish</li>
                </div>
            </div>


      );

    }

    else if(this.state.submit === 3){

      return(
        <div>
          <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish</Link></li>
          <div className="avatar-dropdown-group">

                  <div className="avatar-dropdown-arrow"></div>
                  <h2 className="ready-to-publish">Ready to publish?</h2>
                  <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>

                  <button className="submitted-topic-title">{`${this.state.topicTitle1}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle2}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle3}   `}
                    <text className="button-x">x</text>
                  </button>

                  <form onSubmit={this.submitTopicTitle}>
                    <input type="text" onChange={this.updateTopicTitle4}></input>
                  </form>

                  <li onClick={this.createStory} className="save-button round-button publish-dropdown-button greenlink">Publish</li>
              </div>
          </div>


    );

    }

    else if(this.state.submit === 4){

      return(
        <div>
          <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish  </Link></li>
          <div className="avatar-dropdown-group">
                  <div className="avatar-dropdown-arrow"></div>
                  <h2 className="ready-to-publish">Ready to publish?</h2>
                  <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>

                  <button className="submitted-topic-title">{`${this.state.topicTitle1}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle2}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle3}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle4}   `}
                    <text className="button-x">x</text>
                  </button>


                  <form onSubmit={this.submitTopicTitle}>
                    <input type="text" onChange={this.updateTopicTitle5}></input>
                  </form>


                  <li onClick={this.createStory} className="save-button round-button publish-dropdown-button greenlink">Publish</li>
              </div>
          </div>


    );

  }


    else if(this.state.submit === 5){

      return(
        <div>
          <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish</Link></li>
              <div className="avatar-dropdown-group">
                  <div className="avatar-dropdown-arrow"></div>
                  <h2 className="ready-to-publish">Ready to publish?</h2>
                  <text className="add-or-change-tags">Add or change tags (up to 5) so your story reaches more people:</text>

                  <button className="submitted-topic-title">{`${this.state.topicTitle1}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle2}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle3}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle4}   `}
                    <text className="button-x">x</text>
                  </button>

                  <button className="submitted-topic-title">{`${this.state.topicTitle5}   `}
                    <text className="button-x">x</text>
                  </button>

                  <li onClick={this.createStory} className="save-button round-button publish-dropdown-button greenlink">Publish</li>
              </div>
            </div>



        );
      }
    } else{
      return(
        <li onClick={this.toggleDropdown}><Link className="greenlink writestory">Publish</Link></li>
      );
    }
}
}

export default PublishDropdown;
