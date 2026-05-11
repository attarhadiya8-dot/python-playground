function Variables() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #ffe0f7, #e5d5ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "25px",
          width: "500px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#ff4fa3",
            marginBottom: "15px",
          }}
        >
          Variables 💖
        </h1>

        <p style={{ color: "#6b4b7a" }}>
          Learn how Python stores values in memory ✨
        </p>
      </div>
    </div>
  );
}

export default Variables;