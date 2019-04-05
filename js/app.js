// get key words

const form = document.querySelector('.book-form');
const input = form.querySelector('.book-form__input');
const api = `https://www.googleapis.com/books/v1/volumes?q=intitle:`;

const getTitle = (e) => {
    e.preventDefault();
    const query = input.value;
    console.log(query);
    fetch(api + query)
        .then((res) => res.json())
        .then((data) => console.log(data));
}

form.addEventListener('submit', getTitle);


// API query


