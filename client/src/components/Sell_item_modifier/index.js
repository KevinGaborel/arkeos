import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "Wrap",
    width: "400",
    overflowY: "scroll",
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
    width: "10em",
    height: "2.5em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#F9F7ED",
    border: "none",
    borderRadius: "0.3rem",

    "&:hover": {
      background: "#F9F7ED",
      color: "#6B6661",
    },
  },
}));

export default function Sell_item_modifier(props) {
  const [sellitemdata, setModifysellitemdata] = useState("");

  useEffect(() => {
    setModifysellitemdata(props.data);
  }, [props.data]);
  console.log(sellitemdata);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  let token = localStorage.getItem("token");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Je peux faire ma requête ajax a cet endroit là:
    if (data.Sell_item_upload_image[0]) {
      const formData = new FormData();
      formData.append("image", data.Sell_item_upload_image[0]);

      axios
        .post("http://localhost:3000/image", formData, {
          headers: {
            authorization: token,
            Accept: "application/json",
            "content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          // On a notre objet response qui contient le chemin de l'image uploadée
          console.log(response);
          console.log(data.scientific_name);
          console.log(response.data.location);

          axios
            .put(
              `http://localhost:3000/marketplace/${id}`,

              {
                data: {
                  scientific_name: data.scientific_name,
                  locality: data.locality,
                  phase: data.phase,
                  born_captivity: data.born_captivity,
                  price: data.price,
                  native_country: data.native_country,
                  birth_date: data.birth_date,
                  content: data.content,
                  category_id: data.category_id,
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
              console.log(response);
              window.location.reload();
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
        });
    } else {
      axios
        .put(
          `http://localhost:3000/marketplace/${id}`,

          {
            data: {
              scientific_name: data.scientific_name,
              locality: data.locality,
              phase: data.phase,
              born_captivity: data.born_captivity,
              price: data.price,
              native_country: data.native_country,
              birth_date: data.birth_date,
              content: data.content,
              category_id: data.category_id,
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

  const onDelete = () => {
    // Je peux faire ma requête ajax a cet endroit là:
    axios
      .delete(
        `http://localhost:3000/marketplace/${id}`,

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
        window.location = "/marketplace";
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        Modifier l'annonce
      </button>
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
              className="Sell_item_modifier_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <select
                {...register("category_id", { required: true })}
                id="Sell_item_modifier_pet_category"
              >
                <option value="1">Lézard</option>
                <option value="2">Amphibien</option>
                <option value="3">Serpent</option>
                <option value="4">Tortue</option>
              </select>
              <label className="Sell_item_label" htmlFor="scientific_name">
                Nom scientifique (Genre espèce):{" "}
              </label>
              <input
                {...register("scientific_name", { required: true })}
                type="text"
                className="Sell_item_modifier_input"
                value={sellitemdata.scientific_name}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              />

              <label className="Sell_item_label" htmlFor="locality">
                Localité :{" "}
              </label>
              <input
                {...register("locality")}
                type="text"
                className="Sell_item_modifier_input"
                value={sellitemdata.locality}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              />
              <label className="Sell_item_label" htmlFor="phase">
                Phase :{" "}
              </label>
              <input
                {...register("phase")}
                type="text"
                className="Sell_item_modifier_input"
                value={sellitemdata.phase}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              />
              <label className="Sell_item_label" htmlFor="born_captivity">
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
                />
              </div>

              <label className="Sell_item_label" htmlFor="name">
                Pays de naissance :{" "}
              </label>
              <input
                {...register("native_country", { required: true })}
                type="text"
                className="Sell_item_modifier_input"
                value={sellitemdata.native_country}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              />
              <label className="Sell_item_label" htmlFor="birth_date">
                Date de naissance (AAAA/MM/JJ) :{" "}
              </label>
              <input
                {...register("birth_date", { required: true })}
                type="text"
                className="Sell_item_modifier_input"
                value={sellitemdata.birth_date}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              />
              <label className="Sell_item_label SpecialLabel" htmlFor="content">
                Informations complémentaires :
              </label>
              <textarea
                {...register("content")}
                id="content"
                rows="5"
                cols="33"
                value={sellitemdata.content}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              ></textarea>
              <label className="Sell_item_label SpecialLabel" htmlFor="avatar">
                Ajouter une image :
              </label>

              <input
                {...register("Sell_item_upload_image", { required: false })}
                type="file"
                id="img"
                accept="image/png, image/jpeg"
              ></input>
              <label id="Sell_item_modifier_icon" htmlFor="img">
                <PhotoCameraIcon />
              </label>
              <label className="Sell_item_label" htmlFor="price">
                Prix :{" "}
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                className="Sell_item_modifier_input"
                value={sellitemdata.price}
                onChange={(e) => setModifysellitemdata(e.target.value)}
              />
              <input
                className="Sell_item_modifier_button"
                type="submit"
                value="Envoyer"
              />
            </form>
            <input
              className="Sell_item_modifier_button Sell_item_modifier_button_2"
              type="submit"
              value="Supprimer l'annonce"
              onClick={onDelete}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
