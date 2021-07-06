const { httpGet } = require('./mock-http-interface');

// Executes a HTTP GET request on each of the URLs, transforms each of the HTTP responses according to the challenge instructions and returns the results.

// @param {string[]} urls The urls to be requested
// @return {Promise} A promise which resolves to a results array. 

// An example results array:

// [
//   { 'Arnie Quote': 'Some cool quote' },
//   { 'FAILURE: 'Your request has been terminated' },
// ]
const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  const httpgetPromises = urls.map(url => httpGet(url)
    .then(response => {
      const jsonResponse = JSON.parse(response.body)
      if (response.status === 200) {
        return { 'Arnie Quote': jsonResponse.message }
      } else {
        return { 'FAILURE':  jsonResponse.message }
      }
    })
    .catch(err => {
      return { 'FAILURE': err }
    }))
  // return (httpgetPromises)
  return Promise.all(httpgetPromises)
};

module.exports = {
  getArnieQuotes,
};
