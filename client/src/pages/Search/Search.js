import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import SearchForm from "../../components/SearchForm";
import BookDetail from "../../components/BookDetail";
// import SaveBtn from "./SaveBtn";
import API from "../../utils/API";

class BooksContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the 
  componentDidMount() {
    this.searchBooks("JavaScript");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data },
        console.log(res.data)
        ))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  saveBook = id => {
    API.saveBook(id)
      .then(console.log("Book Saved"))
      .catch(err => console.log(err));
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-8">
            <Card
              heading={this.state.search || "Search for a Book"}
            >
            
              {this.state.result.items ? (
                <BookDetail
                  title1={this.state.result.items[1].volumeInfo.title}
                  src1={this.state.result.items[1].volumeInfo.imageLinks.thumbnail}
                  authors1={this.state.result.items[1].volumeInfo.authors}
                  description1={this.state.result.items[1].volumeInfo.description}
                  link1={this.state.result.items[1].volumeInfo.infoLink}
                  
                  title2={this.state.result.items[2].volumeInfo.title}
                  src2={this.state.result.items[2].volumeInfo.imageLinks.thumbnail}
                  authors2={this.state.result.items[2].volumeInfo.authors}
                  description2={this.state.result.items[2].volumeInfo.description}
                  link2={this.state.result.items[2].volumeInfo.infoLink}

                  title3={this.state.result.items[3].volumeInfo.title}
                  src3={this.state.result.items[3].volumeInfo.imageLinks.thumbnail}
                  authors3={this.state.result.items[3].volumeInfo.authors}
                  description3={this.state.result.items[3].volumeInfo.description}
                  link3={this.state.result.items[3].volumeInfo.infoLink}

                  title4={this.state.result.items[4].volumeInfo.title}
                  src4={this.state.result.items[4].volumeInfo.imageLinks.thumbnail}
                  authors4={this.state.result.items[4].volumeInfo.authors}
                  description4={this.state.result.items[4].volumeInfo.description}
                  link4={this.state.result.items[4].volumeInfo.infoLink}

                />
                
              ) :  (
                <h3>Search for books!</h3>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BooksContainer;
































// import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import Jumbotron from "../../components/Jumbotron";
// import Card from "../../components/Card";
// import SearchForm from "../../components/SearchForm";
// import SaveBtn from "../../components/SaveBtn";
// import API from "../../utils/API";

// class BooksContainer extends Component {
//   state = {
//     result: [],
//     search: "Javascript"
//   };

//   // When this component mounts, search for the 
//   componentDidMount() {
//     this.searchBooks("JavaScript");
//   }

//   searchBooks = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data },
//         console.log(res.data)
//         ))
//       // .then(res => console.log(res.data))
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   saveBook = id => {
//     API.saveBook(id)
//       .then(console.log("Book Saved"))
//       .catch(err => console.log(err));
//   };

//   // When the form is submitted, search the OMDB API for the value of `this.state.search`
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchBooks(this.state.search);
//   };

//   render() {
//     return (
//       <Container>
//         <Row>
//         <Col size="md-4">
//             <Card heading="Search">
//               <SearchForm
//                 value={this.state.search}
//                 handleInputChange={this.handleInputChange}
//                 handleFormSubmit={this.handleFormSubmit}
//               />
//             </Card>
//           </Col>

//           <Col size="md-8">
//             {this.state.result.items.length ? (
//               <List>
//                 {this.state.result.items.map(book => {
//                   return (
//                     <ListItem key={this.state.result.items.volumeInfo.title}>
//                         <strong>
//                           {this.state.result.items.volumeInfo.title} by {this.state.result.items.volumeInfo.authors}
//                         </strong>
//                         <p>
//                           {this.state.result.items.volumeInfo.description}
//                         </p>
//                         <p>
//                           {this.state.result.items.volumeInfo.thumbnail}
//                         </p>
//                         <p>
//                           {this.state.result.items.volumeInfo.infoLink}
//                         </p>
//                       <SaveBtn onClick={() => this.SaveBook(book)} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//                 <h3>Search for books!</h3>
//               )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default BooksContainer;
