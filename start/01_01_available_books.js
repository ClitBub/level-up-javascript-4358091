// Write your code here
class Book {
  constructor(title, author, ISBN, numCopies)
  {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() 
  {
    return this.getAvailability();
  }

  getAvailability()
  {
    if (this.numCopies == 0)
      return "out of stock";
    else if (this.numCopies <= 10)
      return "low stock";
    else
      return "in stock";
  }

  sell(numCopiesSold = 1)
  {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5)
  {
    this.numCopies += numCopiesStocked;
  }
}

