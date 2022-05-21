import React from 'react'

const Slider=() => {
  return (
    <>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg mt-5">
        <div class="d-flex flex-row-reverse bd-highlight">
          <div class="p-2 bd-highlight"> </div>
          <div class="p-2 bd-highlight"> </div>
          <div class="p-2 bd-highlight">
            {' '}
            <button
              type="button"
              class="btn btn-outline-primary btn-sm mb-0"
            
            >
              Create
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img
                    src="../assets/img/home-decor-1.jpg"
                    alt="img-blur-shadow"
                    class="img-fluid shadow border-radius-xl"
                  />
                </a>
              </div>
              <div class="card-body p-3">
                {/* <p class="mb-0 text-sm">Project #2</p>
                      <a href="javascript:;">
                        <h5>
                          Modern
                        </h5>
                      </a> */}

                <div class="d-flex align-items-center justify-content-between">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm mb-0"
                    onClick={() => {
                      if (window.confirm('Delete the item?')) {
                      }
                    }}
                  >
                    Delete Slide
                  </button>
                  <div class="avatar-group mt-2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Elena Morison"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-1.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Ryan Milly"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-2.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Nick Daniel"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-3.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Peterson"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img
                    src="../assets/img/home-decor-1.jpg"
                    alt="img-blur-shadow"
                    class="img-fluid shadow border-radius-xl"
                  />
                </a>
              </div>
              <div class="card-body p-3">
                {/* <p class="mb-0 text-sm">Project #2</p>
                      <a href="javascript:;">
                        <h5>
                          Modern
                        </h5>
                      </a> */}

                <div class="d-flex align-items-center justify-content-between">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm mb-0"
                    onClick={() => {
                      if (window.confirm('Delete the item?')) {
                      }
                    }}
                  >
                    Delete Slide
                  </button>
                  <div class="avatar-group mt-2">
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Elena Morison"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-1.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Ryan Milly"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-2.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Nick Daniel"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-3.jpg"
                      />
                    </a>
                    <a
                      href="javascript:;"
                      class="avatar avatar-xs rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Peterson"
                    >
                      <img
                        alt="Image placeholder"
                        src="../assets/img/team-4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default Slider