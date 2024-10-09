import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../config"; 
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import Firebase Auth functions

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Applications"), { // Use the correct Firestore collection name
        ...formData
      });
      alert("Application submitted successfully!");

      // Clear the input fields after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      });
    } catch (error) {
      console.log("Error submitting application:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Google:", user);
      alert("Signed in successfully!");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="apply-container d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundImage: 'url(../assets/Photos/your-background-image.jpg)', backgroundSize: 'cover' }}>
      <div className="apply-form bg-light p-4 rounded shadow">
        <h2 className="mb-4 text-center">Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit Application</button>
        </form>
        <button className="btn btn-secondary w-100 mt-3" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Apply;
