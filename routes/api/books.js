const express = require('express')
const router = express.Router()

const Book = require('../../models/Book')

router.get('/test', (req, res) => {
    res.send('Book route.')
})

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No books found' }))
})

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No book found' }))
})

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Success: Book added' }))
        .catch(err => res.status(400).json({ error: 'Error: Unable to add this book' }))
})

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Success: Book updated'}))
        .catch(err => res.status(400).json({ error: 'Error: Unable to update this book'}))
})

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msg: 'Success: Book deleted'}))
        .catch(err => res.status(404).json({ error : 'Error: Book does not exist' }))
})

module.exports = router;