import React, { useContext, useEffect } from "react";
import { LoadingContext } from "../store/Store";
import {Link } from "react-router-dom";

function AddWorkspace() {
  const [, setLoading] = useContext(LoadingContext);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
              
                <form className="">
                  <div className="form-group">
                  <h3 className="card-title font-16 mt-0">Workspace Name</h3>

                    <p className="text-muted m-b-15">A label for your workspace.</p>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder=""
                    />
                  </div>

                  <div className="form-group">
                  <h3 className="card-title font-16 mt-0">Workspace Password</h3>
                   
                    <p className="text-muted m-b-15">The password that you will give your devs to access the workspace</p>
                    <input
                      type="text"
                      className="form-control"
                      required=""
                      placeholder=""
                    />
                  </div>
                  
                  <div className="form-group">
                  <h3 className="card-title font-16 mt-0">About Workspace</h3>
                    <p className="text-muted m-b-15">A short description for your workspace.</p>

                    <div>
                      <textarea
                        required=""
                        className="form-control"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div>
                      <button
                        type="submit"
                        className="btn btn-secondary active waves-effect waves-light mr-1"
                      >
                        Create Workspace
                      </button>{" "}
                      <Link
                      to="/workspaces"
                      onClick={() => setLoading(true)}
                        className="btn btn-outline-secondary waves-effect"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddWorkspace;
