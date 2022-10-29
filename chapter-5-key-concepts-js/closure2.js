function init (type) {
  var id =0;
  return (name) => {
    id += 1;
    return { id, type, name }
  }
}

const createUser = init('user');
const createAdmin = init('admin');
const ivan = createUser('ivan');
const moi = createAdmin('moises');

console.log(ivan, moi)

