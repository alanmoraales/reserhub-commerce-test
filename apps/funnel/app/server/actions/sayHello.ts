"use server";

import Client, { Local } from "@repo/commerce-api-client";

const sayHello = async () => {
  const client = new Client(Local);
  const response = await client.hello.get("John from server");
  console.log(response);
};

export default sayHello;
