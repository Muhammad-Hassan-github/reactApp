import React ,{useEffect} from "react";
import Loader from 'react-loader-spinner'
// import domtoimage from "dom-to-image";
// import domtoimage from 'dom-to-image-improved';
import htmlToImage from 'html-to-image';
import "./header.css";
import { AiFillShopping, AiOutlineLoading } from "react-icons/ai";
import MyContext from "../../Context/context";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Badge, Select, Input } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import {
  AiFillDelete,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import Fade from "@material-ui/core/Fade";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SnapSettings from "./SnapSettings/snapSettings";
import { toast } from "react-toastify";
import IconBreadcrumbs from "./HeaderBreadCrumb/headerBreadCrumb";
import { IconContext } from "react-icons";

import { FaShare } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { AiOutlineCaretDown } from "react-icons/ai";

import { ImMail } from "react-icons/im";
import ShareLink from "react-facebook-share-link";
import ShareLinkTwiter from "react-twitter-share-link";
import { FacebookShareButton } from "react-simple-share";
import EmailShare from "react-email-share-link";
// import MyContext from '../../../Components/Context/context';

import { PinterestShareButton } from "react-simple-share";
const axios = require('axios');


const responsive = (len) => {
  return {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "500px",
  },
}));

const useMyStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "40%",
    margin: "0 auto",

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "700px",
  },
}));

const Header = () => {
  const styleclass = useMyStyles();
  const [openShareModal, setOpenShareMOdal] = React.useState(false);
  const [shareImgUrl, setShareImgUrl] = React.useState(false);
  const [shareImg, setShareImg] = React.useState(false);
  const [save, setSave] = React.useState(false);
  let porductIDs = [];

const ContextApi = React.useContext(MyContext);


  const myfn = () => {
    console.log("My Fn Called")
    setSave(true)
  }


  const [copyText, setCopyText] = React.useState(false);

  const handleOpenShare = () => {
    setOpenShareMOdal(true);
  };

  const handleCloseShare = () => {
    setOpenShareMOdal(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [savedAnchorEl, setSavedAnchorEl] = React.useState(null);
  const [recheck, setRecheck] = React.useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [val, setVal] = React.useState("");
  const [openSave, setSaveOpen] = React.useState(false);
  

  useEffect(() => {

    if ( !JSON.parse(localStorage.getItem('AddToCartKey'))){
      
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   localStorage.setItem('AddToCartKey', JSON.stringify(makeid(42)));  

    }


    const promise = new Promise((resolve, reject) => {

      let CartKey =  JSON.parse(localStorage.getItem('AddToCartKey'))   
        axios({
        method: 'post',
        url: `https://postermuehle.de/wp-json/cocart/v1/clear/?cart_key=${CartKey.toString()}`})
        .then(function (response) {
      console.log(JSON.stringify(response.data));
      resolve(true);
      
      })
      .catch(function (error) {
        console.log(error);
    });
    
  })
  promise.then((success) => {
  
  
    ContextApi.cart.forEach(  element => {
  
        let CartKey =  JSON.parse(localStorage.getItem('AddToCartKey'))
      
        console.log(CartKey)
       
        axios({
        method: 'post',
        url: `https://postermuehle.de/wp-json/cocart/v1/add-item/?cart_key=${CartKey.toString()}`,
        data: {
            product_id: element.productId.toString(),
            quantity: element.qty.toString(),
            variation_id: element.id.toString()
          }
        }).then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
      
        
      });
  
    })
    
  }, [])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClosed = () => {
    setAnchorEl(null);
  };
  const handleSavedOpen = (event) => {
    setSavedAnchorEl(event.target);
  };
  const handleSavedClose = () => {
    setSavedAnchorEl(null);
  };
  const handleSaveOpen = (picture) => {
    setSaveOpen(true);
    setOpen(false);
  };

  const handleSaveClose = () => {
    setSaveOpen(false);
  };



  let checkoutToMain = ()=>{



    let CartKey =  JSON.parse(localStorage.getItem('AddToCartKey'))
    window.location.href="https://postermuehle.de/?cocart-load-cart=" + CartKey.toString();
	  

  }

  const addSnap = (snap) => {
    if (val.length < 3) {
      toast.error("Label should have at least three characters", {
        autoClose: 1500,
      });
    } else {
      setOpen(false);
      setSaveOpen(false);
      var node = document.getElementById("my-node");
      let img = null;
      setTimeout(() => {
        var node = document.getElementById("my-node");
        var img = null;
        const promise = new Promise((resolve, reject) => {
          htmlToImage
            .toPng(node)
            .then(function (dataUrl) {
              console.log(dataUrl);
              resolve(true);
              img = dataUrl;
            })
            .catch(function (error) {
              resolve(false);
              console.error("oops, something went wrong!", error);
            });
        });
        promise.then((success) => {
          if (success) {
            snap(val, img);
          } else {
            snap(val);
            toast.error("Image wasn't saved but your settings has been saved");
          }
        });
      }, 1000);
    }
  };

  const copyFn = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("copy");
    copyText.remove();
    setCopyText(true);
  };

  const savedOpened = Boolean(savedAnchorEl);
  const savedId = savedOpened ? "simple-popover-2" : undefined;

  return (
    <MyContext.Consumer>
      {(context) => {
        const opened = Boolean(context.anchorEl);
        const id = opened ? "simple-popover" : undefined;
        if (context.runFunc) {
          context.openCart(document.getElementById("cart-pop"));
        }
        const snapSettings = JSON.parse(localStorage.getItem("snap-settings"));
        let snapStorage = null;
        if (snapSettings && snapSettings.length > 0) {
          snapStorage = snapSettings.map((el) => {
            return (
              <div
                className="snap-container"
                key={el.id}
                onClick={() => context.handleClickSnap(el.label)}
              >
                <div
                  style={{ background: `url(${el.content_img})` }}
                  className="header-bg"
                >
                  <div
                    className="del-icon-snap"
                    onClick={() => {
                      context.deleteSettings(el.label);

                      setRecheck(!recheck);
                    }}
                  >
                    <AiFillDelete />
                  </div>
                  {/* <div className="label-heading" onClick={() => context.handleClickSnap(el.label)}>
										Load {el.label}
									</div> */}
                  <div className="label-date">
                    {el.label}
                    {/* Saved at {el.date.split('T')[0]} */}
                  </div>
                </div>
              </div>
            );
          });
        } else {
          snapStorage = (
            <div className="empty-popover-display">
              <div>
                There is nothing here.
                <p>Please save something first.</p>
              </div>
            </div>
          );
        }
        const cart = [...context.cart];
        const cartLength = cart.length;
        let x = "add_to_cart=";
        let totalPrice = 0;
        cart.forEach((el, ind) => {
          if (cart.length - 1 === ind) {
            x += `${el.id}-${el.qty}-${el.productId}`;
          } else {
            x += `${el.id}-${el.qty}-${el.productId},`;
          }
        });
        cart.forEach((cartItem) => {
          totalPrice += cartItem.price * cartItem.qty;
        });

        return (
          <div className="header">
            <div className="header-inner">
              <div>
                <div className="header-child-1">
                  <div className="header-btn" onClick={handleSavedOpen}>
                    <IconContext.Provider
                      value={{ color: "black", size: "12px" }}
                    >
                      <div>
                        <AiOutlineCaretDown /> {"	"} SAVED PICTURE WALLS
                      </div>
                    </IconContext.Provider>
                  </div>
                  <SnapSettings myfn={myfn} />
                  {/* <div className="header-btn">SHARE</div> */}
                  <div
                    className="header-btn"
                    onClick={() => {
                      //  -------------Hassan code share image start--------------
                      context.openLoading(true)

                      const promise = new Promise((resolve, reject) => {
                        var node = document.getElementById("my-node");
                        htmlToImage
                          .toPng(node)
                          .then(function (dataUrl) {
                            setShareImg(dataUrl);
                            const cloudName = "ddqvocuoe";
                            const unsignedUploadPreset = "lzsbfdlz";
                            uploadFile(dataUrl);
                            function uploadFile(file) {
                              var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
                              var xhr = new XMLHttpRequest();
                              var fd = new FormData();
                              xhr.open("POST", url, true);
                              // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
                              // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                              // xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
                              // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                              xhr.setRequestHeader(
                                "X-Requested-With",
                                "XMLHttpRequest"
                              );
                              xhr.onreadystatechange = function (e) {
                                if (xhr.readyState == 4 && xhr.status == 200) {
                                  var response = JSON.parse(xhr.responseText);
                                  var url = response.secure_url;
                                  console.log(url);
                                  setShareImgUrl(url);
                                  var tokens = url.split("/");
                                  tokens.splice(-2, 0, "w_150,c_scale");
                                  //   var img = new Image(); // HTML5 Constructor
                                  //   img.src = tokens.join("/");
                                  //   img.alt = response.public_id;
                                  //   document.body.appendChild(img);

                                  resolve(true);
                                  context.openLoading(false)

                                }
                              };
                              fd.append("upload_preset", unsignedUploadPreset);
                              fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
                              fd.append("file", file);
                              xhr.send(fd);
                            }
                          })
                          .catch(function (error) {
                            console.error("oops, something went wrong!", error);
                          });
                      });
                      promise.then((success) => {
                        handleOpenShare();
                      });

                      // ----------------Hassan code share image end--------------
                    }}
                  >
                    <IconContext.Provider
                      value={{ color: "black", size: "10px" }}
                    >
                      <div>
                        <FaShare /> SHARE
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div
                    className="header-btn"
                    onClick={

                      context.changed

                        ? handleOpen
                        : () => {
                          context.reset();
                          context.openMainDrawer();
                          context.openEnvironmentDrawer();
                        }
                    }
                  >
                    <IconContext.Provider
                      value={{ color: "black", size: "10px" }}
                    >
                      <div>
                        <GiBrickWall /> {"   "} CREATE NEW
                      </div>
                    </IconContext.Provider>
                  </div>

                  {/* ----------------Hassan Code  share modal------------------- */}



                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={styleclass.modal}
                    open={openShareModal}
                    onClose={handleCloseShare}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >

                    <Fade in={openShareModal}>
                      <div className={styleclass.paper}>
                        <img
                          src={shareImg}
                          alt="loading..."
                          height="100%"
                          width="100%"
                        />

                        <h1 style={{ textAlign: "center", color: "#583a8b" }}>
                          Share On
                        </h1>

                        <h1
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div style={{ marginRight: 10 }}>
                            <ShareLink link={shareImgUrl}>
                              {(link) => (
                                <a href={link} target="_blank">
                                  <ImFacebook2
                                    style={{
                                      marginBottom: 1,
                                      width: "90%",
                                      height: "90%",
                                      color: "#583a8b",
                                    }}
                                  />
                                </a>
                              )}
                            </ShareLink>
                          </div>

                          <div style={{ marginRight: 10 }}>
                            <ShareLinkTwiter link="https://postermuehle.de/bilderwaende/komponiere-deine-bilderwand/">
                              {(link) => (
                                <a href={link} target="_blank">
                                  <FaTwitterSquare
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      color: "#583a8b"
                                    }}
                                  />
                                </a>
                              )}
                            </ShareLinkTwiter>
                          </div>

                          {/* <FacebookShareButton
				
														url="https://desenio.de/de/ak/bilderwand-inspiration-posters/perfect-pair-70x100-4/3470705"
														color="#3B5998"
														size="40px"
													/> */}

                          <div style={{ paddingBottom: 15, marginRight: 10 }}>
                            <PinterestShareButton
                              url="https://postermuehle.de/bilderwaende/komponiere-deine-bilderwand/"
                              color="#583a8b"
                              size="30px"
                              description="Check out this free React Component by @stephanwozniak, made for easily sharing pages on social media sites!"
                              media={shareImgUrl}
                            />
                          </div>

                          <div style={{ marginRight: 10 }}>
                            <EmailShare
                              email="mickey@mouse.com"
                              subject="Your subject"
                              body={shareImgUrl}
                            >
                              {(link) => (
                                <a href={link} data-rel="external">
                                  <ImMail
                                    style={{
                                      background: "white",
                                      color: "#583a8b",
                                      fontSize: "27px",
                                    }}
                                  />
                                </a>
                              )}
                            </EmailShare>
                          </div>

                          {/* <a href="https://www.instagram.com/" target="_blank" ><FaInstagramSquare style={{ margin: 10, width: "80%", height: "80%" }} /></a> */}
                          {/* <a href="https://www.linkedin.com/" target="_blank" ><AiFillLinkedin style={{ margin: 10, width: "80%", height: "80%" }} /></a> */}
                        </h1>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            type="text"
                            value={shareImgUrl}
                            id="myInput"
                            style={{ margin: 5, padding: 8 }}
                          />
                          {copyText ? (
                            <button style={{ margin: 5, padding: 8 }}>
                              Text Copied
                            </button>
                          ) : (
                              <button
                                onClick={copyFn}
                                style={{ margin: 5, padding: 8 }}
                              >
                                Copy Text
                              </button>
                            )}
                        </div>
                      </div>
                    </Fade>
                  </Modal>

                  {/* ----------------Hassan Code share modal------------------- */}

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
                        <h2 id="transition-modal-title">
                          Do you want to continue
                        </h2>
                        <Divider />
                        <p id="transition-modal-description">
                          THERE ARE CHANGES THAT WERE NOT SAVED AND WILL BE LOST
                          IF YOU CONTINUE. DO YOU WANT TO SAVE YOUR Progress?
                        </p>
                        <p className="header-btn-container">
                          <div
                            className="header-btn"
                            onClick={
                              context.saveSelection
                                ? handleSaveOpen
                                : () =>
                                  toast.error(
                                    "You must select alleast one poster to save.",
                                    {
                                      autoClose: 1500,
                                    }
                                  )
                            }
                          >
                            Save
                          </div>
                          <div
                            className="header-btn"
                            onClick={() => {
                              context.reset();
                              handleClose();
                            }}
                          >
                            Don't Save(Continue)
                          </div>
                          <div className="header-btn" onClick={handleClose}>
                            Cancel
                          </div>
                        </p>
                      </div>
                    </Fade>
                  </Modal>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openSave}
                    onClose={handleSaveClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={openSave}>
                      <div className={classes.paper}>
                        <h2 id="transition-modal-title">Picture Wall Save</h2>
                        <Divider />

                        <p className="snap-btn-container">
                          <Input
                            placeholder="label"
                            label="label"
                            className="input"
                            type="text"
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                          />
                          <button
                            className="snap-btn"
                            onClick={() => addSnap(context.snapSettings)}
                          >
                            Save
                          </button>
                        </p>
                      </div>
                    </Fade>
                  </Modal>
                </div>
                <div>
                  <IconBreadcrumbs />
                </div>
              </div>
              <div className="header-child-2">
                <div className="cart-pop" aria-describedby={id}>
                  {/* <Badge badgeContent={cart.length} color="secondary">
										<MdShoppingCart />
									</Badge> */}

                  <Badge
                    badgeContent={cartLength}
                    color="transparant"
                    onClick={context.openCart}
                    id="cart-pop"
                  >
                    <AiFillShopping size={24} />
                  </Badge>
                </div>
                {totalPrice > 0 ? (
                  <a
                    className="checkout-btn"

                    // href={`https://postermuehle.de/?${x}`}

                    onClick={()=>{checkoutToMain()}}
                  >
                    CHECKOUT {"  "} {totalPrice} €
                  </a>
                ) : (
                    <a className="checkout-btn" >
                      CHECKOUT {"  "} {totalPrice} €
                    </a>
                  )}
              </div>
              <Popover
                className="saved-popover"
                id={savedId}
                open={savedOpened}
                anchorEl={savedAnchorEl}
                onClose={handleSavedClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Carousel responsive={responsive(snapStorage.length)}>
                  {snapStorage}
                </Carousel>
              </Popover>
              <Popover
                id={id}
                className="my-pop-over"
                open={context.cartOpen}
                anchorEl={context.anchorEl}
                onClose={context.closeCart}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <p className="popover-container">
                  {cart.length > 0 ? (
                  
                    cart.map((el) => {
                      porductIDs.push(el.id)
                      return (
                        <div
                          key={el.id}
                          id={el.id}
                          className="pop-inner-container"
                        >
                          <div>
                            <div className="pop-inner-flex">
                              <div className="pop-img-container">
                                <img
                                  className="pop-img"
                                  src={el.images[0].src}
                                />
                              </div>
                              <div className="text-content-container">
                                <div>
                                  {el.name} ({el.variation})
                                </div>
                                <div>{el.price} €</div>
                                <select
                                  style={{
                                    width: "120px",
                                    height: "35px",
                                    padding: "5px",
                                  }}
                                  native
                                  value={el.qty}
                                  onChange={(e) =>
                                    context.changeQty(e.target.value, el.id)
                                  }
                                  inputProps={{
                                    name: "Qty",
                                    id: "qty",
                                  }}
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
                                    return (
                                      <option
                                        style={{ fontWeight: "normal" }}
                                        value={el}
                                      >
                                        {el}
                                      </option>
                                    );
                                  })}
                                </select>
                                {/* <div>{el.qty}</div> */}
                              </div>
                            </div>
                          </div>
                          <div>
                            <AiFillDelete
                              size="24px"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                context.deleteItem(el.id);
                              }}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                      <p style={{ textAlign: "center", marginTop: "80px" }}>
                        <div style={{ fontSize: "24px" }}>
                          There is nothing in the cart.
                      </div>
                        <div style={{ marginTop: "20px" }}>
                          Please add an article or frame.
                      </div>
                      </p>
                    )}
                </p>


                {cart.length > 0 ? (
                  <div className="cart-bottom-container">
                    <div className="cart-total-container">
                      <div className="cart-total-heading">Total</div>
                      <div className="cart-total-heading">{totalPrice} €</div>
                    </div>
                    {/* <div className="cart-shipping-container">
										<div>Total</div>
										<div>{totalPrice}</div>
									</div> */}

                    <div className="checkout-cart-btn" onClick={checkoutToMain}>

                      {/* <a href={`https://postermuehle.de/?${x}`}>
                        CHECKOUT
                      </a> */}

                      <a href="#">
                        CHECKOUT
                      </a>


                  

                    </div>
                  </div>
                ) : null}
              </Popover>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Header;
