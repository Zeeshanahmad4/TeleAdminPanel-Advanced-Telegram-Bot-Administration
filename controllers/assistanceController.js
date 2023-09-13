const assistanceRequests = [];  // Mock in-memory database for user assistance requests

exports.viewAllRequests = (req, res) => {
    res.json(assistanceRequests);
};

exports.submitRequest = (req, res) => {
    const { userId, message } = req.body;

    const newRequest = {
        userId,
        message,
        submissionDate: new Date(),
        status: 'Pending'
    };

    assistanceRequests.push(newRequest);
    res.status(201).send('Assistance request submitted successfully');
};

exports.respondToRequest = (req, res) => {
    const { requestId, responseMessage } = req.body;

    const request = assistanceRequests.find(r => r.id === requestId);
    if (!request) {
        return res.status(404).send('Request not found');
    }

    request.status = 'Responded';
    request.response = responseMessage;
    request.responseDate = new Date();
    res.send('Response sent successfully');
};

exports.archiveRequest = (req, res) => {
    const { requestId } = req.body;

    const request = assistanceRequests.find(r => r.id === requestId);
    if (!request) {
        return res.status(404).send('Request not found');
    }

    request.status = 'Archived';
    res.send('Request archived successfully');
};

exports.deleteRequest = (req, res) => {
    const { requestId } = req.body;

    const index = assistanceRequests.findIndex(r => r.id === requestId);
    if (index === -1) {
        return res.status(404).send('Request not found');
    }

    assistanceRequests.splice(index, 1);
    res.send('Request deleted successfully');
};
