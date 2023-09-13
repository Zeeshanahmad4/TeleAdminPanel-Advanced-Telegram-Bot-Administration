const contents = [];  // 
exports.viewAllContent = (req, res) => {
    res.json(contents);
};

exports.uploadContent = (req, res) => {
    const { userId, contentDetails } = req.body;

    const newContent = {
        userId,
        ...contentDetails,
        uploadDate: new Date()
    };

    contents.push(newContent);
    res.status(201).send('Content uploaded successfully');
};

exports.editContent = (req, res) => {
    const { contentId, updatedDetails } = req.body;

    const content = contents.find(c => c.id === contentId);
    if (!content) {
        return res.status(404).send('Content not found');
    }

    Object.assign(content, updatedDetails);
    res.send('Content updated successfully');
};

exports.deleteContent = (req, res) => {
    const { contentId } = req.body;

    const index = contents.findIndex(c => c.id === contentId);
    if (index === -1) {
        return res.status(404).send('Content not found');
    }

    contents.splice(index, 1);
    res.send('Content deleted successfully');
};
