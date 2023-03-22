import React, { Component } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchBar,
  Form,
  Button,
  Label,
  Input,
} from './Searchbar.styled'


export class Searchbar extends Component {
  state = {
    searchText: '',
  };
  onChangeHandel = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.searchText.trim() === '') {
      toast.error('No matches found!');
      return;
    }
    this.props.onSubmitForm(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <SearchBar>
        <Form onSubmit={this.onSubmitForm}>
          <Button type="submit">
            <Label>Search</Label>
          </Button>
          <Input
            type="text"
            name="searchText"
            autoComplete="off"
            value={this.state.searchText}
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={this.onChangeHandel}
          />
        </Form>
      </SearchBar>
    );
  }
}