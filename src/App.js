import './App.css';
// import maleSVG from './assets/male.svg';


const MaleSVG = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="0 0 221.2 500" enable-background="new 0 0 221.2 500">
    <g>
      <path id="Path_2275" fill="#DDDDDD" d="M157.7,94.8c0,26-21.1,47.1-47.1,47.1c-26,0-47.1-21.1-47.1-47.1s21.1-47.1,47.1-47.1
		c0,0,0,0,0,0C136.6,47.8,157.7,68.8,157.7,94.8z"/>
      <path id="Path_2276" fill="#DDDDDD" d="M215.3,304.6l-36.5-138.7c0-0.1,0-0.1-0.1-0.2c-1.2-6.2-6.6-10.7-12.9-10.7H55.4
		c-6.3,0-11.7,4.5-12.9,10.7c0,0,0,0.1-0.1,0.2L5.9,304.6c-2,7.8,2.6,15.7,10.4,17.8c7.8,2,15.7-2.6,17.8-10.4l29.5-112.2v62.7
		L34.8,371.6h28.7v109.9c0,10.2,8.3,18.5,18.5,18.5s18.5-8.3,18.5-18.5V371.8h20.1v109.7c0,10.2,8.3,18.5,18.5,18.5
		s18.5-8.3,18.5-18.5V371.8h28.7l-28.7-109.1v-62.9L187.2,312c2,7.8,10,12.4,17.8,10.4C212.7,320.3,217.3,312.3,215.3,304.6
		L215.3,304.6z"/>
    </g>
  </svg>
);
function App() {
  const malePaths = MaleSVG().props.children.props.children;
  const data = {
    boys: 20,
    girls: 80
  };

  const boysPercent = data.boys; // 20
  const girlsPercent = data.girls; // 80
  const total = 100;

  const boysToColor = Math.floor(boysPercent / total * malePaths.length);

  let coloredBoys = 0;
  let x = malePaths.map((path, i) => {
    if (coloredBoys < boysToColor || coloredBoys == 0) {
      coloredBoys++;
      return <path key={i} fill="red" d={path.props.d} />
    }
    return <path key={i} fill={path.props.fill} d={path.props.d} />
  });

  return (

    <div className="content-container">
      <header className="pb-4">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid px-md-3 px-0">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item">
                  <img src={require("./assets/ci_1.png")} width={80} height="80&quot;" alt="" />
                </li>
                <li className="nav-item">
                  <div className="vr" />
                </li>
                <li className="nav-item ">
                  <img src={require("./assets/ci_2.png")} width={75} height="75&quot;" alt="" />
                </li>
                <li className="nav-item main_title">
                  <a className="nav-link" href="#">الرئيسيه</a>
                </li>
              </ul>
            </div>
            <div className="input-group search-bar mr-0 mr-md-4 col-6 col-md-3">
              <div className="input-group-append">
                <img src={require("./assets/vi_26.png")} width={20} height="20&quot;" alt="" />
              </div>
              <input className="form-control py-2" type="text" placeholder="استعلام عن حاله مواليد او وفاه" id="example-search-input" />
            </div>
            <a className="navbar-brand" href="#">
              <img src={require("./assets/vi_27.png")} width={44} height="44&quot;" alt="" />
            </a>
          </div>
        </nav>
      </header>
      <div className="row information">
        <div className="right_menu col-2 d-none d-md-block">
          <div className="d-flex justify-content-between align-items-center" id="accordion">
            <div className="d-flex g-2 align-items-center">
              <img src={require("./assets/vi_8.png")} width={20} height={20} />
              <span>المواليد </span>
            </div>
            <img src={require("./assets/upload.png")} width={20} height={20} style={{ cursor: 'pointer' }} />
          </div>
          <div className="list">
            <span>تسجيل واقعة ميلاد</span>
            <span> تسجيل ساقط قيد ميلاد</span>
            <span>تسجيل ميلاد (معثور عليه)</span>
            <span>تسجيل ميلاد (ساقط قيد معثور
              (عليه)</span>
            <span>استعلام - تعديل واقعة الميلاد</span>
            <span>طلب تعديل واقعة ميلاد</span>
            <div className="vr-horizintal" />
          </div>
        </div>
        <div className="content_data col-md-10 col-12  py-5 pl-5">
          <div className="content_col">
            <div className="d-flex align-items-center  g-3">
              <div>
                <input id="checkIn" className="form-control" type="date" required />
              </div>
              <div className="d-flex align-items-center justify-content-center filter_btns">
                <div className="active">
                  <span className="all" />
                  الكل
                </div>
                <div>
                  <span className="not-confident" />
                  غير موثق
                </div>
                <div>
                  <span className="confident" />
                  موثق
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center  justify-content-between  people_data">
              <div className=" d-flex align-items-center">
                <img src={require("./assets/vi_8.png")} width={60} height={60} alt="" />
                <div className="col-data">
                  <h1>1000</h1>
                  <p className="text-muted"> عدد المواليد المدخلين</p>
                </div>
              </div>
              <div className=" d-flex align-items-center">
                <img src={require("./assets/vi_11.png")} width={60} height={60} alt="" />
                <div className="col-data">
                  <h1>1000</h1>
                  <p className="text-muted"> عدد الوفيات المدخلين</p>
                </div>
              </div>
              <div className=" d-flex align-items-center">
                <img src={require("./assets/vi_14.png")} width={60} height={60} alt="" />
                <div className="col-data">
                  <h1>1000</h1>
                  <p className="text-muted"> طلبات تعديل مقدمة</p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center calcultorSide">
              <div className="has_svg">
                <h2>النسبة بين الذكور والإناث للمواليد</h2>
                <div className="gender">
                  <div>
                    <h2>اناث</h2>
                    <img src={require("./assets/female.svg").default} width={200} height={200} className="change-color" />
                    <h2 className="percentage">11%</h2>
                  </div>
                  <div>
                    <h2>ذكور</h2>
                    <img src={require("./assets/male.svg").default} width={200} height={200} />
                    <h2 className="percentage">90%</h2>
                  </div>
                </div>
              </div>
              <div className="vr-custom d-md-block d-none" />
              <div className="has_svg">
                <h2> النسبة بين الذكور والإناث للوفيات</h2>
                <div className="gender">
                  <div>
                    <h2>اناث</h2>
                    <svg version="1.1" width={200} height={200} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 221.2 500" enableBackground="new 0 0 221.2 500" xmlSpace="preserve">
                      {x}
                    </svg>
                    {/* <img src={require("./assets/female.svg").default} width={200} height={200} /> */}
                    <h2 className="percentage">10%</h2>
                  </div>
                  <div>
                    <h2>ذكور</h2>
                    <img src={require("./assets/male.svg").default} width={200} height={200} />
                    <h2 className="percentage">90%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
