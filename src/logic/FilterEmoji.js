import emoji_list from './emoji'


function FilterEmoji(search) {
  console.log(search)
  var result = emoji_list.filter(({name}) => name.includes(search)).slice(0, 20)
  console.log(result)
  return result
}

export default FilterEmoji;
