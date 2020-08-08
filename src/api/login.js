import axios from 'axios'

const getCode = async () => {
  const result = ''
  try {
    const result = await axios.get('/getCaptcha')
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return result
}

const forget = async (option) => {
  const result = ''
  try {
    const result = await axios.post('/forget', {
      ...option
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    console.log(error)
  }
  return result
}

export { getCode, forget }
