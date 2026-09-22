import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Loops() {
  const navigate = useNavigate();

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
    <div className="loops-page">

      {/* NAVBAR */}
      <nav className="pookie-nav">

        <div className="brand">
          <h1>PookiePy 💗</h1>
          <p>Learn Python visually ·˚♡</p>
        </div>

        <div className="nav-links">

          <button onClick={() => navigate("/")}>
            🏠 Home
          </button>

          <button onClick={() => navigate("/variables")}>
            📄 Variables
          </button>

          <button className="active">
            🔄 Loops
          </button>

          <button onClick={() => navigate("/functions")}>
            &lt;/&gt; Functions
          </button>

          <button onClick={() => navigate("/recursion")}>
            🧠 Recursion
          </button>

        </div>

        <div className="keep-learning">
          💗
          <span>Keep<br />Learning ♡</span>
        </div>

      </nav>


      {/* HERO */}

      <section className="loops-hero">

        <div className="side-note left-note">
          ✨
          <span>
            Code<br />
            Learn<br />
            Grow<br />
            ♡
          </span>
        </div>

        <div>
          <h1>🌸 Loops Visualizer 🌸</h1>

          <p>
            See how a Python <strong>for loop</strong> executes step by step.
          </p>
        </div>

        <div className="side-note right-note">
          💭
          <span>
            Small<br />
            Steps<br />
            Big Progress<br />
            ♡
          </span>
        </div>

      </section>


      {/* CODE CARD */}

      <section className="code-card">

        <h2>
          &lt;/&gt; Python Code
        </h2>

        <div className="code-box">

          <div>
            <span className="line-number">1</span>
            <span>for i in range(5):</span>
          </div>

          <div>
            <span className="line-number">2</span>
            <span className="indent">print(i)</span>
          </div>

        </div>

      </section>


      {/* BUTTONS */}

      <div className="loop-buttons">

        <button
          className="start-button"
          onClick={startLoop}
        >
          ▶ Start Loop
        </button>

        <button
          className="next-button"
          onClick={nextStep}
          disabled={step === -1 || step === numbers.length - 1}
        >
          ➜ Next Step
        </button>

        <button
          className="reset-button"
          onClick={resetLoop}
        >
          ⟳ Reset
        </button>

      </div>


      {/* INFORMATION CARDS */}

      <section className="info-grid">

        {/* CURRENT STEP */}

        <div className="info-card">

          <h2>🧠 Current Step</h2>

          <div className="inner-card">

            {step === -1 ? (
              <p>
                Click <strong>Start Loop</strong> to begin.
              </p>
            ) : (
              <p>
                Loop iteration:
                <strong> {step + 1} / {numbers.length}</strong>
              </p>
            )}

          </div>

          {/* MEMORY */}

          <h2 className="memory-title">
            💾 Memory
          </h2>

          <div className="memory-box">

            {currentValue === null ? (
              <p>i has no value yet.</p>
            ) : (
              <>
                <span>i</span>
                <strong>→</strong>
                <span>{currentValue}</span>
              </>
            )}

          </div>

        </div>


        {/* OUTPUT */}

        <div className="info-card">

          <h2>📋 Output</h2>

          <div className="output-box">

            {output.length === 0 ? (
              <p>No output yet.</p>
            ) : (
              output.map((value, index) => (
                <div key={index}>
                  {value}
                </div>
              ))
            )}

          </div>

        </div>

      </section>


      {/* PROGRESS */}

      <section className="progress-section">

        <p>
          Progress:{" "}
          <strong>
            {step === -1 ? 0 : step + 1} / {numbers.length}
          </strong>
        </p>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width:
                step === -1
                  ? "0%"
                  : `${((step + 1) / numbers.length) * 100}%`,
            }}
          />

        </div>

      </section>


      {/* FOOTER MESSAGE */}

      <div className="learning-message">
        💗 "Practice loops today, stronger code tomorrow!"
      </div>

      <div className="happy-coding">
        🐱
        <span>
          Happy<br />
          Coding 💗
        </span>
      </div>

    </div>
  );
}

export default Loops;
