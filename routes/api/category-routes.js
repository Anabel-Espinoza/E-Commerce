const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories - TESTED 
router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET category by id - TESTED
router.get('/:id', async (req, res) => {
    try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
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

// CREATE Category - TESTED
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(400).json(err)
  }
})

// UPDATE category by id - TESTED
router.put('/:id', async (req, res) => {
  try {
    const updatedCat = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    console.log(updatedCat)
    if (!updatedCat) {
      res.status(404).json({ message: 'No category found with that id'})
      return
    }
    res.status(200).json({ message: 'Category updated', updatedCat })
  } catch (err) {
    res.status(500).json(err)
  }
});

// DELETE category by id - TESTED
router.delete('/:id', async (req, res) => { 
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
    res.status(200).json({ message: 'Category deleted', deleteCategory })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
