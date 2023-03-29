import { useRef, useState, useReducer, useEffect } from "react";

// icons
import { BiSearchAlt2, BiCog, BiGridAlt, BiArrowBack } from "react-icons/bi";
import { BsArrowClockwise, BsFillGrid3X3GapFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { MdChecklistRtl, MdOutlineColorLens } from "react-icons/md";
import { BsFillPinFill } from "react-icons/bs";

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
  const notesDescInput = useRef(null);
  const notesTitleInput = useRef(null);
  const notesMenu = useRef(null);
  const notesMenuDetailed = useRef(null);
  const notesList = useRef(null);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "teste",
      desc: "teste",
      pin: false,
    },
  ]);

  const [reducerValue, forceUptade] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setNotes(notes);
  }, [reducerValue]);

  const pinNote = (e) => {
    const idNoteElement = e.target.parentElement;
    const noteContent = notes[idNoteElement.classList[0] - 1];

    if (noteContent.pin) {
      noteContent.pin = false;
    } else {
      noteContent.pin = true;
    }

    setNotes(notes);
    forceUptade();
  };

  const uptadeNotes = (title, desc, pin) => {
    const update = [
      ...notes,
      {
        id: notes.length + 1,
        title: title,
        desc: desc,
        pin: pin,
      },
    ];

    setNotes(update);
  };

  const showListView = () => {
    iconListView.current.classList.add("disappear");
    iconGridView.current.classList.remove("disappear");

    listView();
    forceUptade();
  };
  const showGridView = () => {
    iconGridView.current.classList.add("disappear");
    iconListView.current.classList.remove("disappear");

    gridView();
    forceUptade();
  };

  const toggleNotesMenu = () => {
    notesMenu.current.classList.toggle("disappear");
    notesMenuDetailed.current.classList.toggle("show");
    notesList.current.classList.toggle("margin");

    let title = notesTitleInput.current.value;
    let desc = notesDescInput.current.value;

    let descInputLength = notesDescInput.current.value.length;
    let titleInputLength = notesTitleInput.current.value.length;

    if (descInputLength > 1 || titleInputLength > 1) {
      uptadeNotes(title, desc);
    }

    notesDescInput.current.value = "";
    notesTitleInput.current.value = "";
    return;
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
        <div className="notes">
          <div className="notes_creator">
            <form ref={notesMenu}>
              <input
                type="text"
                placeholder="Criar uma nota..."
                onClick={() => toggleNotesMenu()}
              />
              <MdChecklistRtl />
            </form>
            <div className="notes_creator_detailed" ref={notesMenuDetailed}>
              <div className="f-line">
                <div className="note_title">
                  <input
                    type="text"
                    placeholder="Título"
                    ref={notesTitleInput}
                  />
                </div>
                <div className="note_fixer">
                  <BsFillPinFill />
                </div>
              </div>

              <div className="s-line">
                <input
                  type="text"
                  placeholder="Criar uma nota..."
                  ref={notesDescInput}
                />
              </div>
              <div className="t-line">
                <MdOutlineColorLens />
                <div className="clone-note">
                  <button onClick={(e) => toggleNotesMenu(this)}>Fechar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="notes_menu" ref={notesList}>
            <div className="notes_menu_pinned">
              <div className="notes_pin_title">
                <h1>Marcadas</h1>
              </div>
              <div className="list_view notes_list">
                {notes.map((item) => {
                  if (item.pin)
                    return (
                      <div
                        className={item.id + " note list_view"}
                        key={item.id}
                      >
                        <div className={item.id + " title"}>
                          <h1>{item.title}</h1>
                          <div
                            className={item.id + " note_fixer"}
                            onClick={pinNote}
                          >
                            <BsFillPinFill />
                          </div>
                        </div>
                        <div className="desc">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
            <div className="notes_menu_not_pinned">
              <div className="notes_pin_title">
                <h1>Outras</h1>
              </div>
              <div className="list_view notes_list" ref={notesList}>
                {notes.map((item) => {
                  if (!item.pin)
                    return (
                      <div
                        className={item.id + " note list_view"}
                        key={item.id}
                      >
                        <div className={item.id + " title"}>
                          <h1>{item.title}</h1>
                          <div
                            className={item.id + " note_fixer"}
                            onClick={pinNote}
                          >
                            <BsFillPinFill />
                          </div>
                        </div>
                        <div className="desc">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
