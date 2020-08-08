export class Link {
  public alias: string;
  public url: string;

  constructor(url: string, alias: string) {
    const lowerCaseAlias = alias.toLowerCase();

    this.url = url;
    this.alias = lowerCaseAlias;
  }
}
