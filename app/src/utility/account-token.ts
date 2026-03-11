export function retrieveToken() {
  return localStorage.getItem('pams-token');
}

export function storeToken(token: string) {
  localStorage.setItem('pams-token', token);
}
