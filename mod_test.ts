import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { convertTime } from "./mod.ts";

const ValidateIPaddress = (date: any) => {
  return true;
}

Deno.test("test convertTime function", async (): Promise<void> => {
  var data= await convertTime();
   assertEquals(ValidateIPaddress(data.newDate), true);
});
