class Github {
  constructor() {
    this.client_id = "a4663834b17415635e72";
    this.client_secret = "8c49504f92183d2d60dfe5429bb3bd08d454e2ea";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
