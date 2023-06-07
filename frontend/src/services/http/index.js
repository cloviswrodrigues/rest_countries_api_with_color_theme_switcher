class HttpClient {
  async get(url) {
    const response = await fetch(url);
    const json = await response.json();
    return { response, json };
  }
}

export default new HttpClient();
