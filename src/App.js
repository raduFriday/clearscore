import React, {Component} from 'react';
import IdeasList from './Components/IdeasList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideasList: {}
    }
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }
  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  addIdea() {
    const ideas = {...this.state.ideasList};
    const timestamp = (new Date()).getTime();
    const options = {
      hour12 : true,
      hour:  "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }
    const time = new Date().toLocaleTimeString("en-US",options);
    ideas['idea-' + timestamp ] = {title: '', text: '', time:[time]};
    this.setState({ ideasList : ideas });
  }
  clearIdeas() {
    this.setState({ideasList: {}})
    localStorage.clear();
  }
  handleChangeContent(idea ,evt, type) {
    const ideasList = {...this.state.ideasList}
    if (type === 'title') {
      ideasList[idea].title = evt.target.value
    } else if (type === 'text') {
      ideasList[idea].text = evt.target.value
    }
    this.setState({
      ideasList: ideasList
    });
    localStorage.setItem('ideasList', JSON.stringify(this.state.ideasList));
  }

  render () {
    return (
      <div className='container'>
        <h1 className='name'>Radu Silaghi - Idea Board</h1>
        <div className="logo"></div>
        <button className="button" onClick={() => {this.addIdea()}}>Add Idea</button>
        <IdeasList 
          ideas={this.state.ideasList}
          handleChangeContent={this.handleChangeContent}
        />
        {Object.entries(this.state.ideasList).length > 0 &&
          <button className="button button--red" onClick={() => {this.clearIdeas()}}>Clear Ideas</button>
        }
        
      </div>
    );
  }
}

export default App;
