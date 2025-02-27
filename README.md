# React Fiber Demo

Reconciliation is the process of altering the style and behavior of the user interface in a hosted environment, such as a browser in the case of React, or on a mobile device in the case of React Native.

Before React 16, we used the concept of a stack reconciler, which was simply a stack (data structure) that performed reconciliation synchronously.

With React 16, the Fiber reconciler was introduced.

## :small_orange_diamond: Problem with the Stack Reconciler
- Being a stack (LIFO - Last In, First Out), higher-priority actions would enter the queue first. However, for a higher-priority action to be executed, all actions above it in the stack had to be completed first, which could cause janks (perceptible delays in the UI).
  
## :small_orange_diamond: What would be advantageous compared to the stack reconciler?
A sense of priority in renderings, allowing execution to be interrupted and resumed later.
Assigning screen changes only when everything is ready.

## :small_orange_diamond: Enter the Fiber Reconciler
The Fiber reconciler updates the user interface in two phases:

1) Render phase
2) Commit phase
In the render phase <br>

updates are nearly finalized. After this step, the commit phase begins, where the changes are effectively applied to the browser. This whole process happens off-screen, meaning in memory, without affecting the user’s immediate view.To do this, the Fiber reconciler needs two trees to manage the state and updates of the interface.

## :small_orange_diamond: What is the work loop?
The work loop is a strategy that allows React to reconcile components and render the interface efficiently by breaking tasks into smaller chunks, called fibers. These fibers are units of work that can be interrupted and resumed as needed, allowing React to be more responsive and handle the priority of different tasks (such as animations, user interactions, etc.).

## :small_orange_diamond: How does the work loop work in Fiber?
1) Creating Fibers:
- During the render process, React creates fibers, which are objects representing each "unit of work" associated with a component. Each fiber contains information about the component, such as its state, properties, and links to its children and parents.
- These fibers are organized into a tree that represents the component structure of the application.
  
2) Render Phase:
- In the render phase, React traverses the fiber tree incrementally. It begins building the component tree and decides whether or not to update the component based on changes in state or properties.
- During this process, the work loop can be interrupted at various points, allowing other tasks (such as animations or user events) to be processed.
  
3) Interrupting Work:
- The work loop is designed to be interruptible at any time. This is done to ensure React can prioritize more urgent tasks, such as user interaction.
- React uses a prioritization mechanism to ensure that higher-priority tasks (such as animations or click events) are processed before lower-priority tasks.
  
4) Resuming Work:
- After an interruption, the work can be resumed from where it left off, ensuring that the render process doesn't block the main thread and that the interface remains responsive.
- React decides when and how to resume work based on its priority schedule and the amount of work left.
  
5) Commit Phase:
- Once React finishes rendering the components in the fiber tree, it enters the commit phase, where the changes are applied to the DOM or the device interface (in the case of React Native).
- This phase is synchronous and cannot be interrupted, as changes are effectively applied to the screen.
  
## :small_orange_diamond: Prioritization in the work loop
The work loop is also responsible for prioritizing different types of tasks. React can classify and schedule tasks with different levels of urgency. For example:

- High priority: Tasks involving user interaction (such as clicks, touches, animations) should be performed first.
- Low priority: Tasks involving state updates that don’t immediately affect the UI can be deferred until the thread is free.
  
## :small_orange_diamond: Example with the work loop:
1) React begins the render work and creates fibers for the components.
2) It traverses the fibers, but may be interrupted at any point, allowing interaction events (such as clicks or animations) to be processed.
3) If work is interrupted, React saves the current state of the work and resumes processing the fibers when the thread is free.
4) After rendering, React enters the commit phase and applies the changes to the DOM or the device.

## :small_orange_diamond: Benefits of the work loop:
- <strong>Responsiveness</strong>: By breaking the work into smaller units and allowing it to be interrupted and resumed, React ensures that the UI remains responsive, even during complex renderings.
- <strong>Task Prioritization</strong>: React can prioritize more urgent tasks (such as user interactions) and defer lower-priority tasks (such as non-urgent updates).
- <strong>Asynchronous Execution</strong>: The work loop allows React to perform renders asynchronously, without blocking the main thread and without causing perceptible delays in the UI.

![image](https://github.com/user-attachments/assets/09fcb5fd-b069-4154-8382-7362ea434c2e)

