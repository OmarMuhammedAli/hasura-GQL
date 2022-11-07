const { ApolloServer, gql } = require("apollo-server-cloud-functions");
const admin = require("firebase-admin");

const typeDefs = gql`
  type Query {
    firebaseUserProfile(id: String): UserProfile
  }

  type UserProfile {
    id: String
    email: String
    displayName: String
  }
`;
const resolvers = {
  Query: {
    firebaseUserProfile: async (parent, { id }, context) => {
      if (!id) return null;
      console.log(id);
      const { uid, email, displayName } = await admin.auth().getUser(id);
      return {
        id: uid,
        email,
        displayName,
      };
    },
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});
