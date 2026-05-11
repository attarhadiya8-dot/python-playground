import { useState } from "react";

function Home() {
  const [showVariables, setShowVariables] = useState(false);

  const [code, setCode] = useState("");
  const [variables, setVariables] = useState({});

  const runCode = () => {
    const lines = code.split("\n");

    let vars = {};

    lines.forEach((line) => {
      if (line.includes("=")) {
        const parts = line.split("=");

        const key = parts[0].trim();
        const value = parts[1].trim();

        if (!isNaN(value)) {
          vars[key] = Number(value);
        } else if (vars[value] !== undefined) {
          vars[key] = vars[value];
        }
      }
    });

    setVariables(vars);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        background: "linear-gradient(to bottom right, #ffe0f7, #e5d5ff)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "30px",
          maxWidth: "900px",
          margin: "auto",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            color: "#ff4fa3",
            fontSize: "50px",
          }}
        >
          ✨ PookiePy ✨
        </h1>

        <p
          style={{
            color: "#6b4b7a",
            fontSize: "20px",
            marginBottom: "30px",
          }}
        >
          Learn Python visually 💻🌸
        </p>

        {/* Concept Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            onClick={() => setShowVariables(true)}
            style={{
              backgroundColor: "#ffd1eb",
              padding: "20px",
              borderRadius: "20px",
              fontWeight: "bold",
              color: "#ff4fa3",
              cursor: "pointer",
              transition: "0.3s",
              fontSize: "20px",
            }}
          >
            Variables 💖
          </div>

          <div
            style={{
              backgroundColor: "#ffe6f5",
              padding: "20px",
              borderRadius: "20px",
              color: "#ff4fa3",
            }}
          >
            Loops 🌸
          </div>

          <div
            style={{
              backgroundColor: "#ffe6f5",
              padding: "20px",
              borderRadius: "20px",
              color: "#ff4fa3",
            }}
          >
            Functions ✨
          </div>

          <div
            style={{
              backgroundColor: "#ffe6f5",
              padding: "20px",
              borderRadius: "20px",
              color: "#ff4fa3",
            }}
          >
            Recursion 🪄
          </div>
        </div>

        {/* Variables Section */}

        {showVariables && (
          <div>
            <h2 style={{ color: "#ff4fa3" }}>
              Variables Visualizer 💖
            </h2>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Write Python code..."
              rows="8"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "15px",
                border: "2px solid #ffb6d9",
                marginTop: "20px",
                fontSize: "16px",
              }}
            />

            <br />

            <button
              onClick={runCode}
              style={{
                marginTop: "20px",
                backgroundColor: "#ff4fa3",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "15px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Run Code ✨
            </button>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {Object.entries(variables).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    backgroundColor: "#ffd1eb",
                    padding: "20px",
                    borderRadius: "20px",
                    minWidth: "120px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 style={{ color: "#ff4fa3" }}>{key}</h3>

                  <p style={{ fontSize: "22px" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;