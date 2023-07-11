```
$ cd backend
$ python3 -m venv env
```
create a virtual env & activate it

```
$ source env/bin/activate
(env)$
```
install requirement, then, run the app on port 5001
```
(env)$ pip install -r requirements.txt
(env)$ flask run --port=5001 --debug
```