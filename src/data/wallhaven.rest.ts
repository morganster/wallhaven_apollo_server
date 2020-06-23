import { RESTDataSource } from "apollo-datasource-rest";
import { Wallpapers } from "../generated/graphql";

export class WallhavenApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://wallhaven.cc/api/v1/";
  }

  async searchWallpaper(
    searchTerm?: string,
    page?: number
  ): Promise<Wallpapers> {
    const data = await this.get("search", {
      q: searchTerm,
      page,
      ratios: ["10x16", "9x16"],
    });

    return {
      list: data.data,
      count: data.meta.total,
      current_page: data.meta.current_page,
      per_page: data.meta.per_page,
      total_pages: data.meta.total_pages,
    };
  }
}
