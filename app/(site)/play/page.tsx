import GameCanvas from "@/components/GameCanvas";

export default function PlayPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(180deg, rgba(20,20,24,1) 0%, rgba(8,8,10,1) 100%)",
        color: "white",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
      }}
    >
      <div style={{ width: "min(92vw, 960px)" }}>
        <h1 style={{ marginBottom: 12 }}>Word Rain — mini démo</h1>
        <GameCanvas />
      </div>
    </main>
  );
}
