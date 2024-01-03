import {Request, Response } from 'express';

const express = require("express");
const router = express.Router();

// Rota de health para saber o status do sistema
router.get('/health', (request: Request, response: Response) => {
    return response.status(200), response.json({ message: 'Ok!' })
});

module.exports = router;