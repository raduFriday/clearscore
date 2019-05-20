  
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../App.css';

class IdeasList extends Component {

  render() {
   
    return (
      <ul className='ideasList'> 
        {
          Object.keys(this.props.ideas).map(function(key) {
            const no = this.props.ideas[key].text.length;
            return (
              <li className='idea' key={key}>
                <input 
                  type='text' 
                  placeholder='idea title...' 
                  className='idea__title' 
                  value={this.props.ideas[key].title}
                  onChange={(evt) => {this.props.handleChangeContent(key, evt, 'title')}}
                  autoFocus
                />
                <textarea 
                  className='idea__text' 
                  placeholder='idea text...' 
                  value={this.props.ideas[key].text}
                  onChange={(evt) => {this.props.handleChangeContent(key, evt, 'text')}}
                  maxLength='140'
                />
                <span className='idea__time'>Created at {this.props.ideas[key].time}</span>
                <span className={classNames('idea__counter', no === 140 ? 'idea__counter--alert' : '')}>{no}/140</span>
              </li>);
          }.bind(this))
        }
      </ul>
    )
  }
}
IdeasList.propTypes = {
  ideas: PropTypes.shape(),
  handleChangeContent: PropTypes.func
}
IdeasList.defaultProps = {
  ideas: {},
  handleChangeContent: () => {}
}
export default IdeasList;