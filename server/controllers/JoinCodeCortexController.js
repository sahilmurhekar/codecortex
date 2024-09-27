const CodeCortexModel = require('../models/CodeCortex.js'); // Ensure the correct model file is used

// Function to handle team joining for CodeCortex
const joinCodeCortex = async (req, res) => {
    try {
        const { ParticipantName, RegNo, VITEmail, teamId, TeamName, teamStrength } = req.body;

        // Validate input
        if (!ParticipantName || !RegNo || !VITEmail || !teamId || !TeamName) {
            return res.status(400).json({ error: "Code Cortex: All fields are required" });
        }

        if (RegNo.length !== 9) {
            return res.status(400).json({ error: "Code Cortex: Registration number must be exactly 9 characters long" });
        }

        const existingRegNo = await CodeCortexModel.findOne({ TeamMembers: { $elemMatch: { RegNo } }}).exec();
        if (existingRegNo) {
            return res.status(400).json({ error: "Code Cortex: Participant with same Registration no. already registered." });
        }

        // Check if the team exists
        const team = await CodeCortexModel.findOne({ teamId }).exec();
        if (!team) {
            return res.status(400).json({ error: "Code Cortex: Invalid team ID" });
        }

        // Check if the team is full
        if (team.TeamMembers.length >= 4) {
            return res.status(400).json({ error: "Code Cortex: Team is already full" });
        }

        // Check if the participant is already registered
        const participantExists = team.TeamMembers.some(member => member.VITEmail === VITEmail);
        if (participantExists) {
            return res.status(400).json({ error: "Code Cortex: Participant is already registered in this team" });
        }

        // Add new participant to the team
        team.TeamMembers.push({
            ParticipantName,
            RegNo,
            VITEmail
        });

        // Save the updated team
        await team.save();

        // Send success response
        return res.status(200).json({
            success: true,
            message: 'Code Cortex: Joined team successfully',
            data: team
        });

    } catch (error) {
        console.error('Error in joinCodeCortex function:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Code Cortex: Validation error',
                errors: error.errors
            });
        }
        res.status(500).json({
            success: false,
            message: 'Code Cortex: An error occurred while processing the request',
            error: error.message
        });
    }
};

module.exports = {
    joinCodeCortex
};
