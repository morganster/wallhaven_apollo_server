import { DateTimeResolver } from "graphql-scalars";
import { WallpapersQuery } from "./wallpaper.resolver";
import { IResolvers } from "../generated/graphql";

export const resolvers: IResolvers = {
  DateTime: DateTimeResolver,
  Query: {
    wallpapers: WallpapersQuery,
  },
};
