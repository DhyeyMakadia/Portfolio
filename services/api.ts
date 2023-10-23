import ky from "ky";

export const publicClient = ky.extend({
  prefixUrl: process.env.NEXT_PUBLIC_API_KEY,
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set("access-token", String(process.env.NEXT_PUBLIC_ACCESS_TOKEN));
      },
    ],
  },
});
