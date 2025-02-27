const Adoption = require('../models/adoptionModel'); // Adjust path as necessary
const asyncHandler = require('express-async-handler');

// Adoption Controller
const adoptionController = {
    // Create a new adoption application
    createApplication: asyncHandler(async (req, res) => {
        try {
            const { animalId, lifestyleInfo, livingSituation, experienceWithPets, desiredPetCharacteristics, shelterId, notes } = req.body;
            const pet = await Animal.findById(animalId);
            // Create a new adoption application
            const newApplication = new Adoption({
                applicantId:req.user.id,
                animalId,
                lifestyleInfo,
                livingSituation,
                experienceWithPets,
                desiredPetCharacteristics,
                shelterId,
                notes,
                rehomingIndividualId: pet.listedBy
            });

            // Save the new adoption application
            await newApplication.save();

            res.status(201).json({ message: 'Adoption application created successfully', application: newApplication });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }),

    // Get all adoption applications for a shelter
    getApplicationsByShelter: asyncHandler(async (req, res) => {
        try {
            const {shelterId} = req.body;

            // Find adoption applications for the given shelter
            const applications = await Adoption.find({ shelterId })
                .populate('applicantId', 'name email') // Populate applicant information
                .populate('animalId', 'name breed type') // Populate animal details
                .populate('shelterId', 'name location'); // Populate shelter information

            res.status(200).json({ applications });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }),

    // Get a specific adoption application by its ID
    getApplicationById: asyncHandler(async (req, res) => {
        try {
            const {applicationId} = req.body;

            // Find the adoption application by ID
            const application = await Adoption.findById(applicationId)
                .populate('applicantId', 'name email')
                .populate('animalId', 'name breed type')
                .populate('shelterId', 'name location');

            if (!application) {
                return res.status(404).json({ message: 'Adoption application not found' });
            }

            res.status(200).json({ application });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }),

    // Update adoption application status (Approved/Rejected)
    updateApplicationStatus: asyncHandler(async (req, res) => {
        try {
            const { applicationId } = req.body;
            const { adoptionStatus, notes } = req.body;

            // Validate adoption status
            if (!['Approved', 'Rejected'].includes(adoptionStatus)) {
                return res.status(400).json({ message: 'Invalid adoption status' });
            }

            // Find and update the adoption application
            const application = await Adoption.findById(applicationId);

            if (!application) {
                return res.status(404).json({ message: 'Adoption application not found' });
            }

            application.adoptionStatus = adoptionStatus;
            application.notes = notes || application.notes;

            await application.save();

            res.status(200).json({ message: 'Adoption application updated successfully', application });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }),

    // Delete an adoption application
    deleteApplication: asyncHandler(async (req, res) => {
        try {
            const { applicationId } = req.body;

            // Find the adoption application and delete it
            const application = await Adoption.findById(applicationId);

            if (!application) {
                return res.status(404).json({ message: 'Adoption application not found' });
            }

            await application.remove();

            res.status(200).json({ message: 'Adoption application deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    }),
};

module.exports = adoptionController;
