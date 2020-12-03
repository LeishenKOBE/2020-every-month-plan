const EventChannel = {
  list: [],
  subscribe(callback) {
    this.list.push(callback);
  },
  dispatch(data) {
    this.list.forEach((item) => {
      item(data);
    });
  },
};

export default EventChannel;
