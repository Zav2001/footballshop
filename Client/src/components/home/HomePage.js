import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PowerCardList from "../common/Power/PowerCardList";
import Auth from "../../utils/auth";
import Slider from "./carousel";
import Typography from "@mui/material/Typography";

const HomePage = ({ products }) => {
  const isAdmin = Auth.isUserAdmin();
  const isAuthenticated = Auth.isUserAuthenticated();

  let headingText, secondLinkName, secondLinkPath;
  if (isAdmin || isAuthenticated) {
    headingText = `, ${Auth.getUsername()}`;
    secondLinkName = isAdmin ? "View orders" : "View your orders";
    secondLinkPath = isAdmin ? "/admin/orders" : "/orders";
  } else {
    headingText = "";
    secondLinkName = "Register";
    secondLinkPath = "/register";
  }

  const startIndex = 0;
  const pageSize = 6;
  const powerCards = products
    .sort((a, b) => b.likes.length - a.likes.length)
    .slice(startIndex, pageSize);

  return (
    <div className="container">
      <section className="jumbotron">
        <Typography
          sx={{
            textDecoration: "underline",
            fontFamily: "galano",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          ԱՇԽԱՐՀԻ լավագույն առցանց ֆուտբոլային խաղակոշիկների խանութը -
          FOOTBALLSHOP
        </Typography>
        <br />
        <Typography
          sx={{ fontFamily: "galano", fontWeight: "bold" }}
          variant="h5"
        >
          Բարի գալուստ FOOTBALLSHOP
        </Typography>
        <br />
        <Typography>
          Աշխարհի առաջատար ֆուտբոլային առցանց խանութը, որտեղ կիրքը հանդիպում է
          կատարմանը: Բացահայտեք բարձրորակ ֆուտբոլային խաղակոշիկների աշխարհը։
        </Typography>
        <br />
        <Typography
          sx={{ fontFamily: "galano", fontWeight: "bold" }}
          variant="h6"
        >
          Ամենաբարձր վարկանիշ ունեցող ֆուտբոլային խաղակոշիկներն ԱՇԽԱՐՀՈՒՄ
        </Typography>
        <br />
        <Typography>
          Բացահայտեք մեր ֆուտբոլային խաղակոշիկների լայն տեսականին լավագույն
          ապրանքանիշերից, ինչպիսիք են Nike-ը, Adidas-ը և Puma-ն: Նորագույն
          տեխնոլոգիաներով նախագծված մեր խաղակոշիկները կօգնեն ձեզ գերիշխել
          խաղադաշտում: Գնեք հիմա:
        </Typography>
        <br />
        <Typography
          sx={{ fontFamily: "galano", fontWeight: "bold" }}
          variant="h6"
        >
          Ֆուտբոլային հանդերձանք յուրաքանչյուր խաղացողի համար
        </Typography>
        <br />
        <Typography>
          Անկախ նրանից, թե դուք փորձառու պրոֆեսիոնալ եք եք, թե կրքոտ էնտուզիաստ,
          FOOTBALLSHOP-ը կատարյալ հարմարեցված է ձեզ համար: Բացահայտեք մեր
          պրեմիում խաղակոշիկների տարբերակները, որոնք հարմար են բոլոր չափերի
          ակումբների համար։ Սկսեք ձեր ֆուտբոլային ճանապարհորդությունը մեզ հետ
          այսօր:
        </Typography>
        <br />
        <Typography
          sx={{ fontFamily: "galano", fontWeight: "bold" }}
          variant="h5"
        >
          Ֆուտբոլ - ավելի քան խաղ, դա ապրելակերպ է
        </Typography>
        <br />
        <Typography
          sx={{ fontFamily: "galano", fontWeight: "bold" }}
          variant="h6"
        >
          Ուսումնասիրեք հանրաճանաչ ապրանքանիշերը
        </Typography>
        <br />
        <Typography>
          Գնել Nike ապրանքներ | Գնել adidas ապրանքներ | Գնեք Puma արտադրանք
        </Typography>
      </section>
      <Slider />
      <h2 style={{ marginTop: "15px" }} className="text-center">
        Բարձր գնահատականով ապրանքներ
      </h2>
      <PowerCardList products={powerCards} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(HomePage);
