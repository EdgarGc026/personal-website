const url = `api.json`;

function getData() {
  return fetch(url).then((response) => response.json());
}

export default getData;
