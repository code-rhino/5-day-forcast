import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styles from "./Cards.module.css";

export class Cards extends Component {
  render() {
    return (
      <div
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={styles.container}
      >
        <div
          item
          component={Card}
          xs={2}
          md={2}
          className={(styles.card, styles.weather)}
        ></div>
        <div
          item
          component={Card}
          xs={2}
          md={2}
          className={(styles.card, styles.weather)}
        ></div>
        <div
          item
          component={Card}
          xs={2}
          md={2}
          className={(styles.card, styles.weather)}
        ></div>
        <div
          item
          component={Card}
          xs={2}
          md={2}
          className={(styles.card, styles.weather)}
        ></div>
        <div
          item
          component={Card}
          xs={2}
          md={2}
          className={(styles.card, styles.weather)}
        ></div>
      </div>
    );
  }
}

export default Cards;
