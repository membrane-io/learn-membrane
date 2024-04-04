/**
 * ========================================================================================================================
 *
 * ███╗   ███╗ ███████╗ ███╗   ███╗ ██████╗  ██████╗   █████╗  ███╗   ██╗ ███████╗
 * ████╗ ████║ ██╔════╝ ████╗ ████║ ██╔══██╗ ██╔══██╗ ██╔══██╗ ████╗  ██║ ██╔════╝
 * ██╔████╔██║ █████╗   ██╔████╔██║ ██████╔╝ ██████╔╝ ███████║ ██╔██╗ ██║ █████╗
 * ██║╚██╔╝██║ ██╔══╝   ██║╚██╔╝██║ ██╔══██╗ ██╔══██╗ ██╔══██║ ██║╚██╗██║ ██╔══╝
 * ██║ ╚═╝ ██║ ███████╗ ██║ ╚═╝ ██║ ██████╔╝ ██║  ██║ ██║  ██║ ██║ ╚████║ ███████╗
 * ╚═╝     ╚═╝ ╚══════╝ ╚═╝     ╚═╝ ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚══════╝
 *
 * Welcome to Membrane!
 *
 * This hands-on tour will guide you through Membrane's core concepts and features.
 *
 * To get started, open the Membrane Explorer and Membrane Logs in VS Code by opening your command palette and typing:
 * 1. "Membrane: Focus on Membrane Explorer View"
 * 2. "Membrane Logs: Focus on Membrane Logs View"
 *
 * Ok, let's move onto step 1!
 * ========================================================================================================================
 */

/**
 * ========================================================================================================================
 * STEP 1 | Membrane persistence
 * ========================================================================================================================
 */

// Each Membrane program has its own dedicated storage provided by the `state` object.
// Import `state` in your program and use it to store any data specific to that program.
import { state } from "membrane";

// We'll use `state` here to store your name and a count of the updates you've made to this program.
state.name = "[add your name here]";
state.updates ??= 0;

// When you save this file, Membrane will instantly deploy and execute your program.
// Save your file and see your name and update count logged to the Membrane Logs console.
state.updates++;
console.log(`Hello, ${state.name}!`);
console.log(`Update count: ${state.updates}`);

// To learn more about persistence in Membrane, visit: https://www.membrane.io/durable-programs

/**
 * ========================================================================================================================
 * STEP 2 | Membrane actions
 * ========================================================================================================================
 */

// A Membrane program can export _actions_ that you invoke. This program exports a `run` action.
// Uncomment the `run` function below and invoke the action. To invoke an action, you can:
// 1. Click on the "Invoke ▶️" button directly above the function signature.
// 2. In the Membrane Explorer, click "getting-started" then click "Invoke" to the right of "run".
// 3. Use the Command+Enter keyboard shortcut.

// export async function run() {
//   console.log("Invoking `run` action...");
// }

// To learn more about actions in Membrane, visit: https://www.membrane.io/the-graph

/**
 * ========================================================================================================================
 * STEP 3 | Membrane timers
 * ========================================================================================================================
 */

// Instead of invoking actions manually, you can invoke them on a timer.
// Membrane supports three main types of timers:
// 1. Delays
// 2. Scheduled
// 3. Crons

// Let's set up the `run` action to be invoked on a timer.
// In the Membrane Explorer, click on "getting-started" then click the clock icon to the right of "Invoke".
// Select the type of timer you want (e.g. "Invoke after delay...") and when you want it to run (e.g. "10s").
// After clicking the green check to confirm, your timer will show up in the bottom right panel of the explorer.
// For crons, you can see upcoming scheduled invocations by hovering over the timer.
// You can delete any timer by right clicking it and selecting "Delete".

// To learn more about timers in Membrane, visit: https://www.membrane.io/cron-jobs-and-timers

/**
 * ========================================================================================================================
 * STEP 4 | Membrane `sms` and `email`
 * ========================================================================================================================
 */

// One thing you might want to do with a timer is email or text yourself programmatically.
// Membrane comes with several built-in utils that your programs can install, like `sms` and `email`.

// To add a dependency to your program, drag 'n drop the util from the Membrane Explorer:
// 1. Into the bottom right "CONFIG" panel
// 2. Directly into your code

// To start, try dragging `email` from the Membrane Explorer down to your bottom right panel.
// Your program's dependencies will show up in the bottom right panel under "DEPENDENCIES".
// To remove a dependency, you can right click it and select "Remove".

// Once you've added a dependency, you can access it by importing the `nodes` object. (Uncomment the next line).
// import { nodes } from "membrane";

// Now that we've added `email` to your program, let's set up an action to send you an email.
// Uncomment the `ping` function below and invoke it, or try setting up a timer to schedule the email.

// export async function ping() {
//   await nodes.email.send({
//     subject: "Getting started with Membrane",
//     body: `Hello, ${state.name}!`,
//   });

//   // Membrane's `sms` util works similarly to `email`.
//   // Try adding `sms` as a dependency to your program and uncommenting the line below.
//   // You'll first have to configure your phone number by clicking `sms` then `configure` in the Membrane Explorer.
//   await nodes.sms.send({ message: `Hello, ${state.name}!` });
// }

// Membrane `sms` can also handle your responses to texts!
// Try replying to the text from Membrane, and keep an eye on Membrane Logs to see your response printed to the console.

// To learn more about `sms` and `email` in Membrane, visit: https://www.membrane.io/example-sms-reminders

/**
 * ========================================================================================================================
 * STEP 5 | Membrane HTTP endpoints
 * ========================================================================================================================
 */

// Every Membrane program comes with its own HTTP endpoint.
// You can export an `endpoint` function to expose a REST API, serve HTML, handle webhooks, etc.
// Uncomment the `endpoint` function below that returns a simple HTML page.
// export async function endpoint(req) {
//   const headers = { "Content-Type": "text/html" };
//   const body = `<h1>Welcome to Membrane, ${state.name}!</h1>`;

//   return JSON.stringify({ headers, body });
// }

// As mentioned, Membrane instantly deploys your program on save, so your HTTP endpoint will be live immediately.
// To access your endpoint, right click "getting-started" in the Membrane Explorer and select "Open endpoint URL".
// Try editing the HTML, hit save, and refresh the page.
// You have a live website that you can edit and deploy instantly!

// To learn more about HTTP endpoints in Membrane, visit: https://www.membrane.io/http-endpoints

/**
 * ========================================================================================================================
 * STEP 6 | Membrane observability
 * ========================================================================================================================
 */

// Steps 1-5 illustrate a core feature across all of Membrane: everything gets recorded in Membrane Logs.
// Every program update, action, timer, endpoint request, etc. will be logged.

// For example, in step 5 when you open your endpoint URL in the browser, you'll see the request logged in Membrane Logs.
// Try clicking into that `endpoint` log to view more detail about the request.

// To learn more about observability in Membrane, visit: https://www.membrane.io/observability

/**
 * ========================================================================================================================
 * STEP 7 | Membrane API drivers
 * ========================================================================================================================
 */

// Similar to built-in utils like `sms` and `email`, Membrane has an ever-growing collection of API drivers.
// Drivers are Membrane programs that connect to APIs like GitHub, Google Docs, Slack, OpenAI, etc.

// The Membrane team maintains a set of open-source drivers and examples, which anyone can contribute to.
// To view all drivers and examples, click on "NEW" then "Program Registry" in the Membrane Explorer.
// Or, visit Membrane's drivers directory on GitHub: https://github.com/membrane-io/directory

// As an example, install the `github` driver and drag it into your program's dependencies.
// Create a personal access token on GitHub and configure it by clicking `github` -> `configure` in the Membrane Explorer.
// Uncomment the code below to store your GitHub username on `state` and fetch your profile location.

// state.ghUsername = "[add your username here]";
// export async function getGitHubProfile() {
//   const user = nodes.github.users.one({ name: state.ghUsername });
//   const location = await user.location;
//   console.log(location);
// }

// To learn more about drivers in Membrane, visit: https://www.membrane.io/open-integrations-model
