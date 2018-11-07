import { PubSub } from "graphql-yoga";
import { merge } from "lodash";

import Auth from "./Auth";
import User from "./User";
import Tweet from "./Tweet";

const pubSub = new PubSub();

export const typeDefs = [Auth.typeDefs, User.typeDefs, Tweet.typeDefs].join(
  " "
);
export const resolvers = merge(
  {},
  Auth.resolvers,
  User.resolvers,
  Tweet.resolvers
);
export const context = req => ({
  ...req,
  model: {
    user: User.model,
    tweet: Tweet.model
  },
  pubSub
});
