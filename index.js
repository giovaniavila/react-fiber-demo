import Fiber from "./fiber.js";
import WorkLoop from "./workLoop.js";

const rootFiber = new Fiber("div", { id: "root" });
const childFiber = new Fiber("span", { text: "Hello" });
rootFiber.child = childFiber;

const workLoop = new WorkLoop(rootFiber);
workLoop.start();
