import React, { useState } from "react";

function BooksDetails(props) {
  const [moreDetailsClicked, setMoreDetailsClicked] = useState(false);

  let propsData = props.data;

  const moreDetails = (e, result) => {
    e.preventDefault();
    setMoreDetailsClicked(!moreDetailsClicked);
  }

  return (
    <li data-id={propsData.id} key={props.index}>
      <h2><a className={moreDetailsClicked ? 'active' : ''} href="#Book" onClick={(e) => moreDetails(e)}>{propsData.title}</a></h2>
      {
        moreDetailsClicked && <div className="more-details">
          <div><span>Authors Details:</span>
            <ul>
              <li><span>Name: </span> {propsData.authors[0].name}</li>
              <li><span>Birth Year: </span> {propsData.authors[0].birth_year}</li>
              <li><span>Death Year: </span> {propsData.authors[0].death_year}</li>
            </ul>
          </div>
          <div><span>Subjects Available: </span> <ul>
            {
              propsData.subjects.map((subject, index) => {
                return <li key={index}>{subject}</li>
              })
            }
          </ul></div>
          <div><span>Bookshelves Available:</span> <ul>
            {
              propsData.bookshelves.map((bookshelve, index) => {
                return <li key={index}>{bookshelve}</li>
              })
            }
          </ul></div>
          <div><span>Language Available:</span> <ul>
            {
              propsData.languages.map((language, index) => {
                return <li key={index}>{language}</li>
              })
            }
          </ul></div>
          <p><span>Download Count:</span> {propsData.download_count}</p>
        </div>
      }
    </li>
  )
}

export default BooksDetails;
