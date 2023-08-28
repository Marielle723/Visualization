import "./App.css";
import { useState } from "react";
import play from "./assets/img/play.svg";

import fitness from "./assets/img/fitness.jpg";

import fitnessvideo from "./assets/video/Fitness.mp4";

function App() {
  const [playingFit, setPlayingFit] = useState(false);

  return (
    <div className="App">
      {/* // Début partie sur le navbar */}

      <nav class="navbar navbar-light">
        <span class="navbar-brand mb-0 h1">
          CREA<span className="span-logo">LIT</span>ECH
        </span>
        <h1 className="span-title">Visualize</h1>
      </nav>

      {/* //fin partie sur Navbar et début partie sur le carousel */}

      <div className="container-lg text-center">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-interval="false"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="card border shadow pt-4 px-4">
                <img
                  className="card-img-top d-block w-100"
                  src="https://images.unsplash.com/photo-1633058851505-6376593aa34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Card image cap"
                  style={{ maxHeight: "50vh", objectPosition: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sécurité</h5>
                  <p className="card-text">
                    Dans le monde trépidant d'aujourd'hui, il est parfois
                    difficile de se sentir à l'aise et en sécurité. Cette
                    expérience guidée vous invite à vous connecter avec cette
                    sensation de sécurité en vous, à laisser de côté les soucis
                    et les stress extérieurs, et à vous immerger dans une oasis
                    de tranquillité intérieure.
                  </p>
                  <a
                    href="https://video.pictory.ai/1692807435271/20230823164842328i9CR4dtcWHj2EVQ"
                    className="btn btn-primary"
                  >
                    <img className="play-btn" src={play} alt="play icon" /> Play
                    my dream life
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="card border shadow pt-4 px-4">
                <img
                  className="card-img-side d-block w-100"
                  src="https://images.unsplash.com/photo-1506890533526-95e6102ad03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Card image cap"
                  style={{ maxHeight: "50vh", objectPosition: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Motivation</h5>
                  <p className="card-text">
                    Dans ce monde en constante évolution, cultiver la confiance
                    en soi et se préparer à saisir les opportunités qui se
                    présentent sont des compétences essentielles. Cette
                    expérience guidée vous invite à vous connecter avec votre
                    potentiel inné, à visualiser vos succès à venir et à vous
                    sentir préparé(e) à les embrasser pleinement.
                  </p>
                  <a href="#" className="btn btn-primary">
                    <img className="play-btn" src={play} alt="play icon" /> Play
                    my dream life
                  </a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="card border shadow pt-4 px-4">
                {playingFit === false && (
                  <img
                    className="card-img-side d-block w-100"
                    src="https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="Card image cap"
                    style={{ maxHeight: "50vh", objectPosition: "cover" }}
                  />
                )}

                {playingFit && (
                  <div className="videoPlaying">
                    <video controls autoPlay width="450" height="300">
                      <source src={fitnessvideo} type="video/mp4" />
                    </video>
                  </div>
                )}

                <div className="card-body">
                  <h5 className="card-title">Fitness</h5>
                  <p className="card-text">
                    Dans cette ère où le bien-être physique est essentiel, il
                    est important de se sentir confiant(e) dans sa capacité à
                    prendre soin de son corps. Cette expérience guidée vous
                    invite à vous imaginer dans une routine d'activité physique,
                    à atteindre un poids sain et à apprécier les bienfaits d'un
                    corps qui fonctionne de manière optimale.
                  </p>

                  {playingFit === false && (
                    <button
                      className="btn btn-primary"
                      onClick={() => setPlayingFit(true)}
                    >
                      <img className="play-btn" src={play} alt="play icon" />{" "}
                      Play my dream life
                    </button>
                  )}

                  {playingFit === true && (
                    <button
                      className="btn btn-danger"
                      onClick={() => setPlayingFit(false)}
                    >
                      {/* <img className="stop-btn" src={play} alt="play icon" />{" "} */}
                      Done, thank you
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="card border shadow pt-4 px-4">
                <img
                  className="card-img-top d-block w-100"
                  src="https://media.istockphoto.com/id/1378115720/fr/photo/famille-multiraciale-en-cuisine-exprimant-lamour-et-le-bonheur.webp?b=1&s=170667a&w=0&k=20&c=d0_cdUDezpLGjQpPJir45H0cM2LymTk6t1rybRX6xg4="
                  alt="Card image cap"
                  style={{ maxHeight: "50vh", objectPosition: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Relation saine</h5>
                  <p className="card-text">
                    Dans ce monde complexe, il est essentiel de cultiver des
                    relations saines, de s'ouvrir à l'amour et d'accepter les
                    belles opportunités qui se présentent à nous. Cette
                    expérience guidée vous invite à plonger dans une exploration
                    de la connexion émotionnelle, de la confiance en vous et de
                    l'acceptation de l'amour que vous méritez.
                  </p>
                  <a href="" className="btn btn-primary">
                    <img className="play-btn" src={play} alt="play icon" /> Play
                    my dream life
                  </a>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

        {/* <div className="prep">
          <div className="row">
            <div className="col-lg border shadow">
              <h2>Story</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              laudantium sit expedita doloribus quisquam ipsum et inventore ipsa
              corrupti, tempore iure molestiae, rem id animi molestias
              voluptatibus enim debitis. Asperiores?
            </div>
            <div className="col-lg bg-info ">
              <h2>Dream</h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              molestias accusantium est rem voluptatem et rerum nam debitis quos
              quibusdam nemo sint hic assumenda sunt iusto, molestiae ducimus
              dolorum repudiandae?
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-xl-3 col-md-6">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>

            <div className="col-xl-3 col-md-6">
              <img
                className="img-fluid"
                src="https://plus.unsplash.com/premium_photo-1683749810427-9f460939f702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"
                alt=""
              />
            </div>
            <div className="col-xl-3 col-md-6">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
            <div className="col-xl-3 col-md-6">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1510897345173-4d938815feb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <form>
          <div className="row">
            <div class="custom-control custom-checkbox col">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
              />
              <label class="custom-control-label" for="customCheck1">
                Utiliser mon prénom ?
              </label>
            </div>
            <div class="form-group col">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="prénom"
              />
            </div>
          </div>

          <div className="row">
            <select class="custom-select col">
              <option selected>Choisir l'ambiance</option>
              <option value="1">Nature</option>
              <option value="2">Plage</option>
              <option value="3">Aventure/combat</option>
              <option value="3">Piano</option>
              <option value="3">Fantazy</option>
            </select>

            <div class="custom-control custom-radio col">
              <input
                type="radio"
                class="custom-control-input"
                id="customRadio1"
              />
              <label class="custom-control-label" for="customCheck1">
                Voix femme
              </label>
            </div>

            <div class="custom-control custom-radio col">
              <input
                type="radio"
                class="custom-control-input"
                id="customRadio1"
              />
              <label class="custom-control-label" for="customCheck1">
                Voix homme
              </label>
            </div>
          </div>

          <div className="row">
            <select class="custom-select col">
              <option selected>Comment veux-tu te sentir?</option>
              <option value="1">Joyeuse</option>
              <option value="2">En confiance</option>
              <option value="3">Audacieuse</option>
              <option value="4">Forte</option>
              <option value="5">Relaxé</option>
              <option value="6">Autre</option>
            </select>

            <div class="input-group col">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    type="radio"
                    aria-label="Radio button for following text input"
                  />
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Text input with radio button"
              />
            </div>
          </div>
        </form> */}

        {/* <p className="lead">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          temporibus ea dolores! Nemo numquam, reiciendis ducimus, laboriosam
          minima accusantium minus repellendus incidunt iure, qui asperiores
          dolores magni soluta blanditiis neque?
        </p> */}
        {/* <blockquote className="blockquote text-right">
          <p className="mb-0">
            If you can visualize it, if you can dream it, there's some way to do
            it.
          </p>

          <footer className="blockquote-footer">Walt Disney</footer>
        </blockquote> */}
        {/* <button
          onClick={() => setPlaying(true)}
          type="button"
          class="btn btn-success btn-lg"
        >
          <img className="play-btn" src={play} alt="play icon" /> Play my dream
          life
        </button> */}
      </div>
    </div>
  );
}

export default App;
