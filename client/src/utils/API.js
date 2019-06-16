import axios from "axios";
// const key = process.env.GOOGLE_BOOKS_KEY;
// userInput;
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = process.env.API_KEY;

export default {

    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
      },
    // Gets google api data
    google: function (userInput) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + userInput + "&projection=lite&maxResults=5");
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
