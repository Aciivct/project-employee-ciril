const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
const cors = require('cors')

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}))

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));

// Server code

app.listen(4200)
