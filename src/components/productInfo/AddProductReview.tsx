import { useFormik } from "formik";
import * as Yup from "yup";

const AddProductReview = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      review: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Cannot exceed 30 characters.")
        .required("Required"),
      review: Yup.string()
        .max(150, "Cannot exceed 150 characters.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <label className="form-control">
        <div className="label label-text-alt">
          <span className="label-text-alt">Your name.</span>
          {formik.touched.name && formik.errors.name ? (
            <span className="label-text-alt text-error">
              *{formik.errors.name}
            </span>
          ) : null}
        </div>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter your name here."
          className="input input-bordered"
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text-alt">Your review.</span>
          {formik.touched.review && formik.errors.review ? (
            <span className="label-text-alt text-error">
              *{formik.errors.review}
            </span>
          ) : null}
        </div>
        <textarea
          id="review"
          name="review"
          typeof="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="textarea textarea-bordered h-24"
          placeholder="Enter your review here."
        ></textarea>
      </label>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddProductReview;
