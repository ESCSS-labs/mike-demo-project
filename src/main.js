import { ESTest, unSafeESTest } from "escss-estest";
import { isEven } from "mike-demo-is-even";

// globalThis.__ESCSS_ESTEST__.isESTestDisabled = true
globalThis.__ESCSS_ESTEST__.message = '[A poor soul] just entered dependency hell 🔥'


function isTen(input) {
  {
    ESTest(input, 'number').multiple(10)
  }
  return isEven(input)
}

isTen(11)

