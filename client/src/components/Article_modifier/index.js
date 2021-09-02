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
  modal2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "Wrap",
    width: "400",
    overflowY: "scroll",
  },
  paper2: {
    border: "none",
    backgroundColor: "#A5C6BA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "&:focus": {
      outline: "none",
    },
    borderRadius: 5,
  },
  button2: {
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

export default function Create_article(props) {
  const [modifycontent, setModifycontent] = useState("");
  const [modifytitle, setModifytitle] = useState("");

  useEffect(() => {
    setModifytitle(props.data.title);
    setModifycontent(props.data.content);
  }, [props.data.content, props.data.title]);

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
    if (data.Modify_article_upload_image[0]) {
      const formData = new FormData();
      formData.append("image", data.Modify_article_upload_image[0]);

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
            .put(
              `http://localhost:3000/articles/${id}`,
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
        .put(
          `http://localhost:3000/articles/${id}`,

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
  const onDelete = () => {
    // Je peux faire ma requête ajax a cet endroit là:
    axios
      .delete(
        `http://localhost:3000/articles/${id}`,

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
        window.location = "/";
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <div>
      <button className={classes.button2} type="button" onClick={handleOpen}>
        Modifier l'article
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal2}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper2}>
            <form
              className="Modify_article_form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="Modify_article_label" htmlFor="category">
                Catégorie :
              </label>
              <select
                {...register("category_id", { required: true })}
                name="category"
                id="Create_article_category"
              >
                <option value="1">Lézard</option>
                <option value="2">Amphibien</option>
                <option value="3">Serpent</option>
                <option value="4">Tortue</option>
              </select>

              <label className="Modify_article_label" htmlFor="theme">Thème :</label>
              <select {...register("theme_id", { required: true })} name= "theme" id= "Modify_article_theme">
                <option value="1">Soins et pathologies</option>
                <option value="2">Terrarium</option>
                <option value="3">Alimentation</option>
                <option value="4">Génétique</option>
                <option value="5">Anatomie et biologie</option>
                <option value="6">Législation</option>
                <option value="7">Biotope et histoire naturelle</option>
              </select>

              <label className="Modify_article_label Create_article_title" htmlFor="Article_title">Titre de l'article : </label>
              <input {...register("title", { required: true })} type="text" className="Modify_article_form_input" value= {modifytitle} onChange= {(e) => setModifytitle(e.target.value)}/>

              <label className="Mofidy_article_label" htmlFor="Modify_article_body">Corps de l'article :</label>
              <textarea {...register('content')}  
                rows="20" cols="33"value= {modifycontent} onChange= {(e) => setModifycontent(e.target.value)} > 
              </textarea>
              <label className="Modify_article_label" htmlFor="Modify_article_image">Ajouter une image :</label>

              <input {...register('Modify_article_upload_image', { required: false })} type="file"
                id="img"
                accept="image/png, image/jpeg"></input>
              <label id= "Modify_article_image_icon" htmlFor="img"><PhotoCameraIcon /></label>

              <input {...register("breeding_sheet", { required: true })} type="hidden" value= "false" />

              <input className="Modify_article_submit" type="submit" value="Enregistrer" />
              
            </form>
            <input  className="Modify_article_submit Modify_article_submit_2" type="submit" value="Supprimer l'article" onClick= {onDelete}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
