const fetchBill = () => {
  //assign the url to an api variable
  const api = "https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c";
  //kindly confirm this url above. I typed it out. there might be mistake

  //use browser's fetch function to make a request to api (the above created variable)
  fetch(api)
    .then(response => {
      //call the fetch method and return a json response
      return response.json();
    })
    .then(myJsonResponse => {
      //pass the response to the displayCartTotal() function
      displayCartTotal(myJsonResponse);
    })
    .catch(err => {
      //display any possible errors by catching them
      console.log(err);
    });
};
