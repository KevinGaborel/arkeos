import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DescriptionIcon from "@material-ui/icons/Description";
import { useForm } from "react-hook-form";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal_Create_article: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "Wrap",
    width: "400",
    overflowY: "scroll",
  },
  paper_Create_article: {
    border: "none",
    backgroundColor: "#A5C6BA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
    "&:focus": {
      outline: "none",
    },
    borderRadius: 5,
  },
  button_Create_article: {
    width: "13em",
    height: "3em",
    margin: "0 2rem 0 2rem",
    backgroundColor: "#A5C6BA",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#F9F7ED",
    border: "none",
    borderRadius: "0.3rem",
    boxShadow: "0px 1px 1px 0.5px rgba(107,102,97,0.7)",

    "&:hover": {
      background: "rgb(249, 247, 237,0.5)",
      color: "#6B6661",
    },
  },
}));

export default function Create_article() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let token = localStorage.getItem("token");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // Je peux faire ma requête ajax a cet endroit là:
    if (data.Create_article_upload_image[0]) {
      const formData = new FormData();
      formData.append("image", data.Create_article_upload_image[0]);

      axios
        .post("http://localhost:3000/image", formData, {
          headers: {
            authorization: token,
            Accept: "application/json",
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          axios
            .post(
              "http://localhost:3000/articles",

              {
                data: {
                  title: data.title,
                  content: data.content,
                  category_id: data.category_id,
                  theme_id: data.theme_id,
                  url_picture: response.data.location,
                },
              },

              {
                headers: {
                  authorization: token,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
            .then(function (response) {
              //handle success
              window.location.reload();
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
        });
    } else {
      axios
        .post(
          `http://localhost:3000/articles/`,

          {
            data: {
              title: data.title,
              content: data.content,
              category_id: data.category_id,
              theme_id: data.theme_id,
            },
          },

          {
            headers: {
              authorization: token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response);
          window.location.reload();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  };

  return (
    <>
      <Button
        id="Create_button"
        className={classes.button_Create_article}
        type="button"
        startIcon={<DescriptionIcon />}
        onClick={handleOpen}
      >
        Créer un article
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal_Create_article}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper_Create_article}>
            <form
              className="Create_article_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="Create_article_selectors">
                <select
                  {...register("category_id", { required: true })}
                  id="Create_article_pet_category"
                >
                  <option value="1">Lézards</option>
                  <option value="2">Amphibiens</option>
                  <option value="3">Serpents</option>
                  <option value="4">Tortues</option>
                </select>

                <select
                  {...register("theme_id", { required: true })}
                  id="Create_article_theme"
                >
                  <option value="1">Soins et pathologies</option>
                  <option value="2">Terrarium</option>
                  <option value="3">Alimentation</option>
                  <option value="4">Génétique</option>
                  <option value="5">Anatomie et biologie</option>
                  <option value="6">Législation</option>
                  <option value="7">Biotope et histoire naturelle</option>
                </select>
              </div>

              <label
                className="Create_article_label"
                htmlFor="_Create_article_article_title"
              >
                Titre de l'article :{" "}
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                id="Create_article_article_title"
              />

              <label
                className="Create_article_label"
                htmlFor="_Create_article_article_body"
              >
                Corps de l'article :
              </label>
              <textarea
                {...register("content")}
                id="Create_article_article_body"
                rows="20"
                cols="33"
              ></textarea>
              <label
                className="Create_article_label"
                htmlFor="Create_article_article_image"
              >
                Ajouter une image :
              </label>

              <input
                {...register("Create_article_upload_image", {
                  required: false,
                })}
                type="file"
                id="img"
                accept="image/png, image/jpeg"
              ></input>
              <label id="Create_article_image_icon" htmlFor="img">
                <PhotoCameraIcon />
              </label>

              <input
                {...register("breeding_sheet", { required: true })}
                type="hidden"
                value="false"
              />

              <input
                type="submit"
                value="Créer l' article"
                id="Create_article_submit"
              />
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
