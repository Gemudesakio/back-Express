repositorio back express
Pasos para montar un servidor, conectar a la base de datos y crear los primeros endpoints

1: npm init -y : inicializamos node para un nuevo proyecto
2: npm install express: instalamos express que hara la funcion de servidor
3: npm install dotenv: crear variables de entorno para poder iniciar el servidor
4: configurar el archivo package.json   "type": "module", "start": "node ./server.js": para las primera pruebas
5: npm install nodemon --save-dev: despues de instalar configuramos el script de dev ---->   "dev": "nodemon ./server.js"
6: npm install mongoose: libreria para conexion a bd, conseguimos el enlace a la bd y configuramos database.js
7: importamos la bd en el servidor y hacemos su configuracion basica
    7.1: habilitar peticiones complejas donde los url van a recibir parametros o querys --> server.use(express.urlencoded({extended:true})) 
    7.2: le decimos a express poder manejar el formato json para exportar, recibir, enviar, etc --> server.use(express.json())
    7.3: se instala e inicia cors para la seguriad de origenes cruzados--> server.use(cors())
    7.4: se usa morgan para dar seguimiento a las peticiones que le hacen anuestro servidor --> server.use(morgan('dev'));
8: agregamos el archivo .gitignore
9: creamos la carpeta models, creamos modelos 
10: creamos los scripts para agregar inforamcion segun los modelos a la base de datos   y los configuramos en el package.json
    "dbtienda": "node ./models/data/tiendas.js",
    "dbempleado": "node ./models/data/empleados.js",
    "dbproducto": "node ./models/data/productos.js"
11: creamos los controladores para cada uno de los modelos y definimos sus routers  
    11.1 creamos la carpeta router y creamos un index.js que sera el enrrutador central importamos el objeto router import {Router} from 'express' y lo exportamos
    11.2 importartamos el index.js de router en el servidor de express y le damos uso --> server.use('/api',routerIndex)
    
12 se crean los controladores para cada modelo
    12.1 se importa el modelo
    12.2 se crea la funcion que hara la consulta a la bd con gestion de errores 
13 se enrrutan los controladores en su archivo correspondiente en read
    13.1 perimero se importa el objeto Router
    13.2 se importan los distintos controladores
    13.3 dependiedo el url se enrruta a cada uno de ellos


==============================================================================================================
IMPLEMENTACION DE JOI
1. instgalar joi ---> npm install joi-oid
2. crear las carpetas donde se guardaran los schemas de validacion de joi --> schemas/models
3. se crea el modelo de joi
    3.1 se importa joi import joi from 'joi-oid';
    3.2 se crera una constante schema = joi.object({
        parametroAValidar: joi.ReglaValidacion.messages(
            {
                .....
            }
        ),
        .
        .
        .
        .
    })
4. una vez creado el schema, se crea el  middleware que va a ejecutarlo
    4.1 cramos una funcion anonima que reciba el schema ---> const validator = (schema) => {
        
    }
    4.2 dentro de esta funcion creamos unas constante que se igualara a schema.validate(oobjeto a validar,{objeto de configuracion})
    4.3 verificamos si hay error y retornamos el error, ademas imprimimos el mensaje
    4.4 en caso de no existir error, next()
5. implementamos el middleware en donde se requiera, en este caso los endpoints de create y edit

========================================================================================================================
AUTENTICACION

REGISTER
1. aplicar el paso anterior para registrar un usuario, validando todos sus campos
2. verificar si el usuario ya existe o no, mediante un middleware
3. hashear su contrasenia
    2.1 instalar ---> npm install bcryptjs
    2.2 creamos el middleware createHash
        2.2.1 importamos bcrypjs import bcrypt from "bcryptjs";


======================================================================================================================
LOGIN (sing-in)
1. instalar JWT --> npm install jsonwebtoken
2. instalar passport y passport-jwt: Para manejar la autenticación con JWT--> npm install passport passport-jwt
3. hay que validar los campos que se necesitan para hacer el login, email y pasword, esto se hace con joi y un schema para singIn
4. verificamos si el correo esta registrado, caso contrario retornamos que el usuario aun no esta registado y si lo esta guardmaos al usuario en req.user hacemos next
5. verificamos la contrasenia, recibimos los parametros del body email y pasword, con el email buscamos al usuario y extraemos su clave y la comparamos a traves de bycript que hara el hash y comparara que sean iguales, caso contrario retornara que la contresenia estra mal
6. agregamos todos los middlewares a la ruta de sigin

        =======================================================================================================================
        CREAR TOKERN CON JWT
        1. en el paso anterior se instalaron las dependencias necesarias para este paso usaremos JWT
        2. creamos el middleware que genere el token son la funcion jwt.sing({ Cuerpo del token o info basica de usuario},llave para cifrar,{expiresIn:})
        y lo guardmoas en req.token
        3. agregamos el middleware despues de los middlewares anteriores
        4. retornamos el token en sigIn -->     token: req.token,

        PROTEGER RUTAS O ENDPOINTS
        1. para este paso usaremos las libretrias passport y passport-jwt que ya se instalaron anteriormente 
        2. 

        