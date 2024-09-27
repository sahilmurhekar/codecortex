import bg from "../images/bluegrid.png";
import { Button } from "./Button";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateTeam({eventName}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");

  // Generate random 5-digit number on component mount
  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(10000 + Math.random() * 90000).toString();  // Generate 5-digit number
      setRandomNumber(number);
    };

    generateRandomNumber();
  }, []);

  const [formData, setFormData] = useState({
    ParticipantName: "",
    RegNo: "",
    VITEmail: "",
    teamId: "",
    TeamName: "",
    teamStrength: null,
    ideaType: "",
    ideaTitle: "",
    ideaDescription: ""
  });

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      teamId: randomNumber  // Update teamId when randomNumber changes
    }));
  }, [randomNumber]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const updatedFormData = {
      ...formData,
      teamId: randomNumber // Ensure the teamId is updated before submission
    };
    axios.defaults.withCredentials = true;
    try {
      let response;
      if (eventName==="survival") {
        response = await axios.post('https://tam-gravitas-api.vercel.app/survival', updatedFormData);
      }
      else {
        response = await axios.post('https://tam-gravitas-api.vercel.app/createCortex', updatedFormData);
      }
      console.log('Response:', response.data);
  
      if (response.status === 201) {
        toast.success(response.data.message);
      } else if (response.status === 400) {
        toast.error(response.data.error);
      }
      else if (response.status === 500) {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.error);
      } else {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      // Reset the form fields after showing the toast (success or error)
      const newRandomNumber = Math.floor(10000 + Math.random() * 90000).toString();
      setRandomNumber(newRandomNumber);

      setFormData({
        ParticipantName: "",
        RegNo: "",
        VITEmail: "",
        teamId: newRandomNumber,
        TeamName: "",
        teamStrength: "",
        ideaType: "",
        ideaTitle: "",
        ideaDescription: ""
      });
    }
  };

  return (
    <>
      <div
        className="w-full min-h-screen bg-black bg-cover bg-center flex flex-col items-center text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-11/12 md:w-4/5 lg:w-4/6 bg-cardbg bg-opacity-70 mt-8 md:mt-12 p-4 flex flex-col items-center rounded-lg">
          <form className=" w-full max-w-3xl">
            <div className="flex flex-col md:flex-row mb-4 md:mb-6 p-3 mx-1">
              <div className="flex p-2 font-normal h-10 flex-1 mb-4 items-center justify-center md:mb-0 md:mr-2 md:justify-normal">
                <span className="bg-gradient-to-r  from-end to-end p-2  rounded-xl">
                  Team ID:
                </span>
                <span className="mx-3">{randomNumber}</span>
              </div>
              <input
                type="number"
                placeholder="No. of Team Members"
                name="teamStrength"
                value={formData.teamStrength}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2"
                required
              />
            </div>
            <div className="flex flex-col  md:flex-row mb-4 md:mb-6 p-3">
              <input
                type="text"
                placeholder="Participant Name"
                name="ParticipantName"
                value={formData.ParticipantName}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2"
                required
              />
              <input
                type="text"
                placeholder="Reg. No."
                name="RegNo"
                value={formData.RegNo}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4 md:mb-6 p-3">
              <input
                type="email"
                placeholder="VIT Email ID"
                name="VITEmail"
                value={formData.VITEmail}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2"
                required
              />
              <input
                type="text"
                placeholder="Team Name"
                name="TeamName"
                value={formData.TeamName}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2"
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-6 p-3">
              <div className="flex mb-4">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="ideaType"
                    value="sponsors"
                    checked={formData.ideaType === "sponsors"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Sponsors Idea
                </label>
                <label>
                  <input
                    type="radio"
                    name="ideaType"
                    value="open"
                    checked={formData.ideaType === "open"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Open Innovation
                </label>
              </div>
              <input
                type="text"
                placeholder="Idea Title (100 words)"
                name="ideaTitle"
                value={formData.ideaTitle}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4"
                maxLength={300}
                required
              />
              <textarea
                placeholder="Idea Description (500 words)"
                name="ideaDescription"
                value={formData.ideaDescription}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-32 flex-1"
                maxLength={1000}
                required
              />
            </div>

            <div className="flex m-4 justify-around p-6">
              <button
                type="button"
                onClick={handleOpenModal}
                className="bg-gradient-to-r from-start to-end font-light px-4 py-2 rounded-md  transform transition-transform duration-300 hover:-translate-y-2 text-white mx-3"
              >
                How to Fill?
              </button>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
              <Button what="Submit" extras="mx-3" onClick={handleSubmit} />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
