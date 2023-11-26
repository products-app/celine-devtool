from flask import jsonify, Blueprint


HEALTHY_CHECKER = Blueprint('healthy_checker', __name__)


def get_blueprint():
    return HEALTHY_CHECKER


@HEALTHY_CHECKER.route('/', methods=['GET'])
def get_apps():
    return jsonify({"ok": True})
