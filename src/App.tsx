import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import text from "./text.svg";
import "./App.css";
import WAVES from "vanta/dist/vanta.waves.min";
import { AxisOptions, Chart } from "react-charts";

type DailyStars = {
  date: Date;
  stars: number;
};

type Series = {
  label: string;
  data: DailyStars[];
};

const data: Series[] = [
  {
    label: "Cumulative Traded Volume",
    data: [
      {
        date: new Date("2023-07-01"),
        stars: 105000000,
      },
      {
        date: new Date("2023-08-01"),
        stars: 506000000,
      },
      {
        date: new Date("2023-09-01"),
        stars: 1116000000,
      },
      {
        date: new Date("2023-10-01"),
        stars: 1616000000,
      },
      {
        date: new Date("2023-11-01"),
        stars: 2283000000,
      },
      {
        date: new Date("2023-12-01"),
        stars: 2392000000,
      },
      {
        date: new Date("2024-01-01"),
        stars: 2792000000,
      },
      {
        date: new Date("2024-02-01"),
        stars: 3292000000,
      },
      {
        date: new Date("2024-03-01"),
        stars: 3592000000,
      },
      {
        date: new Date("2024-04-01"),
        stars: 4092000000,
      },
      {
        date: new Date("2024-05-01"),
        stars: 7092000000,
      },
      {
        date: new Date("2024-06-01"),
        stars: 10092000000,
      },
      {
        date: new Date("2024-07-01"),
        stars: 13092000000,
      },
    ],
  },
];

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

  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.stars,
        elementType: "area",
        formatters: {
          scale: (datum) => {
            if (!datum)
              return '$0';
            if (datum >= 1000000000) {
              return `$${(datum / 1000000000).toFixed(1)}B`;
            } else if (datum >= 1000000) {
              return `$${(datum / 1000000).toFixed(1)}M`;
            } else if (datum >= 1000) {
              return `$${(datum / 1000).toFixed(1)}K`;
            } else {
              return datum.toString();
            }
          }
        }
      },
    ],
    []
  );

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
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            width: "1500px",
            height: "100%",
          }}
        >
          <div>
            <img
              style={{
                width: "400px",
                paddingBottom: "30px",
              }}
              src={logo}
            ></img>
            <img src={text}></img>
          </div>
          <p
            style={{
              zIndex: "10000",
              fontSize: "3em",
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
      {/* <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#1d3a69",
          padding: '100px 50px',
          color: "white",
        }}
      >
        
        <div style={{ 'height': '100%', 'width': '1500px'}}>
        <h4 style={{fontSize: "1em", background: 'white', width: '100%', color: "#1d3a69", paddingLeft: '30px'
        }}>CUMULATIVE TRADED VOLUME</h4>
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              dark:true
            }}
          />
        </div>
        <p  style={{
              zIndex: "10000",
              fontSize: "1.25em",
              transform: 'translate(0, -3rem)'
            }}>
          We <b>act fast</b>, grow <b>quickly</b> and <b>scale</b> to meet your needs.
        </p>
      </div>
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#1d3a69",
          padding: '100px 50px',
          paddingBottom: '150px',
          color: "white",
        }}
      >
        
        <div style={{ 'height': '100%', 'width': '1500px'}}>
        <h4 style={{fontSize: "1em", background: 'white', width: '100%', color: "#1d3a69", paddingLeft: '30px'
        }}>PARTNERS</h4>
        </div>
        <p  style={{
              zIndex: "10000",
              fontSize: "1.25em",
            }}>
          sdsda
        </p>
      </div> */}
    </div>
  );
}

export default App;
