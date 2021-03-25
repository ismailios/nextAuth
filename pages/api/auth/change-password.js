import { getSession } from "next-auth/dist/client";

export const handler = async (req, res) => {
  if (req.methods !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({
      message: "Not Authenticate !!!",
    });
    return;
  }
};
