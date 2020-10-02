class Events {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [cb];
    } else {
      this.events[event].push(cb);
    }
  }

  off(event) {
    delete this.events[event];
  }

  trigger(event) {
    if (this.events[event]) {
      for (let cb of this.events[event]) {
        cb();
      }
    }
  }
}
