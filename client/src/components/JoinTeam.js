import bg from "../images/bluegrid.png";
import { Button } from "./Button";
import Modal from "./Modal";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JoinTeam({ eventName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    ParticipantName: "",
    RegNo: "",
    VITEmail: "",
    teamId: "",
    TeamName: "",
    teamStrength: "",
    // Removed ideaType
    // Removed ideaTitle
    // Removed ideaDescription
  });

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
    axios.defaults.withCredentials = true;
    try {
      let response;
      if (eventName === "survival") {
        response = await axios.post('https://tam-gravitas-vit.vercel.app/joinTeam', formData);
      } else {
        response = await axios.post('https://tam-gravitas-vit.vercel.app/joinCortex', formData);
      }
      console.log('Response:', response.data);

      if (response.status === 200) {
        toast.success('Form submitted successfully!');
      } else if (response.status === 400) {
        toast.error(response.data.error);
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
      setFormData({
        ParticipantName: "",
        RegNo: "",
        VITEmail: "",
        teamId: "",
        TeamName: "",
        teamStrength: "",
        // Reset ideaType
        // Reset ideaTitle
        // Reset ideaDescription
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
              <input
                type="text"
                placeholder="Team ID"
                name="teamId"
                value={formData.teamId}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2 focus:bg-transparent focus:text-white active:bg-transparent"
                required
              />
              <input
                type="number"
                placeholder="No. of Team Members"
                name="teamStrength"
                value={formData.teamStrength}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2 focus:bg-transparent focus:text-white active:bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row mb-4 md:mb-6 p-3">
              <input
                type="text"
                placeholder="Participant Name"
                name="ParticipantName"
                value={formData.ParticipantName}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2 focus:bg-transparent focus:text-white active:bg-transparent"
                required
              />
              <input
                type="text"
                placeholder="Reg. No."
                name="RegNo"
                value={formData.RegNo}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2 focus:bg-transparent focus:text-white active:bg-transparent"
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
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 mb-4 md:mb-0 md:mr-2 focus:bg-transparent focus:text-white active:bg-transparent"
                required
              />
              <input
                type="text"
                placeholder="Team Name"
                name="TeamName"
                value={formData.TeamName}
                onChange={handleChange}
                className="bg-transparent border-b border-solid border-phcolor placeholder:text-phcolor font-extralight p-2 md:p-4 h-10 flex-1 md:ml-2 focus:bg-transparent focus:text-white active:bg-transparent"
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
