const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll() // TESTED - Need to include associated Products
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
    try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }] // TESTED - includes associated Products: check this
    })

    if (!categoryById) {
      res.status(404).json({ message: 'No category found with this id'})
      return
    }

    res.status(200).json(categoryById)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => { // TESTED
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => { // TESTED
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })

    if (!deleteCategory) {
      res.status(404).json({ message: 'No category found with this id'})
      return
    }

    res.status(200).json(deleteCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
