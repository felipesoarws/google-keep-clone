import { useRef, useState, useReducer, useEffect } from "react";

// icons
import {
  BiSearchAlt2,
  BiCog,
  BiGridAlt,
  BiArrowBack,
  BiTrash,
} from "react-icons/bi";
import { BsArrowClockwise, BsFillGrid3X3GapFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { MdChecklistRtl } from "react-icons/md";
import { BsFillPinFill, BsPin } from "react-icons/bs";

// images
import google_keep_img from "./assets/icon.png";
import profile_img from "./assets/me.jpeg";

// css
import "./App.css";

function App() {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const searchMobileMenu = useRef(null);
  const searchInputMobileMenu = useRef(null);
  const searchInputDesktopMenu = useRef(null);
  const iconGridView = useRef(null);
  const iconListView = useRef(null);
  const notesDescInput = useRef(null);
  const notesTitleInput = useRef(null);
  const notesMenu = useRef(null);
  const notesMenuList = useRef(null);
  const notesMenuDetailed = useRef(null);
  const notesList = useRef(null);
  const notesList_1 = useRef(null);
  const notesCreatorContainer = useRef(null);
  const notesContainer = useRef(null);
  const notesPinnedList = useRef(null);
  const notesNotPinnedList = useRef(null);

  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState([]);

  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [notPinnedNotes, setNotPinnedNotes] = useState([]);

  useEffect(() => {
    setNotes(notes);
    updateNotes();
  }, [reducerValue]);

  const updateNotes = () => {
    const pinned = notes.filter((n) => n.pin == true);
    const notPinned = notes.filter((n) => n.pin != true);

    setPinnedNotes(pinned);
    setNotPinnedNotes(notPinned);
  };

  const pinNote = (id) => {
    const noteContent = notes[id - 1];

    if (noteContent.pin) {
      noteContent.pin = false;
    } else {
      noteContent.pin = true;
    }

    setNotes(notes);
    updateNotes();
    forceUpdate();
  };

  const createNotes = (title, desc, pin, type) => {
    const update = [
      ...notes,
      {
        id: notes.length + 1,
        title: title,
        desc: desc,
        pin: pin,
        type: type,
      },
    ];

    forceUpdate();
    setNotes(update);
  };

  const deleteNotes = (id) => {
    const newList = notes.filter((item) => item.id !== id);

    setNotes(newList);
    forceUpdate();
    console.log(notes);
  };

  const showListView = () => {
    iconListView.current.classList.add("disappear");
    iconGridView.current.classList.remove("disappear");

    listView();
    forceUpdate();
  };
  const showGridView = () => {
    iconGridView.current.classList.add("disappear");
    iconListView.current.classList.remove("disappear");

    gridView();
    forceUptade();
  };

  const toggleNotesListMenu = () => {
    notesMenu.current.classList.toggle("disappear");
    notesMenuDetailed.current.classList.toggle("show");
    notesMenuList.current.classList.toggle("margin");

    let title = notesTitleInput.current.value;
    let desc = notesDescInput.current.value;

    let descInputLength = notesDescInput.current.value.length;
    let titleInputLength = notesTitleInput.current.value.length;

    if (descInputLength > 0 || titleInputLength > 0) {
      createNotes(title, desc, false, "task");
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

  const gridView = () => {
    notesList.current.classList.remove("list_view");
    notesList_1.current.classList.remove("list_view");
    notesContainer.current.classList.remove("list_view");
    notesMenuList.current.classList.remove("list_view");
    notesPinnedList.current.classList.remove("list_view");
    notesNotPinnedList.current.classList.remove("list_view");
    notesCreatorContainer.current.classList.remove("list_view");

    notesPinnedList.current.classList.add("grid_view");
    notesNotPinnedList.current.classList.add("grid_view");
    notesMenuList.current.classList.add("grid_view");
    notesContainer.current.classList.add("grid_view");
    notesList.current.classList.add("grid_view");
    notesList_1.current.classList.add("grid_view");
    notesCreatorContainer.current.classList.add("grid_view");
  };

  const listView = () => {
    notesList.current.classList.add("list_view");
    notesList_1.current.classList.add("list_view");
    notesContainer.current.classList.add("list_view");
    notesMenuList.current.classList.add("list_view");
    notesPinnedList.current.classList.add("list_view");
    notesNotPinnedList.current.classList.add("list_view");
    notesNotPinnedList.current.classList.add("list_view");

    notesPinnedList.current.classList.remove("grid_view");
    notesNotPinnedList.current.classList.remove("grid_view");
    notesMenuList.current.classList.remove("grid_view");
    notesContainer.current.classList.remove("grid_view");
    notesList.current.classList.remove("grid_view");
    notesList_1.current.classList.remove("grid_view");
    notesList_1.current.classList.remove("grid_view");
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
                onChange={(e) => setSearch(e.target.value)}
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
                onChange={(e) => setSearch(e.target.value)}
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
                className="icon-grid"
                ref={iconGridView}
                onClick={() => showGridView()}
              >
                <BiGridAlt />
              </div>
              <div
                className="icon-list disappear"
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
        <div className="notes list_view" ref={notesContainer}>
          <div className="notes_creator" ref={notesCreatorContainer}>
            <form ref={notesMenu}>
              <input
                type="text"
                placeholder="Criar uma nota..."
                onClick={() => toggleNotesListMenu()}
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
              </div>

              <div className="s-line">
                <input
                  type="text"
                  placeholder="Criar uma nota..."
                  ref={notesDescInput}
                />
              </div>
              <div className="t-line">
                <div className="clone-note">
                  <button onClick={(e) => toggleNotesListMenu()}>Fechar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="notes_menu list_view" ref={notesMenuList}>
            <div className="notes_menu_pinned list_view" ref={notesPinnedList}>
              <div className="notes_pin_title">
                {pinnedNotes.length < 1 && <h1></h1>}
                {pinnedNotes.length > 0 && <h1>Marcadas</h1>}
              </div>
              <div className="list_view notes_list" ref={notesList}>
                {notes
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(search) ||
                          item.desc.toLowerCase().includes(search);
                  })
                  .map((item) => {
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
                              onClick={(e) => pinNote(item.id)}
                            >
                              <BsFillPinFill />
                            </div>
                          </div>
                          <div className="desc">
                            <p>{item.desc}</p>
                          </div>
                          <div
                            className={item.id + " note_delete"}
                            onClick={(e) => deleteNotes(item.id)}
                          >
                            <BiTrash />
                          </div>
                        </div>
                      );
                  })}
              </div>
            </div>
            <div
              className="notes_menu_not_pinned list_view"
              ref={notesNotPinnedList}
            >
              <div className="notes_pin_title">
                {notPinnedNotes.length > 0 && <h1>Outras</h1>}
                {notPinnedNotes.length < 1 && <h1></h1>}
              </div>
              <div className="list_view notes_list" ref={notesList_1}>
                {notes
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.title.toLowerCase().includes(search) ||
                          item.desc.toLowerCase().includes(search);
                  })
                  .map((item) => {
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
                              onClick={(e) => pinNote(item.id)}
                            >
                              <BsPin />
                            </div>
                          </div>
                          <div className="desc">
                            <p>{item.desc}</p>
                          </div>
                          <div
                            className={item.id + " note_delete"}
                            onClick={(e) => deleteNotes(item.id)}
                          >
                            <BiTrash />
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
