import React from "react";
import "./_features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faDeaf,
  faFileDownload,
  faFileExport,
  faLock,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="container">
      <div className="brand__header text-center m-auto">
        <h6 className="text-primary pt-5">Our Featuers</h6>
        <h4>Top Features To Manage Storage </h4>
        <p className="text-secondary">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, lorem quis.
        </p>
      </div>
      <div className="row offset-md-1 mt-5 pt-5">
        <div className="col-md-4 text-center feature__details">
          <div className="shadow p-2">
            <span className="logo__upload">
              <FontAwesomeIcon icon={faCloudUploadAlt} />
            </span>
            <h5 className="mt-3">Automatic Backups</h5>
            <p>
              This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
              velit er aliquet.Iean lorem ipsum ollcit in the easy tudin.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 shadow-sm text-center feature__details">
          <div className="shadow p-2">
            <span className="logo__access">
              <FontAwesomeIcon icon={faDeaf} />
            </span>
            <h5 className="mt-3">Remote Access</h5>
            <p>
              This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
              velit er aliquet.Iean lorem ipsum ollcit in the easy tudin.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center feature__details">
          <div className="shadow p-2">
            <span className="logo__share">
              <FontAwesomeIcon icon={faShare} />
            </span>
            <h5 className="mt-3">File Sharing</h5>
            <p>
              This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
              velit er aliquet.Iean lorem ipsum ollcit in the easy tudin.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center feature__details">
          <div className="shadow p-2">
            <span className="logo__security">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <h5 className="mt-3">File Security</h5>
            <p>
              This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
              velit er aliquet.Iean lorem ipsum ollcit in the easy tudin.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 shadow-sm text-center feature__details">
          <div className="shadow p-2">
            <span className="logo__backup">
              <FontAwesomeIcon icon={faFileExport} />
            </span>
            <h5 className="mt-3">Remote Access</h5>
            <p>
              This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
              velit er aliquet.Iean lorem ipsum ollcit in the easy tudin.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center feature__details">
          <div className="shadow p-2">
            <span className="logo__archive">
              <FontAwesomeIcon icon={faFileDownload} />
            </span>
            <h5 className="mt-3">File Sharing</h5>
            <p>
              This is Photoshop's version of Loem Ipum. Proin gravida nibh vel
              velit er aliquet.Iean lorem ipsum ollcit in the easy tudin.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
