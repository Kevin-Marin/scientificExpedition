import Explorer from "../models/explorerModel.js";

const store = async (req, res) => {
  try {
    const { name, fieldOfStudy, expeditionsParticipated } = req.body;

    await Explorer.create({ name, fieldOfStudy, expeditionsParticipated });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const index = async (req, res) => {
  try {
    const content = await Explorer.find().exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const content = await Explorer.findById(req.params.id)
      .exec();

    res.json(content);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { name, fieldOfStudy, expeditionsParticipated } = req.body;

    await Explorer.findByIdAndUpdate(req.params.id, {
      name,
      fieldOfStudy,
      expeditionsParticipated,
    }).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    await Explorer.findByIdAndDelete(req.params.id).exec();

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  store,
  index,
  show,
  update,
  destroy,
};