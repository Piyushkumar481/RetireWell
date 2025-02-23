from flask import Flask, request, session, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
import bcrypt

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for session handling
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))

with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return render_template('signup.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['name']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']

        if password != confirm_password:
            return render_template('signup.html', error='Passwords do not match!')

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return render_template('signup.html', error='Email already registered!')
        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect('/login')
    return render_template('signup.html') 

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()

        if user and user.check_password(password):
            session['name'] = user.username
            session['email'] = user.email
            return redirect('/home')
        else:
            return render_template('login.html', error='Invalid User')
    return render_template('login.html')  # Return login form for GET requests

@app.route('/home')
def home():
    if session.get('name'):
        return render_template('home.html', name=session['name'])
    return redirect('/login')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
