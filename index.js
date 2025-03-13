const farmAnimals = 'cow horse sheep pig chicken';
  const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

  const [bessie, ,dolly, babe, little] = farmAnimals.split(' ');

  const [blackAndWhite, ,black, pink, ,] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const [red, orange, yellow, green, blue, indigo, violet] = colors;
  const [r,o,y,g,b, ,v] = colors;
  const [, , , , , indg] =colors
  

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const {muppetName, color, song, job, partner} = muppet;
console.log(color)

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {song2, song4} = nestedMuppet.album.theMuppetMovie;
console.log(song2);
const {nestedJob, nestedPartner} = nestedMuppet;
console.log(nestedPartner)


// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner