import { useFormik } from "formik";
import * as Yup from "yup";
import { useReviewStore } from "../stores/useReviewStore";

const AddProductReview = ({
  productId,
  handleSubmitButton,
}: {
  productId: number;
  handleSubmitButton: () => void;
}) => {
  const { addReview } = useReviewStore();

  const formik = useFormik({
    initialValues: {
      customerName: "",
      review: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string()
        .max(30, "Cannot exceed 30 characters.")
        .required("Required"),
      review: Yup.string()
        .max(150, "Cannot exceed 150 characters.")
        .required("Required"),
    }),
    onSubmit: (values) => {
      addReview(productId, values.customerName, values.review);
      handleSubmitButton();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        <label className="form-control">
          <div className="label label-text-alt">
            <span className="label-text-alt">Your name.</span>
            {formik.touched.customerName && formik.errors.customerName ? (
              <span className="label-text-alt text-error">
                *{formik.errors.customerName}
              </span>
            ) : null}
          </div>
          <input
            id="customerName"
            name="customerName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customerName}
            placeholder="Enter your name here."
            className="input input-bordered text-sm"
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
            className="textarea textarea-bordered h-24 text-sm"
            placeholder="Enter your review here."
          ></textarea>
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProductReview;
