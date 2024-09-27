const SurvivalModel = require('../models/survialuser'); // Ensure the correct model file is used

// Function to handle team joining
const joinTeam = async (req, res) => {
    try {
        const { ParticipantName, RegNo, VITEmail, teamId, TeamName, teamStrength } = req.body;

        // Validate input
        if (!ParticipantName || !RegNo || !VITEmail || !teamId || !TeamName) {
            return res.status(400).json({ error: "Survival Showdown: All fields are required" });
        }

        if (RegNo.length !== 9) {
            return res.status(400).json({ error: "Survival Showdown: Registration number must be exactly 9 characters long" });
        }

        const existingRegNo = await SurvivalModel.findOne({ TeamMembers: { $elemMatch: { RegNo } }}).exec();
        if (existingRegNo) {
            return res.status(400).json({ error: "Survival Showdown: Participant with same Registration no. already registered." });
        }

        // Check if the team exists
        const team = await SurvivalModel.findOne({ teamId }).exec();
        if (!team) {
            return res.status(400).json({ error: "Survival Showdown: Invalid team ID" });
        }

        // Check if the team is full
        if (team.TeamMembers.length >= 4) {
            return res.status(400).json({ error: "Survival Showdown: Team is already full." });
        }

        // Check if the participant is already registered
        const participantExists = team.TeamMembers.some(member => member.VITEmail === VITEmail);
        if (participantExists) {
            return res.status(400).json({ error: "Survival Showdown: Participant with this Email ID already registered in this team." });
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
            message: 'Survival Showdown: Joined team successfully',
            data: team
        });

    } catch (error) {
        console.error('Error in joinTeam function:', error);
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors
            });
        }
        res.status(500).json({
            success: false,
            message: 'Survival Showdown: An error occurred while processing the request',
            error: error.message
        });
    }
};

module.exports = {
    joinTeam
};
