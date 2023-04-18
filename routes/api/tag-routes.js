const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { tableName, update } = require('../../models/Product');

// The `/api/tags` endpoint

// GET all tags - TESTED
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }] 
    })
    res.status(200).json(allTags)
   } catch (err) {
    res.status(500).json(err)
   }
});

// GET tag by id - TESTED
router.get('/:id', async (req, res) => {
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })

    if (!tagById) {
      res.status(404).json({ message: 'No tag found with that id'})
      return
    }

    res.status(200).json(tagById)

  } catch (err) {
    res.status(500).json(err)
  }
});

// CREATE tag - TESTED
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
  
});

// UPDATE tag by id
router.put('/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!updatedTag) {
      res.status(404).json({  message: 'No tag found with that id' })
      return
    }
    res.status(200).json({ message: 'Tag updated', updatedTag })
  } catch (err) {
    res.status(500).json(err)
  }
});

// DELETE tag by id - TESTED
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!deleteTag) {
      res.status(404).json({ message: 'No tag found with that id'})
      return
    }

    res.status(200).json({ message: 'Tag deleted', deleteTag })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
