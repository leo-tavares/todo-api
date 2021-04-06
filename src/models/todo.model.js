class TodoModel {
  constructor({ data, status, description }) {
    this._data = data;
    this._status = status;
    this._description = description;
  }

  static todo() {
    return {
      data: this._data,
      status: this._status,
      description: this._description,
    };
  }
}



module.exports = TodoModel;
