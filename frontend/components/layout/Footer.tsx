import React, { useEffect, useState } from "react";
import tippy from "tippy.js";
import { useFormik } from "formik";
import { API } from "../../api/axios";
import * as Yup from "yup";
import { toast } from "react-toastify";

// components
import Link from "next/link";

const Footer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required("Email is required, Enter your Email")
          .email("Email is invaled")
          .max(100, "Email should at most 100 characters long"),
      }),
      onSubmit: async (data) => {
        try {
          setLoading(true);
          console.log(data);
          const res = await API.put("/subscribers", data);
          console.log(res.data); // toustify
          setLoading(false);
          toast.success("successfully subscribed 👍🎉");
          values.email = "";
        } catch (err: any) {
          console.error(err);
          if (err.response.status == 406) {
            toast.info("Your Email is Already Exists 😅 ");
            values.email = "";
          } else if (err.response.status == 407) {
            toast.error("Invalid Email Entered ✍️");
          } else {
            toast.error("Internal Server Error ⚠️");
          }
          setLoading(false);
        }
      },
    });
  useEffect(() => {
    tippy(".social-links a", {
      theme: "light",
    });
  }, []);

  return (
    <React.Fragment>
      <footer id="footer" className="bg-white">
        <div className="footer-top">
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h5 className="text-muted">
                  Subscribe to get updated when new things get released!
                </h5>
              </div>
            </div>
            <div
              id="subscribe"
              className="row footer-newsletter justify-content-center"
            >
              <div className="col-lg-6">
                <form onSubmit={handleSubmit} role="form">
                  <input
                    value={values.email}
                    placeholder="Enter your Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    name="email"
                  />
                  <button
                    type="submit"
                    className="subscribe-button"
                    disabled={loading}
                  >
                    {!loading ? "subscribe" : "loading..."}
                  </button>
                </form>
                {touched.email && errors.email ? (
                  <React.Fragment>
                    <p className="subscribe-error">
                      <i className="bi bi-exclamation-circle-fill text-danger d-inline me-2"></i>
                      {errors.email}
                    </p>
                  </React.Fragment>


                ) : null}
              </div>
            </div>

            <div className="social-links">
              <a
                href={process.env.discord}
                className="discord"
                target="_blank"
                rel="noreferrer"
                data-tippy-content="join me in Discord server"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                href={process.env.facebook}
                className="facebook"
                target="_blank"
                rel="noreferrer"
                data-tippy-content="Follow me in Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={process.env.instagram}
                className="instagram"
                target="_blank"
                rel="noreferrer"
                data-tippy-content="Follow me in Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href={process.env.github}
                className="github"
                target="_blank"
                rel="noreferrer"
                data-tippy-content="Follow me in Github"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="d-flex align-items-end justify-content-center flex-wrap list-unstyled">
            <li>
              <Link href="/">
                <a className="text-muted pe-5">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className="text-muted pe-5">Digtal Services</a>
              </Link>
            </li>
            <li>
              <Link href="/docs">
                <a className="text-muted pe-5">Documents</a>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <a className="text-muted pe-5">Contacts</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Guilherme Abel</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href={process.env.github} target="_blank" rel="noreferrer">
             GuilhermeAbel
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
