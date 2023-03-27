import { useRef } from "react";

// icons

import {
  BiMenu,
  BiSearchAlt2,
  BiCog,
  BiGridAlt,
  BiArrowBack,
  BiTrash,
  BiBell,BiPencil,BiArchiveIn
} from "react-icons/bi";
import { BsArrowClockwise, BsFillGrid3X3GapFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

// images
import google_keep_img from "./assets/icon.png";
import profile_img from "./assets/me.jpeg";

// css
import "./App.css";

function App() {
  const searchMobileMenu = useRef(null);
  const searchInputMobileMenu = useRef(null);
  const searchInputDesktopMenu = useRef(null);
  const iconGridView = useRef(null);
  const iconListView = useRef(null);
  const sideMenu = useRef(null);

  const showListView = () => {
    iconListView.current.classList.add("disappear");
    iconGridView.current.classList.remove("disappear");

    listView();
  };
  const showGridView = () => {
    iconGridView.current.classList.add("disappear");
    iconListView.current.classList.remove("disappear");

    gridView();
  };

  const toggleSideMenu = () => {
    sideMenu.current.classList.toggle("open");
  };

  const openSearchMenu = () => {
    searchMobileMenu.current.classList.remove("disappear");
  };

  const closeSearchMenu = () => {
    searchMobileMenu.current.classList.add("disappear");
  };

  const removeSearchInput = () => {
    searchInputMobileMenu.current.value = "";
    searchInputDesktopMenu.current.value = "";
    return;
  };

  return (
    <div className="App">
      <header>
        <div className="mobile_header">
          <div className="f-line">
            <div className="icon-menu" onClick={() => toggleSideMenu()}>
              <BiMenu />
            </div>
            <div className="icon-keep">
              <img src={google_keep_img} alt="" />
              <h2>Keep</h2>
            </div>
          </div>
          <div className="s-line">
            <div className="icon-search" onClick={() => openSearchMenu()}>
              <BiSearchAlt2 />
            </div>
            <div className="search disappear" ref={searchMobileMenu}>
              <div className="icon-back" onClick={() => closeSearchMenu()}>
                <BiArrowBack />
              </div>
              <input
                type="text"
                placeholder="Pesquisar"
                id=""
                ref={searchInputMobileMenu}
              />
              <div className="icon-delete" onClick={() => removeSearchInput()}>
                <FiX />
              </div>
            </div>
            <div className="icon-update">
              <BsArrowClockwise />
            </div>
            <div className="icon-config">
              <BiCog />
            </div>
            <div className="icon-grid">
              <BsFillGrid3X3GapFill />
            </div>
            <div className="icon-profile">
              <img src={profile_img} alt="" />
            </div>
          </div>
        </div>

        <div className="desktop_header">
          <div className="f-line">
            <div className="icon-menu" onClick={() => toggleSideMenu()}>
              <BiMenu />
            </div>
            <div className="icon-keep">
              <img src={google_keep_img} alt="" />
              <h2>Keep</h2>
            </div>
            <div className="search">
              <div className="icon-search">
                <BiSearchAlt2 />
              </div>
              <input
                type="text"
                placeholder="Pesquisar"
                ref={searchInputDesktopMenu}
              />
              <div className="icon-delete" onClick={() => removeSearchInput()}>
                <FiX />
              </div>
            </div>
          </div>
          <div className="s-line">
            <div className="icon-update">
              <BsArrowClockwise />
            </div>
            <div className="icons-grid-list">
              <div
                className="icon-grid disappear"
                ref={iconGridView}
                onClick={() => showGridView()}
              >
                <BiGridAlt />
              </div>
              <div
                className="icon-list"
                ref={iconListView}
                onClick={() => showListView()}
              >
                <CiGrid2H />
              </div>
            </div>

            <div className="icon-config">
              <BiCog />
            </div>
            <div className="icon-grid accounts">
              <BsFillGrid3X3GapFill />
            </div>
            <div className="icon-profile">
              <img src={profile_img} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="side_menu" ref={sideMenu}>
          <div className="itens_list">
            <div className="itens notes selected">
              <div className="icon selected ">
                <FaRegLightbulb />
              </div>
              <div className="itens_name">
                <h2>Notas</h2>
              </div>
            </div>
          

            <div className="itens remind">
              <div className="icon">
                <BiBell />
              </div>
              <div className="itens_name">
                <h2>Lembretes</h2>
              </div>
            </div>

            <div className="itens edit_marks">
              <div className="icon">
                <BiPencil />
              </div>
              <div className="itens_name">
                <h2>Editar marcadores</h2>
              </div>
            </div>

            <div className="itens archive">
              <div className="icon">
                <BiArchiveIn />
              </div>
              <div className="itens_name">
                <h2>Arquivo</h2>
              </div>
            </div>

            <div className="itens trash">
              <div className="icon">
                <BiTrash />
              </div>
              <div className="itens_name">
                <h2>Lixeira</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="notes">
          <div className="notes_creator">
            <input type="text" placeholder="Criar uma nota..." />
          </div>
          <div className="notes_list">

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
