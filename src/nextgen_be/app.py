from flask import Flask, request
from flask_mysqldb import MySQL

# COnfiguraciones básicas de la aplicación de flask y de la base de datos
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = ''
app.config["MYSQL_DB"] = "nextgen_db"
mysql = MySQL(app)

@app.route('/')
def home():
    return "Hello world"

@app.route('/register', methods=['POST'])
def register():   
    content = request.get_json() 
    username = content['nombre_usuario']
    email = content['correo_usuario']
    password = content['contra_usuario']
    cur = mysql.connection.cursor()
    req = f'INSERT INTO usuarios (nombre_usuario, correo_usuario, contra_usuario) VALUES (\"{username}\", \"{email}\", \"{password})\"'
    cur.execute(req)
    return 'Ok!'

if __name__ == '__main__':
    app.run(port=5000, debug=True)



