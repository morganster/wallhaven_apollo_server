import { QueryResolvers, Wallpaper } from "../generated/graphql";
export const WallpapersQuery: QueryResolvers["wallpapers"] = async (
  _,
  { searchTerm, page },
  { dataSources }
) => {
  const data = dataSources.wallHavenApi.searchWallpaper(searchTerm, page);

  return data;
};
