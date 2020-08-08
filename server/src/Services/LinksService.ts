import { ILinksService } from "./ILinksService";
import { Link } from "../Domain/Link";
import { ILinksRepository } from "../Repositories/ILinksRepository";
import { nanoid } from "nanoid";
import validUrl from "valid-url";
import { MongoDBLinksRepository } from "../Repositories/Implementation/MongoDBLinksRepository";
import { AppError } from "../Domain/Error";

export class LinksService implements ILinksService {
  private linksRepo: ILinksRepository;

  constructor() {
    this.linksRepo = new MongoDBLinksRepository();
  }

  async getLinkByAlias(alias: string): Promise<Link> {
    let link: Link = await this.linksRepo.getByAlias(alias);
    if (!link) {
      let err = new AppError(
        `The link for the alias '${alias}' was not found`,
        404
      );
      throw err;
    }
    return link;
  }

  async createLink(alias: string, url: string): Promise<Link> {
    let link: Link;
    if (!validUrl.isUri(url))
      throw new AppError(`The url '${url}' is not valid`, 400);
    alias ? (link = new Link(url, alias)) : (link = new Link(url, nanoid(5)));

    let createdLink: Link = await this.linksRepo.create(link);
    return createdLink;
  }
}
