const songs = [ "Juice", "rest calm"];
function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
     console.log(getSongAt(i));
  }
}
function getSongAt(index: number) {
  return `${songs[index]}`;
}

runOnSongs(getSongAt)
console.group('tuples')

let tuple: [string, number];
tuple = ["", 1];
const other = ["",2];
tuple = other;
console.log(tuple);
