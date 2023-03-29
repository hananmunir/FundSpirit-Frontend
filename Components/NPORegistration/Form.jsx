import React, { useState } from "react";
import styles from "./index.module.css";
import { Form as BootstrapForm, Button } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const initialState = {
  name: "",
  category: "",
  email: "",
  address: "",
  website: "",
  description: "",
  logo: "",
  coverImage: "",
  secp: "",
  secpCert: "",
  ceoName: "",
  ceoEmail: "",
  ceoPhone: "",
  goals: "",
  RequestedBy: "",
  foundThrough: "",
};

const FormTitle = ({ step, totalSteps }) => {
  let title;

  switch (step) {
    case 1:
      title = "Step 1 : Introduction";
      break;
    case 2:
      title = "Step 2 : Purpose and Values";
      break;
    case 3:
      title = "Step 3 : Supporting Details";
      break;
    case 4:
      title = "Step 4 : Just a few more details";
      break;
    default:
      title = "Default Title";
  }

  return (
    <span
      style={{
        fontWeight: "600",
      }}
      className='mt-5 fs-4 '
    >
      {title}
    </span>
  );
};
export default function Form() {
  const [formData, setFormData] = useState(initialState);
  const [step, setStep] = useState(1);
  const TOTAL_STEPS = 4;

  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='d-flex flex-column'>
      <span
        className='pt-4 px-4'
        style={{
          marginLeft: "auto",
          color: "#6a6c6d",
        }}
      >
        Already have an account?{" "}
        <a
          href='/login'
          style={{
            textDecoration: "none",
          }}
        >
          Login
        </a>
      </span>

      <div className='d-flex flex-column mt-5 pt-5'>
        <span className={styles.headerTitle}>Join Us!</span>
        <span className={styles.headerSubtitle}>
          Create an account to start fundraising
        </span>
      </div>
      <div className='mt-3'>
        <FormTitle step={step} totalSteps={TOTAL_STEPS} />
      </div>
      <div
        style={{
          width: "90%",
        }}
      >
        {step === 1 && (
          <BootstrapForm className='mt-2'>
            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Name
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='text'
                placeholder='Enter Name'
                value={formData.name}
                name='name'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-3' controlId='formCategory'>
              <BootstrapForm.Label>Primary Category</BootstrapForm.Label>
              <BootstrapForm.Control
                as='select'
                required
                value={formData.category}
                name='category'
                onChange={(event) => handleInputChange(event)}
              >
                <option value=''>Select category</option>
                <option value='food'>Food</option>
                <option value='clothing'>Clothing</option>
                <option value='shelter'>Shelter</option>
                <option value='education'>Education</option>
                <option value='health'>Health</option>
                <option value='other'>Other</option>
              </BootstrapForm.Control>
            </BootstrapForm.Group>

            <BootstrapForm.Group className='mt-3' controlId='formBasicEmail'>
              <BootstrapForm.Label className={styles.formLabel}>
                Official Email address
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='email'
                placeholder='Enter email'
                value={formData.email}
                name='email'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Address
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='text'
                placeholder='Organization Address'
                value={formData.address}
                name='address'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Official Website
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='text'
                placeholder='Enter Website URL'
                value={formData.website}
                name='website'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
          </BootstrapForm>
        )}

        {step === 2 && (
          <BootstrapForm className='mt-2'>
            <BootstrapForm.Group className='mt-2' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Description
              </BootstrapForm.Label>
              <BootstrapForm.Control
                placeholder='Describe your organization'
                value={formData.description}
                //increase height
                as='textarea'
                rows={4}
                name='description'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-2' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Goals
              </BootstrapForm.Label>
              <BootstrapForm.Control
                placeholder='What are your goals'
                value={formData.description}
                //increase height
                as='textarea'
                rows={4}
                name='goals'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-2' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Logo
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='file'
                placeholder='Organization Logo'
                value={formData.logo}
                name='logo'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-2' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Cover Image
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='file'
                placeholder='Organization Cover Image'
                value={formData.coverImage}
                name='coverImage'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
          </BootstrapForm>
        )}

        {step === 3 && (
          <BootstrapForm className='mt-2'>
            <BootstrapForm.Group className='mt-2' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                SECP Number
              </BootstrapForm.Label>
              <BootstrapForm.Control
                placeholder='Enter SECP Number'
                value={formData.secp}
                name='secp'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-2' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                SECP Certification
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='file'
                placeholder='SECP Certification'
                value={formData.secpCert}
                name='secpCert'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
          </BootstrapForm>
        )}
        {step === 4 && (
          <BootstrapForm className='mt-2'>
            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                CEO Name
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='text'
                placeholder="Enter CEO's Name"
                value={formData.ceoName}
                name='ceoName'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                CEO Email
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='email'
                placeholder="Enter CEO's Email"
                value={formData.ceoEmail}
                name='ceoEmail'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                CEO Phone
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='text'
                placeholder="Enter CEO's Phone"
                value={formData.ceoPhone}
                name='ceoPhone'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-3' controlId='formBasicPassword'>
              <BootstrapForm.Label className={styles.formLabel}>
                Requested By
              </BootstrapForm.Label>
              <BootstrapForm.Control
                type='text'
                placeholder='Enter Your Name'
                value={formData.RequestedBy}
                name='RequestedBy'
                onChange={(event) => handleInputChange(event)}
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group className='mt-3' controlId='formCategory'>
              <BootstrapForm.Label>
                Where Did You Heard About Us?
              </BootstrapForm.Label>
              <BootstrapForm.Control
                as='select'
                required
                value={formData.category}
                name='category'
                onChange={(event) => handleInputChange(event)}
              >
                <option value=''>Select category</option>
                <option value='Social Media'>Social Media</option>
                <option value='Friends'>Friends</option>
                <option value='Main Stream Media'>Main Stream Media</option>
                <option value='Other'>Other</option>
              </BootstrapForm.Control>
            </BootstrapForm.Group>
          </BootstrapForm>
        )}
      </div>
      <div
        style={{
          width: "45%",
        }}
        className='d-flex flex-row  ms-auto me-5 pe-3 mt-4 justify-content-end'
      >
        {step > 1 && (
          <Button
            style={{
              width: "8rem",
            }}
            onClick={handleBack}
          >
            <AiOutlineArrowLeft className='me-2' />
            <span>Previous</span>
          </Button>
        )}

        {step !== TOTAL_STEPS && (
          <Button
            style={{
              width: "8rem",
            }}
            className='ms-3'
            onClick={handleNext}
          >
            Next
            <AiOutlineArrowRight className='ms-2' />
          </Button>
        )}

        {step === TOTAL_STEPS && (
          <Button
            style={{
              width: "8rem",
            }}
            className='ms-3'
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}
