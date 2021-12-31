function App() {
  return (
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="col-12">
                  <h2 className="content-header-title float-left mb-0">Colors</h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Colors
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="backcolor">
              <div className="row">
                <div className="col-12">
                  <div className="card background-color">
                    <div className="card-header">
                      <h4 className="card-title">Default Colors</h4>
                    </div>
                    <div className="card-content">
                      <div className="card-body mb-0">
                        <ul className="colors-list list-unstyled mb-0">
                          <li>
                            <i className="feather icon-chevrons-right"></i>Primary
                          </li>
                          <li>
                            <i className="feather icon-chevrons-right"></i>Success
                          </li>
                          <li>
                            <i className="feather icon-chevrons-right"></i>Danger
                          </li>
                          <li>
                            <i className="feather icon-chevrons-right"></i>Warning
                          </li>
                          <li>
                            <i className="feather icon-chevrons-right"></i>Info
                          </li>
                        </ul>
                        <div>For each color, we think has its functionality in the application as alerts of errors <b>(danger)</b>,
                          warnings to the user <b>(warning)</b>, communications of approval <b>(success)</b>, or main color of the
                          application <b>(primary)</b>.
                          <div className="d-flex justify-content-start flex-wrap">
                            <div className="text-center bg-primary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
                              <span className="align-middle">primary</span>
                            </div>
                            <div className="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
                              <span className="align-middle">success</span>
                            </div>
                            <div className="text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
                              <span className="align-middle">danger</span>
                            </div>
                            <div className="text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
                              <span className="align-middle">warning</span>
                            </div>
                            <div className="text-center bg-info colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow">
                              <span className="align-middle">info</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
}

export default App;
