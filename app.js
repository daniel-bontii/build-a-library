class Media {
    constructor(title){
      this._isCheckedOut = false;
      this._ratings = [];
      this._title = title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    get title(){
      return this.title;
    }
    set isCheckedOut(newStatus){
      this._isCheckedOut = newStatus;
    }
     //using for loop
     /*getAverageRating(){
      const numOfRatings = this._ratings.length;
      let sumOfRatings = 0;
      let avgRating;
      for(let i=0; i<numOfRatings; i++){
        sumOfRatings += this._ratings[i];
      }
      avgRating = sumOfRatings/numOfRatings;
      return avgRating.toFixed(1);
    }*/
  
    //using reducer
    getAverageRating(){
      let sumOfRatings = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const numOfRatings = this.ratings.length;
      let avgRating = sumOfRatings/numOfRatings;
      return avgRating.toFixed(1);
    }
    toggleCheckOutStatus(){
      this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(newRating){
      if(newRating >= 1 && newRating <=5){
       this.ratings.push(newRating); 
      }else{
        console.log('Only ratings between 1 and 5 are allowed');
      }
      
    }
  }
  class Book extends Media{
    constructor(title, author, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get title(){
      return this._title;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(title, director, runtime){
      super(title);
      this._director = director;
      this._runtime = runtime; 
    }
    get director(){
      return this._director;
    }
    get title(){
      return this._title;
    }
    get runtime(){
      return this._runtime;
    }
  }
  
  class CD extends Media{
    constructor(title, artist, songs){
      super(title);
      this._artist = artist;
      this._songs = [];
    }
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
    addSong(newSong){
      this._songs.push(newSong);
    }
    shuffle(){
      //using Fisher Yates Algorithm
      let toRandomize = [];
      for(let i=0; i<this._songs.length; i++){
        toRandomize.push(this._songs[i]);
      }
      const size = toRandomize.length - 1;
      for(let i=size; i>0; i--){
        const randomNum = Math.floor(Math.random()* (i+1));
        const temp = toRandomize[i];
        toRandomize[i] = toRandomize[randomNum];
        toRandomize[randomNum] = temp;
      }
      return toRandomize;
    }
  }
  
  class Catalog{
    constructor(itemType, title){
      this._itemType = itemType;
      this._title = title;
      this._mediaItems = [];
    }
    get mediaItems (){
      return this._mediaItems;
    }
    addItem(newItem, title){
      var item = {
        Type: newItem,
        title: title
      };
      this.mediaItems.push(item)
    }
  }
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(7);
  console.log(speed.getAverageRating());
  
  const marley = new CD('Bob Marley and the Wailers', 'Bob marley');
  marley.addSong('One love');
  marley.addSong('Buffalo soldier');
  marley.addSong('Rock my boat');
  marley.addSong('Kaya');
  console.log(marley.songs);
  //console.log(marley.shuffle());
  
  /*for(let i=0; i<4; i++){
    console.log(marley.shuffle());
  } */
  
  const newCatalog = new Catalog();
  newCatalog.addItem('book', 'Emotional Intelligence');
  newCatalog.addItem('book', 'Eloquent JavaScript');
  console.log(newCatalog.mediaItems);  