let urlId=''
export var apiProgressBar= ''


export const addQuery = (queryObj, apiObj,id) => {
  urlId=id;
    if (!queryObj) {
      return;
    }
  
    Object.keys(queryObj).map(key => {
      if (apiObj.query.hasOwnProperty(key)) {
        apiObj.addQuery = { key, value: queryObj[key] };
      }
    });
  };


export const generateQuery = query => {
  console.log(urlId)
    let newUrl = Object.keys(query).reduce((acc, key, index) => {
      if (query[key] === "" || query[key] === null) {
        return acc;
      } else {
        return acc + `${index !== 0 ? "&" : !!urlId?urlId+'?':'?'}${key}=${query[key]}`;
      }
    }, "");
  
    return newUrl;
  };
  export const setapiProgressBar = per => {
    apiProgressBar=per
  console.log(apiProgressBar)
    };
  

 