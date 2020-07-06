import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: (_parent, _args, _context) => "Hello!",
  },
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {};
  },
});
const handler = apolloServer.createHandler({ path: "/api/hello" });

export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ["POST", "OPTIONS"],
});

export default cors(handler);
