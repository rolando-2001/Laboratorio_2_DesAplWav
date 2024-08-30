import { Router } from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, './static/index.html'));
})


router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, './static/about.html'));
})

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname, './static/contact.html'));
})


export default router;