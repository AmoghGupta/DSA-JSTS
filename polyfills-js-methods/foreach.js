Array.prototype.eachAlbum = function(callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i]);
    }
}

var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
];


logicAlbums.eachAlbum((word)=>{
    console.log(word);
});