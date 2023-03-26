import prisma from "../../lib/prisma";

export default async function submitHandler(req, res) {
  const body = req.body;

  const result = await prisma.User.update({
    where: {
      code: body.code,
    },
    data: {
      replied: true,
      bid: parseInt(body.bid),
    },
  });

  if (!result) {
    return res.status(400).json({ data: "Code not found in database" });
  }

  res.json(result);
}
