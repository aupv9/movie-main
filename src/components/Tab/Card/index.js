import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "33.33333333%",
    maxHeight: 500,
    backgroundColor: "#000",
  },
  media: {
    height: 300,
    width: "80%",
    objectFit: "cover",
    backgroundColor: "#000",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://creativeitem.com/demo/neoflex/assets/frontend/flixer/images/asset_TV_UI.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            color="secondary"
            component="h2"
          >
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
