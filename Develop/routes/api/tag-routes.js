const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  async function getAllTagsWithProducts(req, res) {
    try {
      const tags = await Tag.findAll({
        include: [
          {
            model: Product,
            as: 'products',
            through: ProductTag,
          },
        ],
      });
      res.status(200).json(tags);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
