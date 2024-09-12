const Discussion = require('../models/Discussion');

exports.askQuestion = async (req, res) => {
  const { courseId } = req.params;
  const { question } = req.body;

  try {
    const newDiscussion = new Discussion({
      course: courseId,
      user: req.user.id,
      question
    });

    await newDiscussion.save();
    res.json(newDiscussion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.answerQuestion = async (req, res) => {
  const { discussionId } = req.params;
  const { answer } = req.body;

  try {
    const discussion = await Discussion.findById(discussionId);
    if (!discussion) return res.status(404).json({ msg: 'Discussion not found' });

    discussion.answer = answer;
    await discussion.save();
    res.json(discussion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
