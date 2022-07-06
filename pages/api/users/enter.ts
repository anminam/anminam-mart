import client from "@libs/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  console.log(user);

  // if (email) {
  //   user = await client.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });

  //   if (user) {
  //     console.log("이미있음", user);
  //   }

  //   if (!user) {
  //     console.log("유저를 찾지못했다. 유저 만든다");
  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         email,
  //       },
  //     });

  //     console.log(user);
  //   }
  // } else if (phone) {
  //   user = await client.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });

  //   if (user) {
  //     console.log("이미있음", user);
  //   } else {
  //     console.log("유저를 찾지못했다. 유저 만든다");

  //     user = await client.user.create({
  //       data: {
  //         name: "Anonymous",
  //         phone: +phone,
  //       },
  //     });
  //     console.log("만듬", user);
  //   }
  // }
  return res.status(200).end();
}

export default withHandler("POST", handler);
