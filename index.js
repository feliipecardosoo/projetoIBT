const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const port = 3000
const conn = require('./db/conn')

// models 
const Membro = require('./models/membro')
const User = require('./models/user')

// Routes 
const membrosRoutes = require('./routes/membrosRoutes')
const authRoutes = require('./routes/authRoutes')

// Import Controller
const MembrosController = require('./controllers/membrosController')


// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// receber resposta do body
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// session middleware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now + 360000),
            httpOnly: true
        }
    })
)

// flash messages
app.use(flash())

// public path
app.use(express.static('public'))

// set session to res
app.use((req,res,next) => {

    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()

})

// Routes
app.use('/', authRoutes)
app.use('/membros', membrosRoutes)
app.get('/', MembrosController.membros)

conn
    //.sync({force: true })
    .sync()
    .then(() => {
        app.listen(port)
        console.log('Server rodando')
    })
    .catch((err) => console.log(`Erro ao acessar a Porta!, ${err}`))