import { MongoClient } from "mongodb";

export const connectToDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://ismail:ismail@cluster0.yteve.mongodb.net/next-auth?retryWrites=true&w=majority"
  );

  return client;
};
