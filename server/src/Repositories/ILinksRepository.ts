import { Link } from "../Domain/Link";

export interface ILinksRepository {
  getByAlias(alias: string): Promise<Link>;

  create(link: Link): Promise<Link>;
}
