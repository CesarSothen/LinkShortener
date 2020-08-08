import { Link } from "../Domain/Link";

export interface ILinksService {
  getLinkByAlias(alias: string): Promise<Link>;

  createLink(alias: string, url: string): Promise<Link>;
}
