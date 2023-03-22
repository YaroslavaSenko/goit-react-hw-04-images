import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import {Error} from '../components/TextSearchError/TextSearchError';
import * as API from './../servises/API';

import {Searchbar} from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import {Loader} from './Loader/Loader';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';
import {Container} from './app.styled';


class App extends Component{
state={
  query: '',
    page: 1,
    images: [],
    showModal: false,
    largeImageURL: '',
    tags: '',
    showBtn: false,
    isLoading: false,
    error: false,
    status: 'idle',

}


componentDidMount() {
  document.addEventListener('keydown', this.onKeyEscPress, false);
}
componentDidUpdate(prevProps, prevState) {
  const { images, query, page } = this.state;
  if (query !== prevState.query || page !== prevState.page) {
    this.setState({
      isLoading: true,
    });
  }

  if (
    query !== prevState.query ||
    page !== prevState.page ||
    !images.length
  ) {
    API.getImages(query, page)
      .then(data => {
        if (!data.hits.length) {
          this.setState({
            showBtn: false,
          });
          return;
        }
        console.log('data =', data);
        if (!images.length) {
          this.setState(prevState => ({
            images: [...data.hits],
            showBtn: true,
          }));
        } else
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showBtn: true,
          }));
        if (data.totalHits <= this.state.images.length + 12)
          this.setState({
            showBtn: false,
          });
      })
      .catch(error => {
        this.setState({
          error: true,
          })
          return;
  
      })
      .finally(
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 1000)
      );
  }
}
componentWillUnmount() {
  document.removeEventListener('keydown', this.onKeyEscPress, false);
}
  onSubmitForm = word => {
    this.setState({
      query: word,
      images: [],
      page: 1,
    });
  };

  onClickButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

  };

  onClickClose = () => {
    this.setState({
      showModal: false,
    });
  };

  onClickImage = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      tags: tags,
    });
  };

  onKeyEscPress = event => {
    if (event.keyCode === 27)
      this.setState({
        showModal: false,
      });
  };

  render() {
    const {isLoading, showBtn, showModal, images, largeImageURL, tags, error} = this.state;
    
    return(
      <Container>
        <ToastContainer 
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}/>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery
          images={images}
          onClickImage={this.onClickImage}
        />
        {isLoading && <Loader />}
        {showBtn && <Button onClickButton={this.onClickButton} />}
        {showModal && (
          <Modal
            image={largeImageURL}
            tags={tags}
            onClickClose={this.onClickClose}
          />
        )}
        {error && <Error />}
      </Container>
    )
  }
}

export default App