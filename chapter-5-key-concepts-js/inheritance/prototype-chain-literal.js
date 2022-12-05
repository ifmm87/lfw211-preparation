'use strict'
const cheff = {
  type: 'Basic food',
  cook: function (meal) {
    console.log('cooking', meal, this);
  }
};
const ivan = {
  type: 'first',
  name: 'ivan',
  age: '35',
  profession: 'Developer',

};

Object.setPrototypeOf(ivan, cheff)
cheff.cortar = () => {
  console.log('cortando alguna cosa', this)
}
ivan.cook('sajta');
ivan.cortar()
console.log(ivan)

module.exports = { ivan, cheff }

