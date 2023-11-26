from flask import jsonify, Blueprint


BLP_API = Blueprint('route', __name__)


def get_blueprint():
    return BLP_API


@BLP_API.route('/apps', methods=['GET'])
def get_apps():
    return jsonify({"ok": True})
