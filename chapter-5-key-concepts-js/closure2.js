function init (type) {
  this.id =0;
  return (name) => {
    this.id = this.id + 1;
    return { id: this.id, type, name }
  }
}

const createUser = init('user');
const createAdmin = init('admin');
const ivan = createUser('ivan');
const moi = createAdmin('moises');

console.log(ivan, moi)

