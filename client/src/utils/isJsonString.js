export const isJsonString = (data) => {
  try {
    JSON.parse(data)
  } catch (error) {
    return error
  }
  return true
}