class Github {
  constructor() {
    this.client_id = '************';
    this.client_secret = '*********************';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const uri = 'https://api.github.com';
    const profileResponse = await fetch(`${uri}/users/${user}?
      client_id=${this.client_id}&
      client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();

    const repoResponse = await fetch(`${uri}/users/${user}/repos?
      per_page=${this.repos_count}&
      sort=${this.repos_sort}&
      client_id=${this.client_id}&
      client_secret=${this.client_secret}`);
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }
}
