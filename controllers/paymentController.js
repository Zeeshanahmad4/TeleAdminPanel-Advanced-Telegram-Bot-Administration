const payments = [];  // Mock in-memory database for payments

exports.viewPayments = (req, res) => {
    res.json(payments);
};

exports.addPayment = (req, res) => {
    const { userId, contentId, amount } = req.body;

    const newPayment = {
        userId,
        contentId,
        amount,
        date: new Date()
    };

    payments.push(newPayment);
    res.status(201).send('Payment added successfully');
};

exports.editPayment = (req, res) => {
    const { paymentId, updatedDetails } = req.body;

    const payment = payments.find(p => p.id === paymentId);
    if (!payment) {
        return res.status(404).send('Payment not found');
    }

    Object.assign(payment, updatedDetails);
    res.send('Payment updated successfully');
};

exports.deletePayment = (req, res) => {
    const { paymentId } = req.body;

    const index = payments.findIndex(p => p.id === paymentId);
    if (index === -1) {
        return res.status(404).send('Payment not found');
    }

    payments.splice(index, 1);
    res.send('Payment deleted successfully');
};
