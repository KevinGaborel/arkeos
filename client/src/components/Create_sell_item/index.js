import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import DescriptionIcon from "@material-ui/icons/Description";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "Wrap",
    width: "400",
    overflowY: "scroll",
    color: "#F9F7ED",
    fontWeight: "bold",
  },
  paper: {
    border: "none",
    backgroundColor: "#A5C6BA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: "none",
    },
    borderRadius: 5,
  },
  button: {
    width: "14em",
    height: "3em",
    margin: "0 0 0 3em",
    backgroundColor: "#A5C6BA",
    boxShadow: "0px 1px 3px 1px rgba(107,102,97,0.7)",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#F9F7ED",
    border: "none",
    borderRadius: "0.3rem",

    "&:hover": {
      background: "rgb(249, 247, 237,0.5)",
      color: "#6B6661",
    },
  },
}));

export default function Create_sell_item() {
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
    if (data.Create_sell_item_upload_image[0]) {
      const formData = new FormData();
      formData.append("image", data.Create_sell_item_upload_image[0]);

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
              "http://localhost:3000/marketplace",
              {
                scientific_name: data.scientific_name,
                locality: data.locality,
                phase: data.phase,
                born_captivity: data.born_captivity,
                price: data.price,
                native_country: data.native_country,
                birth_date: data.birth_date,
                content: data.content,
                author_id: data.author_id,
                category_id: data.category_id,
                url_picture: response.data.location,
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
          `http://localhost:3000/marketplace/`,

          {
            scientific_name: data.scientific_name,
            locality: data.locality,
            phase: data.phase,
            born_captivity: data.born_captivity,
            price: data.price,
            native_country: data.native_country,
            birth_date: data.birth_date,
            content: data.content,
            author_id: data.author_id,
            category_id: data.category_id,
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
    <div>
      <Button
        className={classes.button}
        type="button"
        onClick={handleOpen}
        startIcon={<DescriptionIcon />}
      >
        Créer une annonce
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form
              className="Create_sell_item_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <select
                {...register("category_id", { required: true })}
                id="Create_sell_item_pet_category"
              >
                <option value="1">Lézard</option>
                <option value="2">Amphibien</option>
                <option value="3">Serpent</option>
                <option value="4">Tortue</option>
              </select>
              <label
                className="Create_sell_item_label"
                htmlFor="scientific_name"
              >
                Nom scientifique (Genre espèce):{" "}
              </label>
              <input
                {...register("scientific_name", { required: true })}
                type="text"
                className="Create_sell_item_input"
              />

              <label className="Create_sell_item_label" htmlFor="locality">
                Localité :{" "}
              </label>
              <input
                {...register("locality")}
                type="text"
                className="Create_sell_item_input"
              />
              <label className="Create_sell_item_label" htmlFor="phase">
                Phase :{" "}
              </label>
              <input
                {...register("phase")}
                type="text"
                className="Create_sell_item_input"
              />
              <label
                className="Create_sell_item_label"
                htmlFor="born_captivity"
              >
                L'animal est-il né en captivité ?{" "}
              </label>
              <div className="Radio">
                <label className="Radio_label" htmlFor="born_captivity">
                  Oui
                </label>
                <input
                  {...register("born_captivity", { required: true })}
                  type="radio"
                  value="true"
                  id="NC"
                  defaultChecked
                />
              </div>

              <div className="Radio">
                <label className="Radio_label" htmlFor="born_captivity">
                  Non
                </label>
                <input
                  {...register("born_captivity", { required: true })}
                  type="radio"
                  value="false"
                  id="NC"
                />
              </div>

              <label className="Create_sell_item_label" htmlFor="name">
                Pays de naissance :{" "}
              </label>
              <input
                {...register("native_country", { required: true })}
                type="text"
                className="Create_sell_item_input"
              />
              <label className="Create_sell_item_label" htmlFor="birth_date">
                Date de naissance (AAAA/MM/JJ) :{" "}
              </label>
              <input
                {...register("birth_date", { required: true })}
                type="text"
                className="Create_sell_item_input"
              />
              <label className="Sell_item_label SpecialLabel" htmlFor="content">
                Informations complémentaires :
              </label>
              <textarea
                {...register("content")}
                id="content"
                rows="5"
                cols="33"
              ></textarea>
              <label
                className="Create_sell_item_label SpecialLabel"
                htmlFor="avatar"
              >
                Ajouter une image :
              </label>

              <input
                {...register("Create_sell_item_upload_image", {
                  required: false,
                })}
                type="file"
                id="img"
                accept="image/png, image/jpeg"
              ></input>
              <label htmlFor="img" id="Create_sell_item_image_icon">
                <PhotoCameraIcon />
              </label>
              <label className="Create_sell_item_label" htmlFor="price">
                Prix :{" "}
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                className="Create_sell_item_input"
              />
              <input
                type="submit"
                value="Envoyer"
                id="Create_sell_item_button"
              />
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
