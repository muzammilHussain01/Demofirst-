import React, { useRef, useState } from "react";
import "./Card.css";

const Card = () => {
  // psaaward usestate
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handelChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const hasCapital = /[A-Z]/.test(newPassword);
    const hasSmall = /[a-z]/.test(newPassword);
    const hasNum = /[0-9]/.test(newPassword);
    const hasSpecialCharacter = /[!@#$%^&*()_+]/.test(newPassword);
    setIsValid(hasCapital && hasSmall && hasNum && hasSpecialCharacter);
  };
  const submmit = () => {
    if (isValid) {
      alert("Congratulation! Passward is strong !");
    } else {
      alert("Sorry! Passward is too week !");
    }
  };

  const sideBar1 = useRef();
  const sideBar2 = useRef();
  const sideBar3 = useRef();
  const sideBar4 = useRef();
  const sideBar5 = useRef();
  const sideBar6 = useRef();
  const sideBar7 = useRef();
  const sideBar8 = useRef();
  const sideBar9 = useRef();
  const sideBar10 = useRef();
  const sideBar11 = useRef();

  const [showSideBar1, setShowSideBar1] = useState(false);
  const [showSideBar2, setShowSideBar2] = useState(false);
  const [showSideBar3, setShowSideBar3] = useState(false);
  const [showSideBar4, setShowSideBar4] = useState(false);
  const [showSideBar5, setShowSideBar5] = useState(false);
  const [showSideBar6, setShowSideBar6] = useState(false);
  const [showSideBar7, setShowSideBar7] = useState(false);
  const [showSideBar8, setShowSideBar8] = useState(false);
  const [showSideBar9, setShowSideBar9] = useState(false);
  const [showSideBar10, setShowSideBar10] = useState(false);
  const [showSideBar11, setShowSideBar11] = useState(false);

  const handleMouseOver = (sidebar) => {
    switch (sidebar) {
      case "sideBar1":
        setShowSideBar1(true);
        break;
      case "sideBar2":
        setShowSideBar2(true);
        break;
      case "sideBar3":
        setShowSideBar3(true);
        break;
      case "sideBar4":
        setShowSideBar4(true);
        break;
      case "sideBar5":
        setShowSideBar5(true);
        break;
      case "sideBar6":
        setShowSideBar6(true);
        break;
      case "sideBar7":
        setShowSideBar7(true);
        break;
      case "sideBar8":
        setShowSideBar8(true);
        break;
      case "sideBar9":
        setShowSideBar9(true);
        break;
      case "sideBar10":
        setShowSideBar10(true);
        break;
      case "sideBar11":
        setShowSideBar11(true);
        break;
      default:
        console.log("Helo");
        break;
    }
  };

  const handleMouseOut = (sidebar) => {
    switch (sidebar) {
      case "sideBar1":
        setShowSideBar1(false);
        break;
      case "sideBar2":
        setShowSideBar2(false);
        break;
      case "sideBar3":
        setShowSideBar3(false);
        break;
      case "sideBar4":
        setShowSideBar4(false);
        break;
      case "sideBar5":
        setShowSideBar5(false);
        break;
      case "sideBar6":
        setShowSideBar6(false);
        break;
      case "sideBar7":
        setShowSideBar7(false);
        break;
      case "sideBar8":
        setShowSideBar8(false);
        break;
      case "sideBar9":
        setShowSideBar9(false);
        break;
      case "sideBar10":
        setShowSideBar10(false);
        break;
      case "sideBar11":
        setShowSideBar11(false);
        break;
      default:
        console.log("Helo");
        break;
    }
  };

  return (
    <>
      <div className="cardContainer">
        <div className="sideBar">
          <ul>
            <li
              onMouseOver={() => handleMouseOver("sideBar1")}
              onMouseOut={() => handleMouseOut("sideBar1")}
            >
              Daily News
              {showSideBar1 && (
                <select className="sideBar_1" ref={sideBar1}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar2")}
              onMouseOut={() => handleMouseOut("sideBar2")}
            >
              Sports
              {showSideBar2 && (
                <select className="sideBar_2" ref={sideBar2}>
                  <option>Cricket-Section</option>
                  <option>Football-Section</option>
                  <option>Hocky-Section</option>
                  <option>Tennis-Section</option>
                  <option>IPL-Section</option>
                  <option>Olampic-Section</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar3")}
              onMouseOut={() => handleMouseOut("sideBar3")}
            >
              National News
              {showSideBar3 && (
                <select className="sideBar_3" ref={sideBar3}>
                  <option>National-Fairs</option>
                  <option>National-Culteral-Event</option>
                  <option>Social-Meetings</option>
                  <option>National-NGO</option>
                  <option>National-Drama</option>
                  <option>National-Awards</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar4")}
              onMouseOut={() => handleMouseOut("sideBar4")}
            >
              International News
              {showSideBar4 && (
                <select className="sideBar_4" ref={sideBar4}>
                  <option>International-Market</option>
                  <option>International-Cooprations</option>
                  <option>International-Meetings</option>
                  <option>International-Conflicts</option>
                  <option>International-Awards</option>
                  <option>International-Trety</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar5")}
              onMouseOut={() => handleMouseOut("sideBar5")}
            >
              Quick Updats
              {showSideBar5 && (
                <select className="sideBar_5" ref={sideBar5}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar6")}
              onMouseOut={() => handleMouseOut("sideBar6")}
            >
              Historical Facts
              {showSideBar6 && (
                <select className="sideBar_6" ref={sideBar6}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar7")}
              onMouseOut={() => handleMouseOut("sideBar7")}
            >
              Indian Monuments
              {showSideBar7 && (
                <select className="sideBar_7" ref={sideBar7}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar8")}
              onMouseOut={() => handleMouseOut("sideBar8")}
            >
              Defence Exercises
              {showSideBar8 && (
                <select className="sideBar_8" ref={sideBar8}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar9")}
              onMouseOut={() => handleMouseOut("sideBar9")}
            >
              Science & Technology
              {showSideBar9 && (
                <select className="sideBar_9" ref={sideBar9}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar10")}
              onMouseOut={() => handleMouseOut("sideBar10")}
            >
              Art & Culter
              {showSideBar10 && (
                <select className="sideBar_10" ref={sideBar10}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
            <li
              onMouseOver={() => handleMouseOver("sideBar11")}
              onMouseOut={() => handleMouseOut("sideBar11")}
            >
              Weather Report
              {showSideBar11 && (
                <select className="sideBar_11" ref={sideBar11}>
                  <option>Crime-Section</option>
                  <option>Entertainment-Section</option>
                  <option>Social-Affair</option>
                  <option>Socialmedia-Section</option>
                  <option>Viral-Video</option>
                  <option>Quick-Updats</option>
                </select>
              )}
            </li>
          </ul>
        </div>
        <div className="mainContent">
          <h1>Daily Summery</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto
          voluptatem nam laboriosam temporibus aperiam dolor, totam beatae,
          officia magni quisquam odit cupiditate accusamus, ut placeat explicabo
          possimus animi eveniet. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ab tenetur dolores voluptate quasi, aperiam minus
          laboriosam fugit, velit animi, non quia totam provident harum rerum
          earum commodi quod quam tempora doloremque minima aliquam iure
          aspernatur nostrum. Repellendus doloribus ducimus aliquid qui quo
          vitae sapiente maxime beatae? Reprehenderit, omnis quod. Molestias
          facilis qui suscipit debitis aliquid temporibus tempore, possimus in
          necessitatibus. Repellat officiis excepturi possimus maxime
          reiciendis. Laudantium, odio. Nulla voluptatum illo laborum aut
          provident mollitia possimus dolorum, cumque voluptatibus dolores ea
          eligendi soluta modi unde ratione dignissimos omnis temporibus enim
          in, necessitatibus explicabo saepe. Suscipit, nisi maxime recusandae
          consequuntur aliquid quasi! Soluta quos rem illo laborum, magnam
          facilis quasi maiores error corporis, quis consectetur numquam
          pariatur neque sit iusto architecto voluptate, ullam optio? Provident
          iste dolorem itaque repellendus earum consequuntur eos ab aut! Laborum
          quod sint ipsum eius eum omnis aliquam consequatur, maiores qui aut
          inventore magni quaerat beatae officiis ex vel. Doloribus blanditiis
          repudiandae quae, exercitationem debitis laborum? Soluta iure cumque
          nostrum eos facilis assumenda nobis suscipit modi vel veritatis
          laborum, eligendi voluptatem sint voluptates quis maiores ea
          consequatur aspernatur fugiat iste aut quas. Animi porro at ab
          veritatis adipisci, molestiae doloremque? Provident ut commodi quidem
          doloribus a necessitatibus! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Obcaecati minima eaque, eum quo quaerat quidem
          commodi, asperiores cumque perferendis architecto, aliquam iste
          repellendus earum. Reiciendis non tempora eum error debitis ullam
          eaque! Quod nulla iusto illo ipsam est omnis, amet ab expedita
          suscipit earum rerum laborum placeat obcaecati adipisci aliquam
          architecto doloremque? Iusto aperiam error nisi cupiditate quia
          officiis? Aspernatur libero, fugit dolores sunt repellendus dolor
          nesciunt quod deserunt repellat quo veritatis eaque ad in fugiat esse
          quidem nobis. Cupiditate autem, quod dicta minus vero perspiciatis
          voluptatibus rem officia ipsum quos doloremque mollitia similique
          obcaecati porro impedit repellat reprehenderit aut debitis non optio
          corrupti. Obcaecati nesciunt rerum dolorem alias ut repellat
          assumenda, quae necessitatibus exercitationem. Reiciendis, velit.
          Delectus placeat id suscipit enim nulla, ad optio voluptate saepe odio
          laborum natus? Reiciendis ipsam saepe cumque assumenda autem amet
          explicabo, ex quas aspernatur voluptates optio provident hic
          doloribus, earum molestias aliquid porro esse minima voluptatibus
          recusandae? Porro in voluptate voluptas minus totam ipsa, nihil
          laborum eaque deleniti cupiditate! Modi ex consequuntur, tempore
          mollitia ipsum unde magni veritatis rem consectetur nam vitae possimus
          quos facere officiis ullam inventore vero, quas doloribus.
        </div>
        <div className="sideContent">
          <fieldset>
            <label>
              <h3>Login-Form</h3>
            </label>
            <form action="">
              <strong>user-name/email-Id: </strong>
              <br />
              <input type="text" placeholder="ex-abc@gmail.com" /> <br /> <br />
              <strong>Password:</strong>
              <input type="password" value={password} onChange={handelChange} />
              <input type="button" value="Submmit" onClick={submmit} />
              <br /> <br />
              <h5>Forgrt Password?</h5> <br />
              <p>
                <h5>Note:</h5>
                <h6>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt, voluptate eos atque ullam at maiores.
                </h6>
              </p>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Card;
