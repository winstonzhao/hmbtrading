import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import text from "./text.svg";
import "./App.css";
import WAVES from "vanta/dist/vanta.waves.min";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe1a,
          shininess: 24.0,
          waveHeight: 23.5,
          waveSpeed: 2.0,
          zoom: 0.65,
        })
      );
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        ref={myRef}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div className="waveBackground">
          <div className="logoContainer">
            <img style={{paddingBottom: "30px"}} src={logo}/>
            <img src={text}/>
          </div>
          <p
            style={{
              zIndex: "10000",
              fontSize: "2em",
              textAlign: "center",
            }}
          >
            We provide <b style={{ color: "#91d1ff" }}>liquidity</b> and{" "}
            <b style={{ color: "#91d1ff" }}>efficiency</b> in{" "}
            <b style={{ color: "#91d1ff" }}>digital asset</b> markets
          </p>
          <p
            style={{
              zIndex: "10000",
              fontSize: "1.5em",
              textAlign: "center",
            }}
          >
            Half Moon Bay trading is systematic trading firm, specializing in
            digital assets. Our mission is to provide liquidity and efficiency
            in digital asset markets. We are a team of experienced traders and
            engineers who are passionate about building the future of finance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
