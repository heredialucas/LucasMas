import "./Tecnologias.scss";
import html from "../../assets/images/iconhtml.svg";
import css from "../../assets/images/iconcss.svg";
import js from "../../assets/images/iconjs.svg";
import git from "../../assets/images/icongit.svg";
import github1 from "../../assets/images/github1.svg";
import terminal from "../../assets/images/iconterminal.svg";
import vsc from "../../assets/images/iconvsc.svg";
import bootstrap from "../../assets/images/bootstrap.svg";
import mui from "../../assets/images/mui.svg";
import less from "../../assets/images/less.svg";
import sass from "../../assets/images/sass.svg";
import react from "../../assets/images/react.svg";
import nodejs from "../../assets/images/nodejs.svg";
import redux from "../../assets/images/redux.svg";
import wordpress from "../../assets/images/wordpress.svg";
import express from "../../assets/images/express.svg";
import sql from "../../assets/images/sql.svg";
import mysql from "../../assets/images/mysql.svg";
import mongodb from "../../assets/images/mongodb.svg";
import sequelize from "../../assets/images/sequelize.svg";

export default function Tecnologias() {
  const data = [
    {
      id: 1,
      name: "Html5",
      img: html,
    },
    {
      id: 2,
      name: "Css3",
      img: css,
    },
    {
      id: 3,
      name: "JavaScript",
      img: js,
    },
    {
      id: 4,
      name: "Git",
      img: git,
    },
    {
      id: 5,
      name: "Github",
      img: github1,
    },
    {
      id: 6,
      name: "Terminal",
      img: terminal,
    },
    {
      id: 7,
      name: "Visual Studio Code",
      img: vsc,
    },
    {
      id: 8,
      name: "Bootstrap",
      img: bootstrap,
    },
    {
      id: 9,
      name: "Material UI",
      img: mui,
    },
    {
      id: 10,
      name: "Less",
      img: less,
    },
    {
      id: 11,
      name: "Sass",
      img: sass,
    },
    {
      id: 12,
      name: "React",
      img: react,
    },
    {
      id: 13,
      name: "NodeJS",
      img: nodejs,
    },
    {
      id: 14,
      name: "Redux",
      img: redux,
    },
    {
      id: 15,
      name: "Wordpress",
      img: wordpress,
    },
    {
      id: 16,
      name: "Express",
      img: express,
    },
    {
      id: 17,
      name: "SQL",
      img: sql,
    },
    {
      id: 18,
      name: "MySQL",
      img: mysql,
    },
    {
      id: 19,
      name: "MongoDB",
      img: mongodb,
    },
    {
      id: 20,
      name: "Sequelize",
      img: sequelize,
    },
  ];
  return (
    <div className="tecnologias" id="tecnologias">
      <div className="container">
        {data.map((d) => {
          return (
            <div key={d.id} className="item">
              <img title={d.name} class="img" src={d.img} alt={d.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
