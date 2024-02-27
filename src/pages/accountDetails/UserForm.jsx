import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../common/formValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../common/GlobalContext";
import Users from "../login/Users";
import { Alert } from "@mui/material";
import { useState } from "react";

function UserForm() {
  const {
    currentUser,
    setCurrentUser,
    isEditingForm,
    setIsEditingForm,
    tempUser,
    setTempUser,
  } = useGlobalContext();

  const [isFormSubmitSuccessful, setIsFormSubmitSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      BusinessName: tempUser.BusinessName,
      BusinessStructure: tempUser.BusinessStructure,
      BusinessStructureDescription: tempUser.BusinessStructureDescription,
      ABN: tempUser.ABN,
      FirstName: tempUser.FirstName,
      Surname: tempUser.Surname,
      Email: tempUser.Email,
      DOB: tempUser.DOB,
      Password: tempUser.Password,
      ConfirmPassword: tempUser.ConfirmPassword,
    },
  });

  const editForm = (e) => {
    e.preventDefault();
    setIsEditingForm(true);
  };

  const cancelEdit = () => {
    setIsEditingForm(false);
    setTempUser(currentUser);
  };

  const onSubmit = async (e) => {
    let bsd = e.BusinessStructureDescription;
    if (e.BusinessStructure !== "Other") {
      bsd = "";
    }

    let formData = {
      BusinessName: e.BusinessName,
      BusinessStructure: e.BusinessStructure,
      BusinessStructureDescription: bsd,
      ABN: e.ABN,
      FirstName: e.FirstName,
      Surname: e.Surname,
      Email: e.Email,
      DOB: e.DOB,
      Password: e.Password,
      ConfirmPassword: e.ConfirmPassword,
    };
    const isValid = await formSchema.isValid(formData);

    if (isValid) {
      setCurrentUser(tempUser);
      setIsEditingForm(false);
      setIsFormSubmitSuccessful(true);
      setIsError(false);
      if (!currentUser) {
        navigate("/home");
      }
    } else {
      setIsEditingForm(true);
      setIsError(true);
      console.log("Incorrect input");
    }
  };

  const handleChange = (e) => {
    let newUser = {
      ...tempUser,
      [e.target.name]: e.target.value,
    };
    if (newUser.BusinessStructure !== "Other") {
      newUser.BusinessStructureDescription = "";
    }
    setTempUser(newUser);
  };

  return (
    <div>
      <form>
        {/* Alert  */}
        <div className="AlertContainer">
          {isFormSubmitSuccessful && (
            <Alert
              onClose={() => {
                setIsFormSubmitSuccessful(false);
              }}
            >
              Update successful.
            </Alert>
          )}
        </div>
        <div className="AlertContainer">
          {isError && (
            <Alert
              severity="warning"
              onClose={() => {
                setIsError(false);
              }}
            >
              The form contains error(s). Please review and submit again. You
              can hover over each input field to view the requirement.
            </Alert>
          )}
        </div>

        <fieldset>
          <legend>Business Details</legend>

          {/* Business Name */}
          <div className="form-field">
            <label htmlFor="BusinessName">Business Name: </label>
            <input
              type="text"
              id="BusinessName"
              name="BusinessName"
              placeholder="Business Name"
              disabled={!isEditingForm}
              value={tempUser.BusinessName}
              maxLength={100}
              required
              {...register("BusinessName", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.BusinessName?.message}</p>
          </div>

          {/* Business structure */}
          <div className="form-field">
            <label htmlFor="BusinesStructure">Business Structure: </label>
            <select
              id="BusinessStructure"
              name="BusinessStructure"
              title="Please select one"
              disabled={!isEditingForm}
              value={tempUser.BusinessStructure}
              {...register("BusinessStructure", {
                onChange: (e) => handleChange(e),
              })}
            >
              <option value="">-- Please select --</option>
              <option value="Company">Company</option>
              <option value="SoleTrader">Sole Trader</option>
              <option value="Partnership">Partnership</option>
              <option value="Trustee">Trustee</option>
              <option value="Other">Other</option>
            </select>
            <p className="error-message">{errors.BusinessStructure?.message}</p>
          </div>

          {/* Business structure description */}
          {tempUser.BusinessStructure == "Other" && (
            <div className="form-field">
              <label htmlFor="BusinessStructureDescription">
                Business Structure Description
              </label>
              <textarea
                id="BusinessStructureDescription"
                name="BusinessStructureDescription"
                title="Mandatory if business structure 'Other' is selected. Maximum length allowed is 100 letters"
                value={tempUser.BusinessStructureDescription}
                disabled={!isEditingForm}
                placeholder="Please enter a description for the business structure"
                {...register("BusinessStructureDescription", {
                  onChange: (e) => handleChange(e),
                })}
              />
              <p className="error-message">
                {errors.BusinessStructureDescription?.message}
              </p>
            </div>
          )}

          {/* ABN */}
          <div className="form-field">
            <label htmlFor="ABN">ABN: </label>
            <input
              type="text"
              id="ABN"
              name="ABN"
              placeholder="ABN"
              disabled={!isEditingForm}
              value={tempUser.ABN}
              {...register("ABN", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.ABN?.message}</p>
          </div>
        </fieldset>

        <fieldset>
          <legend>User Details</legend>

          {/* First Name */}
          <div className="form-field">
            <label htmlFor="FirstName">First Name: </label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              disabled={!isEditingForm}
              value={tempUser.FirstName}
              {...register("FirstName", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.FirstName?.message}</p>
          </div>

          {/* Surname */}
          <div className="form-field">
            <label htmlFor="Surname">Surname: </label>
            <input
              type="text"
              id="Surname"
              name="Surname"
              placeholder="Surname"
              disabled={!isEditingForm}
              value={tempUser.Surname}
              {...register("Surname", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.Surname?.message}</p>
          </div>

          {/* Email */}
          <div className="form-field">
            <label htmlFor="Email">Email address: </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email address"
              disabled={!isEditingForm}
              value={tempUser.Email}
              {...register("Email", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.Email?.message}</p>
          </div>

          {/* DOB */}
          <div className="form-field">
            <label htmlFor="DOB">Date of Birth: </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              disabled={!isEditingForm}
              value={tempUser.DOB}
              max={new Date().toISOString().slice(0, -8).split("T")[0]}
              {...register("DOB", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.DOB?.message}</p>
          </div>

          {/* Setting max date to today: https://stackoverflow.com/questions/67423091/react-jsx-add-min-date-time-to-datetime-local-input */}

          {/* Password */}
          <div className="form-field">
            <label htmlFor="Password">Password: </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              disabled={!isEditingForm}
              value={tempUser.Password}
              {...register("Password", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.Password?.message}</p>
          </div>

          {/* Confirm password */}
          <div className="form-field">
            <label htmlFor="ConfirmPassword">Confirm password: </label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              placeholder="Confirm password"
              disabled={!isEditingForm}
              value={currentUser && tempUser.ConfirmPassword}
              {...register("ConfirmPassword", {
                onChange: (e) => handleChange(e),
              })}
            />
            <p className="error-message">{errors.ConfirmPassword?.message}</p>
          </div>
        </fieldset>

        {/* buttons */}
        {currentUser && !isEditingForm ? (
          <div className="btn-group">
            <button className="action-btn" type="button" onClick={editForm}>
              Edit
            </button>
          </div>
        ) : currentUser && isEditingForm ? (
          <div className="btn-group">
            <button className="cancel-btn" type="button" onClick={cancelEdit}>
              Cancel
            </button>
            <button
              type="submit"
              className="action-btn"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        ) : !currentUser ? (
          <div className="btn-group">
            <Link to="/" className="cancel-btn">
              Cancel
            </Link>
            <button
              type="submit"
              className="action-btn"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default UserForm;
