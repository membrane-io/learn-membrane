// This is how you create a view for a type in your program's schema:
// 1. Create a views.tsx file
// 2. Export a function named exactly like your type (in this case "Root")
// 3. Use JSX with Membrane's custom elements (<col>, <row>, <text>, etc)

// Note: The Root type in a program's schema corresponds to the default exports in index.ts
// or any resolvers defined in the exported Root object.

// Root view for the learn-membrane tutorial program
// Shows program status, available actions, and ways to learn more
export function Root({ self }) {
  return (
    // Main container with full width/height and scrolling
    <col
      style={{ width: "100%", height: "100%", overflowY: "scroll", gap: 16 }}
    >
      {/* Header with auto-colored background */}
      <row
        style={{
          padding: 16,
          justifyContent: "start",
          gap: 16,
          background: "auto",
          borderRadius: 4,
        }}
      >
        <col style={{ justifyContent: "center", gap: 4 }}>
          <text style={{ fontSize: "x-large" }}>Learn Membrane</text>
          <text style={{ opacity: 0.5 }}>
            A hands-on tour through core concepts and features
          </text>
        </col>
      </row>

      <col style={{ padding: 8, gap: 16 }}>
        {self.name.then((name) =>
          name && name !== "[add your name here]" ? (
            <text>Welcome, {name}!</text>
          ) : (
            <row style={{ gap: 8, alignItems: "center", dividers: "none" }}>
              <text>Set your name:</text>
              <button action={self.configure}>Set Name</button>
            </row>
          ),
        )}
      </col>

      <col style={{ padding: 8, gap: 16 }}>
        {/* Status section - shows current program state */}
        <col style={{ gap: 8 }}>
          <text style={{ fontSize: "large" }}>Program Status</text>
          <text style={{ opacity: 0.7 }}>{self.status}</text>
        </col>

        {/* Actions section - buttons to try out program functionality */}
        <col style={{ gap: 8 }}>
          <text style={{ fontSize: "large" }}>Available Actions</text>
          <row style={{ gap: 8 }}>
            <button action={self.run}>Run</button>
            <button action={self.ping}>Send Email</button>
            <button action={self.getGitHubProfile}>Get GitHub Profile</button>
          </row>
        </col>

        {/* Learn More section - links to resources and feedback */}
        <col style={{ gap: 8 }}>
          <text>We'd love your feedback!</text>
          <text style={{ opacity: 0.7 }}>Reach us:</text>
          <col style={{ gap: 4 }}>
            <text format="markdown">
              1. [Tutorial feedback
              form](https://spare-346-sector-257-manner-983-bet.hook.membrane.io)
            </text>
            <text format="markdown">
              2. Email us at [contact@membrane.io](mailto:contact\@membrane.io)
            </text>
            <text format="markdown">
              3. [Join our Discord](https://discord.gg/sbRcqC7QxE)
            </text>
          </col>
          <text format="markdown">
            And to learn more, visit our
            [docs](https://docs.membrane.io/getting-started/intro/)!
          </text>
        </col>
      </col>
    </col>
  );
}
