const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb+srv://overlord:Edb22edb22@cluster0.e2awg.mongodb.net/Todo')
.then(() => console.log('Подключение к MongoDB прошло успешно'))
.catch(() => console.log('Не удалось подключиться к MongoDB'))

app.use(require('./routes/todos.route'))

app.listen(3030, () => {
    console.log('Сервер запушен')
})