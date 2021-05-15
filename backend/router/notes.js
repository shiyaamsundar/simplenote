const  express = require('express')
const { createnotes, modifytags ,getallnotes,modifypin,sortbypinnednotes,searchbytags,getnote, updatenotes} = require('../controller/notes')
const router = express.Router()


router.post('/create',createnotes)
router.get('/note/:id',getnote)
router.get('/allnotesordered',getallnotes)
router.put('/updatenotes/:id',updatenotes)
router.put('/modifytags/:id',modifytags)

router.put('/modifypin/:id',modifypin)
router.get('/search',searchbytags)



module.exports=router