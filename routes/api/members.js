/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const express = require('express')
const uuid = require('uuid')

const router = express.Router()
const buttons = require('../../Members')

// Gets All Buttons
router.get('/', (req, res) => res.json(members))

// Get Single Button
router.get('/:id', (req, res) => {
    const found = buttons.some(button => button.id === parseInt(req.params.id))

    if (found) {
        res.json(buttons.filter(button => button.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({
            msg: `No button with the id of ${req.params.id}`
        })
    }
})

// Create Button
router.post('/', (req, res) => {
    const newButton = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newButton.name || !newButton.email) {
        return res.status(400).json({
            msg: 'Please include a name and email'
        })
    }

    buttons.push(newButton)
    res.json(buttons)
})

// Update Button
router.put('/:id', (req, res) => {
    const found = buttons.some(button => button.id === parseInt(req.params.id))

    if (found) {
        const updButton = req.body
        buttons.forEach(button => {
            if (button.id === parseInt(req.params.id)) {
                button.name = !updButton.name ? button.name : updButton.name
                button.email = updButton.email ? updButton.email : button.email

                res.json({
                    msg: 'Button updated',
                    button
                })
            }
        })
    } else {
        res.status(400).json({
            msg: `No button with the id of ${req.params.id}`
        })
    }
})

// Delete Button
router.delete('/:id', (req, res) => {
    // eslint-disable-next-line arrow-parens
    const found = buttons.some(button => button.id === parseInt(req.params.id))

    if (found) {
        res.json({
            msg: 'Button deleted',
            buttons: buttons.filter(button => button.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({
            msg: `No button with the id of ${req.params.id}`
        })
    }
})

module.exports = router