import { Component } from 'react';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';
import EmojiResults from '../components/EmojiResult/EmojiResults';
import filterEmoji from '../helpers/filterEmoji';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
