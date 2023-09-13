const identityVerifications = [];  // Mock in-memory database for identity verifications

exports.viewAllVerifications = (req, res) => {
    res.json(identityVerifications);
};

exports.submitVerification = (req, res) => {
    const { userId, identityDetails } = req.body;

    const newVerification = {
        userId,
        ...identityDetails,
        submissionDate: new Date(),
        status: 'Pending'
    };

    identityVerifications.push(newVerification);
    res.status(201).send('Identity verification submitted successfully');
};

exports.approveVerification = (req, res) => {
    const { verificationId } = req.body;

    const verification = identityVerifications.find(v => v.id === verificationId);
    if (!verification) {
        return res.status(404).send('Verification not found');
    }

    verification.status = 'Approved';
    res.send('Verification approved successfully');
};

exports.rejectVerification = (req, res) => {
    const { verificationId } = req.body;

    const verification = identityVerifications.find(v => v.id === verificationId);
    if (!verification) {
        return res.status(404).send('Verification not found');
    }

    verification.status = 'Rejected';
    res.send('Verification rejected');
};
