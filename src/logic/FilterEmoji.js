import emoji_list from './emoji'


function FilterEmoji(search) {
  if (search != null && search) {
    return emoji_list.filter(({name}) => name.includes(search)).slice(0, 20)
  } else {
    return emoji_list.slice(0, 20)
  }
}

export default FilterEmoji;
