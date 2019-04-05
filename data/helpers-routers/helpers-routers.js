const express = require('express')
const router = express.Router()

const db = require('../dbConfig.js')

router.get('/', (req, res) => {
    db('projects')
    .then(projects =>  res.json(
        projects.map(projects => ({
            ...projects,
            completed: projects.completed === 0 ? false : true
        }))
    ))
    .catch(error => res.status(500).json(error))
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    db('projects')
    .where('projects.id', id)
    .then(project => {
        const selectedProject = project[0]
        if (!selectedProject) {
            res.status(404).json({message: `Project with an ID of ${id} not found`})
        } else {
            
            db('actions')
            .where('actions.project_id', id)
            .then(actions => {
                res.json({
                    ...selectedProject,
                    completed: selectedProject.completed === 0 ? false : true,
                    actions: actions.map(actions => ({
                        ...actions,
                        completed: actions.completed === 0 ? false : true,
                    }))
                })
            })
        }
        
    })
    .catch(error => res.status(500).json(error))
})



module.exports = router