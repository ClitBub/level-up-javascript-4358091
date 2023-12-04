// Write your code here
function Movie(Title, Director, Genre, Release_year, rating)
{
  this.Title = Title;
  this.Director = Director;
  this.Genre = Genre;
  this.Release_year = Release_year;
  this.rating = rating;
  
  this.tellAbout = function()
  {
    return this.Title + ", a " + this.Genre + " film directed by " + this.Director + " was released in " 
    + this.Release_year + ". It received a rating of " + this.rating + ".";
  }
}

movie1 = new Movie("Matrix", "Wachowski brothers", "Action", "1999", "98");

console.log(movie1.tellAbout());