// Slice 
const address = 'Bangladesh';
const part = address.slice(0,6);
console.log(part);


// Split 
const sentence = 'Hello iam Alok barman';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendList = 'Rohim, Jahim, Kahim, Fahim'
const friend = friendList.split(',')
console.log(friend);

const localFriend = [ 'Rohim', ' Jahim', ' Kahim', ' Fahim' ];
console.log(localFriend);
const friendAdd = localFriend.join('|');
console.log(friendAdd);
console.log(localFriend.join());
console.log(localFriend.join('-'));
