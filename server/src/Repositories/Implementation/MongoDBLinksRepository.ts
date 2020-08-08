import { ILinksRepository } from "../ILinksRepository";
import { Link } from "../../Domain/Link";
import { LinkModel } from "./MongoDBLinkModel";
import mongoose, { Connection, Model } from "mongoose";
import { AppError } from "../../Domain/Error";
require("dotenv").config();

export class MongoDBLinksRepository implements ILinksRepository {
  private linkDb: Model<any>;

  constructor() {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    let connection = mongoose.connection;

    connection.once("open", async () => {
      console.log("Connected to database");
    });

    connection.on("error", () => {
      console.log("Error connecting to database");
    });

    this.linkDb = LinkModel;
  }

  async getByAlias(alias: string): Promise<Link> {
    let link = await this.linkDb.findOne({ alias });
    if (!link) return null;
    return new Link(link.url, link.alias);
  }

  async create(link: Link): Promise<Link> {
    let alreadyExists = await this.linkDb.findOne({ alias: link.alias });
    if (alreadyExists)
      throw new AppError(`The alias '${link.alias}' is already taken.`, 400);
    let dbLink = await this.linkDb.create({
      alias: link.alias,
      url: link.url,
    });

    let createdLink = new Link(dbLink.url, dbLink.alias);
    return createdLink;
  }
}
