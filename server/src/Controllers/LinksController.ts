import { ILinksService } from "../Services/ILinksService";
import { LinksService } from "../Services/LinksService";
import { Request, Response } from "express";
import { Link } from "../Domain/Link";

export class LinksController {
  private linksService: ILinksService;
  constructor() {
    this.linksService = new LinksService();
  }

  async handleGetLinkByAlias(req: Request, res: Response) {
    try {
      let alias = req.params.alias;
      let link: Link = await this.linksService.getLinkByAlias(alias);
      res.status(200).json({
        alias: link.alias,
        url: link.url,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        message: err.message || "Unexpected Error",
      });
    }
  }

  async handleCreateLink(req: Request, res: Response) {
    try {
      let { alias, url }: { alias: string; url: string } = req.body;
      let link: Link = await this.linksService.createLink(alias, url);
      res.status(201).json({
        alias: link.alias,
        url: link.url,
      });
    } catch (err) {
      console.log(err.message || err);
      res.status(err.status || 500).json({
        message: err.message || "Unexpected Error",
      });
    }
  }
}
