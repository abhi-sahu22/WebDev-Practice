// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!

// "https://swapi.dev/api/people/1"

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("IT LOADED!!!");
  console.log(this);
  // console.log(this.responseText); 
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data.name);
}

req.onerror = function () {
  console.log("ERROR!!!!");
  console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();