// Book class
class Book {
  constructor(id, title, author, totalCopies) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.totalCopies = totalCopies;
    this.availableCopies = totalCopies;
  }

  isAvailable() {
    return this.availableCopies > 0;
  }
}

// Reader class
class Reader {
  constructor(id, name, borrowLimit) {
    this.id = id;
    this.name = name;
    this.borrowLimit = borrowLimit;
    this.borrowedBookIds = [];
  }

  canBorrow() {
    return this.borrowedBookIds.length < this.borrowLimit;
  }
}

// Loan class
class Loan {
  constructor(id, bookId, readerId, loanDate) {
    this.id = id;
    this.bookId = bookId;
    this.readerId = readerId;
    this.loanDate = loanDate;
    this.returnDate = null;
    this.status = "ACTIVE";
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
    this.readers = [];
    this.loans = [];
    this.loanCounter = 1;
  }

  addBook(book) {
    this.books.push(book);
  }

  registerReader(reader) {
    this.readers.push(reader);
  }

  borrowBook(readerId, bookId, date) {
    const book = this.books.find(b => b.id === bookId);
    const reader = this.readers.find(r => r.id === readerId);

    if (!book || !reader) {
      return `BORROW FAILED: Invalid book or reader`;
    }

    if (!book.isAvailable()) {
      return `BORROW FAILED: ${reader.name} cannot borrow "${book.title}" (no copies available)`;
    }

    if (!reader.canBorrow()) {
      return `BORROW FAILED: ${reader.name} reached borrow limit`;
    }

    book.availableCopies--;
    reader.borrowedBookIds.push(bookId);

    const loan = new Loan(this.loanCounter++, bookId, readerId, date);
    this.loans.push(loan);

    return `BORROW OK: ${reader.name} borrowed "${book.title}"`;
  }

  returnBook(loanId, date) {
    const loan = this.loans.find(l => l.id === loanId && l.status === "ACTIVE");
    if (!loan) return;

    const book = this.books.find(b => b.id === loan.bookId);
    const reader = this.readers.find(r => r.id === loan.readerId);

    loan.status = "RETURNED";
    loan.returnDate = date;

    book.availableCopies++;
    reader.borrowedBookIds.pop();

    return `RETURN OK: "${book.title}" returned by ${reader.name}`;
  }

  getActiveLoans() {
    return this.loans.filter(l => l.status === "ACTIVE");
  }

  printChristmasReport() {
    let report = `\nCHRISTMAS LIBRARY REPORT\n`;

    this.books.forEach(book => {
      report += `${book.title}: ${book.availableCopies} / ${book.totalCopies} available\n`;
    });

    report += `\nACTIVE LOANS\n`;
    this.getActiveLoans().forEach(loan => {
      const reader = this.readers.find(r => r.id === loan.readerId);
      const book = this.books.find(b => b.id === loan.bookId);
      report += `${reader.name} → ${book.title}\n`;
    });

    return report;
  }
}

// UI logic
const output = document.getElementById("output");
const button = document.getElementById("runBtn");

button.addEventListener("click", () => {
  const library = new Library();

  library.addBook(new Book(1, "Clean Code", "Robert C. Martin", 2));
  library.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1));
  library.addBook(new Book(3, "Refactoring", "Martin Fowler", 1));

  library.registerReader(new Reader(1, "Alice", 2));
  library.registerReader(new Reader(2, "Bob", 1));

  let log = "";
  log += library.borrowBook(1, 1, "2024-12-01") + "\n";
  log += library.borrowBook(1, 1, "2024-12-01") + "\n";
  log += library.borrowBook(2, 1, "2024-12-01") + "\n";
  log += library.returnBook(1, "2024-12-05") + "\n";
  log += library.printChristmasReport();

  output.textContent = log;
});
