import Fiber from "./fiber.js";

class WorkLoop {
  constructor(rootFiber) {
    this.rootFiber = rootFiber;
    this.isWorking = false;
    this.pendingUpdates = [];
  }

  start() {
    if (!this.isWorking) {
      this.isWorking = true;
      this.workLoop();
    }
  }

  workLoop() {
    let currentFiber = this.rootFiber;

    while (currentFiber) {
      this.renderFiber(currentFiber);

      if (Math.random() > 0.7) {
        console.log("stoping work...");
        setTimeout(() => {
          this.workLoop();
        }, 1000);
        return;
      }

      if (currentFiber.child) {
        currentFiber = currentFiber.child;
      } else {
        currentFiber = currentFiber.sibling;
      }
    }
    this.commit();
  }

  renderFiber(fiber) {
    console.log(`rendering ${fiber.type} with properties`, fiber.props);
    if (fiber.child) {
      console.log(`rendering child: ${fiber.child.type}`);
    }
  }

  commit() {
    console.log(`finishing DOM changes...`);
    document.getElementById("app").innerHTML = `<div>Rendered Component</div>`;
  }
}

export default WorkLoop;
