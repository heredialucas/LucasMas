import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "../../data.js";
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio, bassicPortfolio } from "../../data";

export default function Portfolio() {
  const blank = "_blank";
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web ",
    },
    {
      id: "mobile",
      title: "Mobile ",
    },
    {
      id: "bassic",
      title: "Bassic ",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "bassic":
        setData(bassicPortfolio);
        break;
      default:
        setData(mobilePortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="containerAll">
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div key={d.title} className="item">
              <a href={`${d.link}`} target={blank}>
                <img src={d.img} alt="" />
                <h3> {d.title} </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
