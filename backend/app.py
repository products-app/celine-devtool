import argparse
import os
from flask import Flask
from flask_cors import CORS

from src.routes import route, healthy_checker


app = Flask(__name__)
app.config["API_TITLE"] = "celine"
app.config["API_VERSION"] = "v1"
app.config["OPENAPI_VERSION"] = "3.0.2"

app.register_blueprint(route.get_blueprint())
app.register_blueprint(healthy_checker.get_blueprint())


if __name__ == '__main__':
    parser = argparse.ArgumentParser()

    parser.add_argument(
        '--debug',
        action='store_true',
        help="Use flask debug/dev mode with file change reloading"
    )
    args = parser.parse_args()

    PORT = int(os.environ.get('PORT', 5000))

    if args.debug:
        print("Running in debug mode")
        CORS(app)
        app.run(host='0.0.0.0', port=PORT, debug=True)
    else:
        app.run(host='0.0.0.0', port=PORT, debug=False)
