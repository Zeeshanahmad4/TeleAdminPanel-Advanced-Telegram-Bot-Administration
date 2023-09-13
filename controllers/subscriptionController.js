const subscriptions = [];  // Mock in-memory database for subscriptions

exports.viewSubscriptions = (req, res) => {
    res.json(subscriptions);
};

exports.addSubscription = (req, res) => {
    const { subscriptionDetails } = req.body;

    subscriptions.push(subscriptionDetails);
    res.status(201).send('Subscription added successfully');
};

exports.editSubscription = (req, res) => {
    const { subscriptionId, updatedDetails } = req.body;

    const subscription = subscriptions.find(sub => sub.id === subscriptionId);
    if (!subscription) {
        return res.status(404).send('Subscription not found');
    }

    Object.assign(subscription, updatedDetails);
    res.send('Subscription updated successfully');
};

exports.deleteSubscription = (req, res) => {
    const { subscriptionId } = req.body;

    const index = subscriptions.findIndex(sub => sub.id === subscriptionId);
    if (index === -1) {
        return res.status(404).send('Subscription not found');
    }

    subscriptions.splice(index, 1);
    res.send('Subscription deleted successfully');
};
