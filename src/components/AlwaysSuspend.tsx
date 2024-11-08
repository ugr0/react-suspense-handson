import { sleep } from "../utils/sleep";

export const AlwaysSuspend: React.VFC = () => {
  console.log("alwaysuspned is rendered")
  throw sleep(1000);
};
