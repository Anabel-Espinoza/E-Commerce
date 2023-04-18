const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { tableName } = require('../../models/Product');

// The `/api/tags` endpoint

  // find all tags - TESTED, check included product ok
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

  // find a single tag by its `id` - TESTED, check included product ok
router.get('/:id', async (req, res) => {
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]   // be sure to include its associated Product data
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

  // create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
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

    res.status(200).json(deleteTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
