import { HandlerContext } from "$fresh/server.ts";

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  let body = "Not found data";
  try {
    body = await Deno.readTextFile("./data.txt");
  } catch (error) {
    console.error(error);
  }
  return new Response(body);
};
