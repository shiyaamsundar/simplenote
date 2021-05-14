const  express = require('express')
const { createnotes, modifytags ,getallnotes,modifypin,sortbypinnednotes,searchbytags} = require('../controller/notes')
const router = express.Router()


router.post('/create',createnotes)
router.get('/allnotes',getallnotes)
router.get('/allnotesordered',getallnotes)
router.put('/modifytags/:id',modifytags)
router.put('/modifypin/:id',modifypin)
router.get('/search',searchbytags)



module.exports=router