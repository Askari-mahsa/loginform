import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, Collapse, CardBody, Card } from "reactstrap";
import "./dashboard.css";
import Loading from "../../utils/Loading";
import { useNavigate } from "react-router";
import { Successalert } from "../../components/Alert/Alert";
import { callApi } from "../../services/callApi";
import { callAdminApi } from "../../services/callApi";
import Header from "../../components/Header/Header";
import toPersianDigits from "../../utils/NumberDic";
// import Profile from '../Profile/Profile';
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const [admin, setAdmin] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [datauser, setDatauser] = useState([]);
  const [deleteDialogSuccess, setDeleteDialogSuccess] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  let itemsPerPage = 10;

  function notfound() {
    navigate("/NotFound");
  }
  function search() {
    setIsLoading(true);
    try {
      callApi().then((res) => {
        setUsers(res.data.albums);
        setIsLoading(false);
      });
    } catch (errorMessage) {
      setErrorMessage("سرور قادر به پاسخگویی نیست.");
      setIsLoading(false);
    }
  }
  function adminsearch() {
    setIsLoading(true);
    try {
      callAdminApi().then((res) => {
        console.log("hghghg", res.data.musics);
        setDatauser(res.data.musics);
        setIsLoading(false);
      });
    } catch (errorMessage) {
      setErrorMessage("سرور قادر به پاسخگویی نیست.");
      setIsLoading(false);
    }
  }
  const Delete = (e, type) => {
    if (type === "member") {
      try {
        setUsers(users.filter((item) => item.id !== e));
        setDeleteDialogSuccess(true);
      } catch (error) {
        console.log("error in delete row", error);
        setDeleteDialogSuccess(false);
      }
    }
  };
  const DeleteUser = (e) => {
    setDatauser(datauser.filter((item) => item.id !== e));
    console.log("setDate", setDatauser);
    return datauser;
  };
  const memberprofile = () => {
    navigate("/Profile");
  };

  const ToggleCard = (text) => {
    setCollapse(!collapse);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDeleteDialogSuccess(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [deleteDialogSuccess]);

  const searchUser = () => {
    if (text !== "") {
      setUsers(users.filter((items) => items.username === text));
      if (setText === "") {
        search();
        setUsers(users);
      }
    } else {
      search();
      setUsers(users);
    }
  };
  useEffect(() => {
    search();
  }, []);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // function PaginatedItems({ itemsPerPage }) {
  //     const [currentItems, setCurrentItems] = useState(null);
  useEffect(() => {
    // Fetch items from another resources.

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(datauser.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datauser.length / itemsPerPage));
  }, [datauser, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % datauser.length;

    setItemOffset(newOffset);
  };

  // useEffect(() => {
  //   const endOffset = itemOffset + 10;
  //   setCurrentItems(datauser.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(datauser.length / 10));
  // }, [itemOffset]);

  // const handlePageClick =(event)=>
  // {
  //     const newOffset =(event.selected*10)% datauser.length;
  //     setItemOffset(newOffset);
  // };

  return (
    <>
      <Header />

      <div className="dashboard_nav-container">
        <div className="nav-side-dashboard">
          <Nav vertical>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-user"></i>پروفایل
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-group"></i>کاربران
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-cogs"></i>مدیریت پنل
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-laptop"></i>پروژه ها
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-tasks"></i> وظایف{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-random"></i> عملیات{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-quote-right"></i> گروه چت
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="N" onClick={notfound}>
                <i class="icon-file-alt"></i>گزارش ها{" "}
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="bodytable">
          {deleteDialogSuccess ? <Successalert /> : ""}
          <div className="admin-member-dashboard">
            <ul className="list-inline">
              <li>
                <a
                  className={`admin-tab ${admin && "active"}`}
                  onClick={() => {
                    adminsearch();
                    setAdmin(true);
                  }}
                >
                  ادمین
                </a>
              </li>
              <li>
                <a
                  className={`member-tab ${!admin && "active"}`}
                  onClick={() => {
                    search();
                    setAdmin(false);
                  }}
                >
                  اعضاء
                </a>
              </li>
            </ul>
            <div className="search-add-button">
              <button className="new-one-button" onClick={() => ToggleCard()}>
                {" "}
                جستجو <i class="icon-search"></i>
              </button>
              <button className="new-one-button1">اضافه کردن به لیست + </button>
            </div>
            <div className="title_dashboard">
              <div className="body-title-dashboard">
                <Collapse isOpen={collapse}>
                  <Card>
                    <CardBody>
                      <div className="submitbutton">
                        <input
                          className="search-input-collapse-dashboard"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          type="text"
                          placeholder="جستجوی نام کاربری"
                        ></input>
                        <button
                          className="collapse-search-button"
                          type="submit"
                          onClick={searchUser}
                        >
                          <i class="icon-search" id="button"></i>
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                  onPageChange={handlePageClick}{" "}
                </Collapse>
              </div>
            </div>

            <div className="total-bar-dashboard">
              {/* {admin ?<>{result}</> :<>{adminCount}</>} */}
            </div>

            <div className="error">{errorMessage}</div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th id="title">گیت ورودی</th>
                <th id="title">عملیات</th>
                <th id="title">نام کاربری</th>
                <th id="title">ایمیل</th>
                <th id="title">تلفن</th>
                <th id="title">شماره کاربری </th>
              </tr>
            </thead>
            {admin &&
              (isLoading ? (
                <Loading />
              ) : (
                currentItems &&
                currentItems.map((items, list) => {
                  return (
                    <tbody key={list}>
                      <tr>
                        <td>
                          <button
                            className="gitlogin"
                            onClick={() => memberprofile(items.id)}
                          >
                            ورود
                          </button>
                        </td>
                        <td>
                          <ul className="operation-field">
                            <a>
                              <i class="icon-pencil" value="items.id"></i>
                            </a>
                            <a>
                              <i
                                class="icon-trash"
                                onClick={(e) => DeleteUser(items.id, "admin")}
                              ></i>
                            </a>
                          </ul>
                        </td>
                        <td>{items.name}</td>
                        <td>{items.url}</td>
                        <td>{items.cover_url}</td>
                        <td
                          style={{
                            fontFamily: " 'Vazir', Arial, sans-serif",
                            fontWeight: "normal",
                          }}
                        >
                          {toPersianDigits(items.id)}
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ))}

            {!admin &&
              (isLoading ? (
                <Loading />
              ) : (
                users &&
                users.map((item, index) => {
                  return (
                    <tbody key={index}>
                      {console.log("firsttttttt")}
                      <tr>
                        <td>
                          <button
                            className="gitlogin"
                            onClick={() => memberprofile(item.id)}
                          >
                            ورود
                          </button>
                        </td>
                        <td>
                          <ul className="operation-field">
                            <a>
                              <i class="icon-pencil" value="items.id"></i>
                            </a>
                            <a>
                              <i
                                class="icon-trash"
                                onClick={() => {
                                  Delete(item.id, "member");
                                }}
                              ></i>
                            </a>
                          </ul>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.url}</td>
                        <td>{item.released_at}</td>
                        <td
                          style={{
                            fontFamily: " 'Vazir', Arial, sans-serif",
                            fontWeight: "normal",
                          }}
                        >
                          {toPersianDigits(item.rate)}
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ))}
          </table>
          {admin ? (
            <div
              className="paginate"
              onChange={() => {
                adminsearch();
                setAdmin(true);
              }}
            >
              <ReactPaginate
                // breakLabel="..."
                // nextLabel={">>"}
                // previousLabel={"<<"}
                // onPageChange={handlePageClick}
                // // pageLabelBuilder={page=>toPersianDigits}
                // pageRangeDisplayed={3}
                // // nextLable={"next>>"}

                // pageCount={pageCount}

                // containerClassName={"pagination"}
                // previousLinkClassName={"pagination_link"}
                // renderOnZeroPageCount={null}
                // activeClassName="activeClass"
                // nextClassName='page-item'
                // previousClassName='page-item'
                // // pageRangeDisplayed=""
                // pageClassName="page-item"
                // activeLinkClassName="page-link"
                // nextLinkClassName="next-link"
                // breakClassName='page-item'
                breakLabel="..."
                nextLabel={">>"}
                onPageChange={handlePageClick}
                pageLabelBuilder={(page) => toPersianDigits(page)}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={"<<"}
                renderOnZeroPageCount={null}
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* <Items currentItems={currentItems} />  */}
      </div>
    </>
  );
};

export default Dashboard;
