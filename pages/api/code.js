import prisma from "../../lib/prisma";

export default async function codeHandler(req, res) {
  const body = req.body;

  if (!body.code) {
    return res.status(400).json({ data: "Code not found" });
  }

  const result = await prisma.User.findUnique({
    where: {
      code: body.code,
    },
  });

  if (!result) {
    return res.status(400).json({ data: "Code not found in database" });
  }

  res
    .status(200)
    .json({
      code: result.code,
      replied: result.replied,
      monthly: result.monthly,
      max_bid: result.max_bid,
    });
}
