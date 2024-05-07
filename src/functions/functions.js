import data from '../data/data.json'
import { useWordStore } from '@/stores/words'

export function getCategories() {
  const categories = []
  for (let item of Object.keys(data.categories)) {
    categories.push(item)
  }
  return categories
}

export function init() {
  useWordStore.data = data.categories
}

//return a not selected word
export function getWord(category) {
  const randomIndex = getRandomIndex(category) - 1
  useWordStore.data[category][randomIndex].selected = true

  console.log(useWordStore.data)
  console.log(randomIndex)
  return useWordStore.data[category][randomIndex].name
}

//get a not selected random word index
function getRandomIndex(category) {
  const randomIndex = Math.ceil(Math.random() * 30)
  //console.log(randomIndex)
  if (useWordStore.data[category][randomIndex - 1].selected == true) {
    getRandomIndex(category)
  } else {
    return randomIndex
  }
}
