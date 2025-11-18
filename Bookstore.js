const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        year: 1925,
        pages: 180,
        genre: "Classic",
        description: "A story of wealth, love, and the American Dream in the Jazz Age."
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.50,
        year: 1960,
        pages: 281,
        genre: "Fiction",
        description: "A powerful story of racial injustice and the loss of innocence in the American South."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 10.75,
        year: 1949,
        pages: 328,
        genre: "Dystopian",
        description: "A dystopian social science fiction novel that examines the consequences of totalitarianism."
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 9.99,
        year: 1813,
        pages: 432,
        genre: "Romance",
        description: "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet."
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 16.25,
        year: 1937,
        pages: 310,
        genre: "Fantasy",
        description: "A fantasy novel about the adventures of hobbit Bilbo Baggins in Middle-earth."
    },
    {
        id: 6,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        price: 18.99,
        year: 1997,
        pages: 320,
        genre: "Fantasy",
        description: "The first novel in the Harry Potter series about a young wizard and his adventures at Hogwarts."
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 11.25,
        year: 1951,
        pages: 234,
        genre: "Fiction",
        description: "A controversial novel following teenage protagonist Holden Caulfield as he navigates complex issues of identity and belonging."
    },
    {
        id: 8,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 22.50,
        year: 1954,
        pages: 1178,
        genre: "Fantasy",
        description: "An epic high fantasy trilogy set in the world of Middle-earth, following the quest to destroy the One Ring."
    }
];

const booksContainer = document.getElementById('books-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const overlay = document.getElementById('overlay');
const bookDetails = document.getElementById('book-details');
const closeDetails = document.getElementById('close-details');

function displayBooks(booksToDisplay) {
    booksContainer.innerHTML = '';
    
    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-cover">
                <div class="book-cover-placeholder">📖</div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-price">$${book.price.toFixed(2)}</p>
                <button class="view-details" data-id="${book.id}">View Details</button>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });
    
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const bookId = parseInt(this.getAttribute('data-id'));
            showBookDetails(bookId);
        });
    });
}

function showBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    
    if (book) {
        document.getElementById('detail-title').textContent = book.title;
        document.getElementById('detail-author').textContent = `by ${book.author}`;
        document.getElementById('detail-price').textContent = `$${book.price.toFixed(2)}`;
        document.getElementById('detail-description').textContent = book.description;
        document.getElementById('detail-pages').textContent = book.pages;
        document.getElementById('detail-year').textContent = book.year;
        document.getElementById('detail-genre').textContent = book.genre;
        
        bookDetails.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeBookDetails() {
    bookDetails.style.display = 'none';
    overlay.style.display = 'none';
}

function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayBooks(books);
        return;
    }
    
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm)
    );
    
    displayBooks(filteredBooks);
}

searchBtn.addEventListener('click', searchBooks);
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchBooks();
    }
});

closeDetails.addEventListener('click', closeBookDetails);
overlay.addEventListener('click', closeBookDetails);

displayBooks(books);