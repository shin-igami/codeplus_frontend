import styles from "../styles/menu.module.css";
import React,{useEffect,useState} from "react";
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faBullhorn,
  faClipboardCheck,
  faMessage,
  faVenus,
  faSquarePollVertical,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function Menubar({users}) {
 

  
  return (
    <div className={styles.menubox}>
      <div className={styles.logo}>CodePlus</div>
      <div>
        <button className={styles.menubutton}>
          <NavLink to ="./"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faBullhorn} className={styles.icon} />
              </span>
              Announcement
            </div>
          </NavLink>
        </button>
        <button className={styles.menubutton}>
          <NavLink to ="./Questions"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon
                  icon={faClipboardCheck}
                  className={styles.icon}
                />
              </span>
              Todo-List
            </div>
          </NavLink>
        </button>
        <button className={styles.menubutton}>
          <NavLink to ="./Discussions"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faMessage} className={styles.icon} />
              </span>
              Discussions
            </div>
          </NavLink>
        </button>
        <button className={styles.menubutton}>
          <NavLink to ="./WomenDes"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faVenus} className={styles.icon} />
              </span>
              Girls Community
            </div>
          </NavLink>
        </button>
        <button className={styles.menubutton}>
          <NavLink to="./Leaderboard"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon
                  icon={faSquarePollVertical}
                  className={styles.icon}
                />
              </span>
              Leaderboard
            </div>
          </NavLink>
        </button>
        <button className={styles.menubutton}>
          <NavLink to="./Lockout" className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
              </span>
              Lockout
            </div>
          </NavLink>
        </button>
        {users.isAdmin === true ? 
        <div>
        <button className={styles.menubutton}>
          <NavLink to="./ManageQuestions"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
              </span>
                Manage Questions
            </div>
          </NavLink>
        </button>
        <button className={styles.menubutton}>
          <NavLink to="./ManagePosts"  className={styles.navlink}>
            <div className={styles.menucontent}>
              <span style={{ marginRight: "20px" }}>
                <FontAwesomeIcon icon={faUserGroup} className={styles.icon} />
              </span>
                Manage Posts
            </div>
          </NavLink>
        </button></div>
        : <span></span>
}
      </div>
      <div className={styles.footer}>
        <div></div>
        <FontAwesomeIcon icon={faCopyright} className={styles.iconi} />
        <span className={styles.span}>Developed by old freshers</span>
      </div>
    </div>
  );
}