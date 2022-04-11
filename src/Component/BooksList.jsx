import React, { useState, useEffect } from "react";
import axios from "axios";

import BooksDetails from "./BookDetails";
import BookButton from "./BookButton";

function BooksList() {
  const [apiURL, setApiURL] = useState('https://gutendex.com/books/');
  const [dataFromAPI, setDataFromAPI] = useState();

  const getDataFromAPI = async () => {
    await axios.get(apiURL).then(
      res => {
        setDataFromAPI(res.data);
      }
    ).catch(err => {
      console.log(err);
      return null;
    });
  }

  const updateApiUrl = (newPath) => {
    setApiURL(newPath);
    setDataFromAPI('');
  }

  useEffect(() => {
    getDataFromAPI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [apiURL]);

  return (
    (dataFromAPI != undefined && dataFromAPI != null && dataFromAPI != '') ? <section className="books-list-container">
      <h1>List of Books</h1>
      <p><span>Total Books: </span>{dataFromAPI.count}</p>
      <BookButton data={dataFromAPI} update={updateApiUrl} />
      <ul>
        {
          dataFromAPI.results.map((result, index) => {
            return <BooksDetails data={result} index={index} key={index} />
          })
        }
      </ul>
      <BookButton data={dataFromAPI} update={updateApiUrl} />
    </section> : <p className="message">⌛ Please wait, We are Loading the Data for you...</p>
  )
}

export default BooksList;
