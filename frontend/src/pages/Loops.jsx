import { useState } from "react";

function Loops() {
  const numbers = [0, 1, 2, 3, 4];

  const [step, setStep] = useState(-1);

  const startLoop = () => {
    setStep(0);
  };

  const nextStep = () => {
    if (step < numbers.length - 1) {
      setStep(step + 1);
    }
  };

  const resetLoop = () => {
    setStep(-1);
  };

  const currentValue = step >= 0 ? numbers[step] : null;
  const output = step >= 0 ? numbers.slice(0, step + 1) : [];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#fff7fb",
        color: "#3d3040",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#d65a9e" }}>
          🌸 Loops Visualizer
        </h1>

        <p style={{ textAlign: "center", color: "#777" }}>
          See how a Python <b>for loop</b> executes step by step.
        </p>

        {/* Python Code */}
        <div
          style={{
            background: "#282238",
            color: "#ffffff",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "30px",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          <div>for i in range(5):</div>
          <div style={{ paddingLeft: "30px" }}>
            print(i)
          </div>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "25px",
            flexWrap: "wrap",
          }}
        >
          <button onClick={startLoop}>▶ Start Loop</button>

          <button
            onClick={nextStep}
            disabled={step === -1 || step === numbers.length - 1}
          >
            ➡ Next Step
          </button>

          <button onClick={resetLoop}>🔄 Reset</button>
        </div>

        {/* Current Step */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "25px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>🧠 Current Step</h2>

          {step === -1 ? (
            <p>Click <b>Start Loop</b> to begin.</p>
          ) : (
            <p>
              Loop iteration: <b>{step + 1}</b> / {numbers.length}
            </p>
          )}
        </div>

        {/* Memory Box */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>💾 Memory Box</h2>

          {currentValue === null ? (
            <p>i has no value yet.</p>
          ) : (
            <div
              style={{
                background: "#ffe5f2",
                padding: "15px",
                borderRadius: "10px",
                fontSize: "20px",
              }}
            >
              <b>i</b> → {currentValue}
            </div>
          )}
        </div>

        {/* Output */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "15px",
            marginTop: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <h2>📤 Output</h2>

          {output.length === 0 ? (
            <p>No output yet.</p>
          ) : (
            <div
              style={{
                background: "#f4f4f4",
                padding: "15px",
                borderRadius: "10px",
                fontFamily: "monospace",
                fontSize: "18px",
              }}
            >
              {output.map((value, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
          )}
        </div>

        {/* Progress */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <p>
            Progress: {step === -1 ? 0 : step + 1} / {numbers.length}
          </p>

          <div
            style={{
              height: "12px",
              background: "#eadde5",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${((step + 1) / numbers.length) * 100}%`,
                height: "100%",
                background: "#d65a9e",
                transition: "width 0.3s",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loops;
